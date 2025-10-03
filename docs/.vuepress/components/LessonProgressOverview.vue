<template>
  <div class="lesson-progress-overview">
    <div class="overview-header">
      <h3>
        <span class="icon">📊</span>
        學習進度總覽
      </h3>
      <div class="overall-progress">
        <div class="progress-text">
          總進度: <strong>{{ overallProgress }}%</strong>
        </div>
        <div class="overall-progress-bar">
          <div 
            class="overall-progress-fill" 
            :style="{ width: overallProgress + '%' }"
          ></div>
        </div>
      </div>
    </div>

    <div class="lessons-grid">
      <div 
        v-for="lesson in lessonsWithProgress" 
        :key="lesson.id"
        class="lesson-card"
        :class="{ 'completed': lesson.progress === 100 }"
      >
        <div class="lesson-header">
          <span class="lesson-icon">{{ lesson.icon || '📚' }}</span>
          <div class="lesson-info">
            <h4 class="lesson-title">{{ lesson.title }}</h4>
            <div class="lesson-meta">
              第 {{ lesson.order }} 課
            </div>
          </div>
          <div class="lesson-progress-badge">
            {{ lesson.progress }}%
          </div>
        </div>
        
        <div class="lesson-progress-bar">
          <div 
            class="lesson-progress-fill" 
            :style="{ width: lesson.progress + '%' }"
          ></div>
        </div>
        
        <div class="lesson-stats">
          <span class="completed-items">
            ✅ {{ lesson.completed }}/{{ lesson.total }} 項目完成
          </span>
        </div>
      </div>
    </div>

    <div class="summary-stats">
      <div class="stat-card">
        <div class="stat-number">{{ completedLessons }}</div>
        <div class="stat-label">課程完成</div>
      </div>
      <div class="stat-card">
        <div class="stat-number">{{ totalCompletedItems }}</div>
        <div class="stat-label">項目完成</div>
      </div>
      <div class="stat-card">
        <div class="stat-number">{{ totalItems }}</div>
        <div class="stat-label">總項目數</div>
      </div>
    </div>

    <div class="actions">
      <button @click="resetAllProgress" class="reset-button">
        🔄 重置所有進度
      </button>
      <button @click="exportProgress" class="export-button">
        📥 導出進度
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LessonProgressOverview',
  props: {
    lessons: {
      type: Array,
      required: true,
      validator: (lessons) => {
        return lessons.every(lesson => 
          lesson.id && lesson.title && typeof lesson.items === 'number'
        );
      }
    }
  },
  data() {
    return {
      progressData: {},
      refreshInterval: null
    }
  },
  computed: {
    lessonsWithProgress() {
      return this.lessons.map(lesson => {
        const progress = this.getProgressForLesson(lesson.id);
        return {
          ...lesson,
          completed: progress.completed,
          total: progress.total,
          progress: progress.total > 0 ? Math.round((progress.completed / progress.total) * 100) : 0
        };
      }).sort((a, b) => (a.order || 0) - (b.order || 0));
    },
    overallProgress() {
      const totalItems = this.lessonsWithProgress.reduce((sum, lesson) => sum + lesson.total, 0);
      const completedItems = this.lessonsWithProgress.reduce((sum, lesson) => sum + lesson.completed, 0);
      return totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;
    },
    completedLessons() {
      return this.lessonsWithProgress.filter(lesson => lesson.progress === 100).length;
    },
    totalCompletedItems() {
      return this.lessonsWithProgress.reduce((sum, lesson) => sum + lesson.completed, 0);
    },
    totalItems() {
      return this.lessonsWithProgress.reduce((sum, lesson) => sum + lesson.total, 0);
    }
  },
  mounted() {
    this.loadAllProgress();
    // 監聽 localStorage 變化
    if (typeof window !== 'undefined') {
      window.addEventListener('storage', this.handleStorageChange);
      // 監聽自定義事件（同一頁面內的更新）
      window.addEventListener('lesson-progress-changed', this.handleProgressChange);
      
      // 設置定時刷新（每秒檢查一次）
      this.refreshInterval = setInterval(() => {
        this.loadAllProgress();
      }, 1000);
    }
  },
  beforeUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('storage', this.handleStorageChange);
      window.removeEventListener('lesson-progress-changed', this.handleProgressChange);
      
      if (this.refreshInterval) {
        clearInterval(this.refreshInterval);
      }
    }
  },
  methods: {
    getProgressForLesson(lessonId) {
      if (typeof window === 'undefined') {
        return { completed: 0, total: 0 };
      }
      
      const saved = localStorage.getItem(`lesson-${lessonId}`);
      if (!saved) {
        const lesson = this.lessons.find(l => l.id === lessonId);
        return { completed: 0, total: lesson ? lesson.items : 0 };
      }
      
      try {
        const progress = JSON.parse(saved);
        const completed = Array.isArray(progress) ? progress.filter(Boolean).length : 0;
        const total = Array.isArray(progress) ? progress.length : 0;
        return { completed, total };
      } catch (e) {
        console.warn('Failed to parse lesson progress:', e);
        const lesson = this.lessons.find(l => l.id === lessonId);
        return { completed: 0, total: lesson ? lesson.items : 0 };
      }
    },
    loadAllProgress() {
      const newProgressData = {};
      this.lessons.forEach(lesson => {
        newProgressData[lesson.id] = this.getProgressForLesson(lesson.id);
      });
      this.progressData = newProgressData;
    },
    handleStorageChange(event) {
      if (event.key && event.key.startsWith('lesson-')) {
        this.loadAllProgress();
      }
    },
    handleProgressChange(event) {
      // 處理自定義事件
      this.loadAllProgress();
    },
    resetAllProgress() {
      if (typeof window !== 'undefined') {
        const confirmed = confirm('確定要重置所有學習進度嗎？此操作無法撤銷。');
        if (confirmed) {
          this.lessons.forEach(lesson => {
            localStorage.removeItem(`lesson-${lesson.id}`);
          });
          this.loadAllProgress();
          alert('所有學習進度已重置！');
        }
      }
    },
    exportProgress() {
      if (typeof window !== 'undefined') {
        const exportData = {
          exportDate: new Date().toISOString(),
          overallProgress: this.overallProgress,
          lessons: this.lessonsWithProgress.map(lesson => ({
            id: lesson.id,
            title: lesson.title,
            order: lesson.order,
            completed: lesson.completed,
            total: lesson.total,
            progress: lesson.progress
          }))
        };
        
        const dataStr = JSON.stringify(exportData, null, 2);
        const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
        
        const exportFileDefaultName = `wwise-learning-progress-${new Date().toISOString().split('T')[0]}.json`;
        
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
      }
    }
  }
}
</script>

