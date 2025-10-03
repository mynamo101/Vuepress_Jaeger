<template>
  <div class="lesson-checklist">
    <h3 class="checklist-title">
      <span class="icon">🏆</span>
      {{ title }}
      <span class="progress-badge" v-if="showProgress">
        {{ completedCount }}/{{ localItems.length }}
      </span>
    </h3>
    
    <div class="checklist-items">
      <div
        v-for="(item, index) in localItems"
        :key="index"
        class="checklist-item"
        :class="{ 'completed': item.checked }"
        @click="toggleItem(index)"
      >
        <span class="checkbox-icon">
          <svg v-if="!item.checked" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11" cy="11" r="10" stroke="var(--vp-c-border)" stroke-width="2" fill="none"/>
          </svg>
          <svg v-else width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11" cy="11" r="11" fill="var(--vp-c-green-1, #10b981)"/>
            <path d="M7 11.5L10 14.5L15 9.5" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
        <span class="item-text" :class="{ 'strike': item.checked }">{{ item.text }}</span>
      </div>
    </div>

    <div class="checklist-footer" v-if="completedCount === localItems.length && localItems.length > 0">
      <div class="completion-message">
        🎉 <strong>太棒了！</strong>你已經完成了本節的所有學習目標！
      </div>
    </div>

    <div class="progress-bar" v-if="showProgress">
      <div 
        class="progress-fill" 
        :style="{ width: progressPercentage + '%' }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LessonChecklist',
  props: {
    title: {
      type: String,
      default: '檢查清單（確認你的學習成果）'
    },
    items: {
      type: Array,
      required: true,
      validator: (items) => {
        return items.every(item => 
          typeof item === 'object' && 
          typeof item.text === 'string'
        );
      }
    },
    lessonId: {
      type: String,
      required: true
    },
    showProgress: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      localItems: []
    }
  },
  computed: {
    completedCount() {
      return this.localItems.filter(item => item.checked).length;
    },
    progressPercentage() {
      if (this.localItems.length === 0) return 0;
      return Math.round((this.completedCount / this.localItems.length) * 100);
    }
  },
  watch: {
    items: {
      immediate: true,
      handler(newItems) {
        // 初始化本地狀態
        this.localItems = newItems.map(item => ({
          text: item.text,
          checked: item.checked || false
        }));
        // 加載保存的進度
        this.$nextTick(() => {
          this.loadProgress();
        });
      }
    }
  },
  methods: {
    toggleItem(index) {
      this.localItems[index].checked = !this.localItems[index].checked;
      this.saveProgress();
    },
    saveProgress() {
      if (typeof window !== 'undefined') {
        const progress = this.localItems.map(item => item.checked);
        localStorage.setItem(`lesson-${this.lessonId}`, JSON.stringify(progress));
        
        // 觸發自定義事件，可用於統計
        this.$emit('progress-updated', {
          lessonId: this.lessonId,
          completed: this.completedCount,
          total: this.localItems.length,
          percentage: this.progressPercentage
        });
        
        // 觸發全局事件，讓進度總覽組件可以即時更新
        window.dispatchEvent(new CustomEvent('lesson-progress-changed', {
          detail: {
            lessonId: this.lessonId,
            completed: this.completedCount,
            total: this.localItems.length,
            percentage: this.progressPercentage
          }
        }));
      }
    },
    loadProgress() {
      if (typeof window !== 'undefined') {
        const saved = localStorage.getItem(`lesson-${this.lessonId}`);
        if (saved) {
          try {
            const progress = JSON.parse(saved);
            if (Array.isArray(progress) && progress.length === this.localItems.length) {
              this.localItems.forEach((item, index) => {
                item.checked = progress[index] || false;
              });
            }
          } catch (e) {
            console.warn('Failed to load lesson progress:', e);
          }
        }
      }
    },
    resetProgress() {
      this.localItems.forEach(item => {
        item.checked = false;
      });
      this.saveProgress();
    }
  }
}
</script>

<style scoped>
/* Plume 主題風格，簡潔、柔和、主題色明顯 */
.lesson-checklist {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  padding: 20px 18px;
  margin: 24px 0;
  box-shadow: none;
  transition: background 0.2s, border-color 0.2s;
}

/* 標題區域 */
.checklist-title {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 18px 0;
  font-size: 1.08em;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.icon {
  font-size: 1.3em;
}

/* 進度徽章 */
.progress-badge {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  padding: 3px 10px;
  border-radius: 10px;
  font-size: 0.85em;
  font-weight: 500;
  margin-left: auto;
  border: 1px solid var(--vp-c-brand-1);
}

/* 清單區域 */
.checklist-items {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* 單項區域 */
.checklist-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 7px;
  cursor: pointer;
  transition: border-color 0.2s, background 0.2s;
  position: relative;
  min-height: 38px;
}
.checklist-item:hover {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-bg-soft);
}
.checklist-item.completed {
  background: var(--vp-c-bg-soft);
  border-color: var(--vp-c-green-1);
}

/* 圖標區域 */
.checkbox-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  flex-shrink: 0;
  margin-right: 10px;
  transition: transform 0.2s;
}
.checkbox-icon svg {
  display: block;
  transition: all 0.2s;
}
.checklist-item:hover .checkbox-icon {
  transform: scale(1.1);
}
.item-text {
  flex: 1;
  line-height: 1.6;
  color: var(--vp-c-text-2);
  font-size: 1em;
  transition: color 0.2s;
}
.item-text.strike {
  color: var(--vp-c-green-darker);
  text-decoration: line-through;
  opacity: 0.7;
}

/* 完成提示 */
.checklist-footer {
  margin-top: 18px;
  padding-top: 12px;
  border-top: 1px solid var(--vp-c-divider);
}
.completion-message {
  background: var(--vp-c-green-soft);
  color: var(--vp-c-green-darker);
  padding: 12px;
  border-radius: 7px;
  text-align: center;
  font-size: 1em;
  font-weight: 500;
  animation: slideIn 0.5s ease-out;
}

/* 進度條 */
.progress-bar {
  margin-top: 14px;
  height: 5px;
  background: var(--vp-c-bg);
  border-radius: 3px;
  overflow: hidden;
}
.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--vp-c-brand-1) 0%, var(--vp-c-green-1) 100%);
  border-radius: 3px;
  transition: width 0.3s ease;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 響應式設計 */
@media (max-width: 768px) {
  .lesson-checklist {
    padding: 16px;
    margin: 16px 0;
  }
  
  .checklist-title {
    font-size: 1.1em;
    flex-wrap: wrap;
  }
  
  .progress-badge {
    margin-left: 0;
    margin-top: 4px;
  }
  
  .checklist-item {
    padding: 10px;
  }
}

/* VuePress 主題變量自動處理深淺色模式 */
</style>