<style scoped>
.lesson-progress-overview {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  color: var(--vp-c-text-1);
  border-radius: 16px;
  padding: 32px;
  margin: 32px 0;
  box-shadow: var(--vp-shadow-3);
}

.overview-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  flex-wrap: wrap;
  gap: 16px;
}

.overview-header h3 {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0;
  font-size: 1.5em;
  font-weight: 700;
  color: var(--vp-c-text-1);
}

.icon {
  font-size: 1.2em;
}

.overall-progress {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
}

.progress-text {
  font-size: 1.1em;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.overall-progress-bar {
  width: 200px;
  height: 8px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-border);
  border-radius: 4px;
  overflow: hidden;
}

.overall-progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--vp-c-brand-1), var(--vp-c-green-1));
  border-radius: 4px;
  transition: width 0.5s ease;
}

.lessons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 32px;
}

.lesson-card {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  padding: 20px;
  transition: all 0.3s ease;
}

.lesson-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--vp-shadow-4);
  border-color: var(--vp-c-brand-1);
}

.lesson-card.completed {
  background: var(--vp-c-green-soft);
  border-color: var(--vp-c-green-1);
}

.lesson-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.lesson-icon {
  font-size: 1.5em;
  flex-shrink: 0;
}

.lesson-info {
  flex: 1;
}

.lesson-title {
  margin: 0 0 4px 0;
  font-size: 1.1em;
  font-weight: 600;
  line-height: 1.3;
  color: var(--vp-c-text-1);
}

.lesson-meta {
  font-size: 0.9em;
  color: var(--vp-c-text-2);
}

.lesson-progress-badge {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  border: 1px solid var(--vp-c-brand-1);
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.9em;
  font-weight: 600;
  flex-shrink: 0;
}

.lesson-progress-bar {
  height: 6px;
  background: var(--vp-c-bg-soft);
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 12px;
}

.lesson-progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--vp-c-brand-1), var(--vp-c-green-1));
  border-radius: 3px;
  transition: width 0.3s ease;
}

.lesson-stats {
  font-size: 0.9em;
  color: var(--vp-c-text-2);
}

.summary-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  margin-bottom: 32px;
}

.stat-card {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  padding: 20px;
  text-align: center;
}

.stat-number {
  font-size: 2.5em;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 8px;
  color: var(--vp-c-brand-1);
}

.stat-label {
  font-size: 0.9em;
  color: var(--vp-c-text-2);
  font-weight: 500;
}

.actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.reset-button,
.export-button {
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 0.95em;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.reset-button:hover,
.export-button:hover {
  background: var(--vp-c-brand-soft);
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  transform: translateY(-2px);
}

.reset-button:active,
.export-button:active {
  transform: translateY(0);
}

/* 響應式設計 */
@media (max-width: 768px) {
  .lesson-progress-overview {
    padding: 20px;
    margin: 20px 0;
  }
  
  .overview-header {
    flex-direction: column;
    align-items: stretch;
    text-align: center;
  }
  
  .overall-progress {
    align-items: center;
  }
  
  .overall-progress-bar {
    width: 100%;
    max-width: 300px;
  }
  
  .lessons-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  
  .lesson-card {
    padding: 16px;
  }
  
  .actions {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>