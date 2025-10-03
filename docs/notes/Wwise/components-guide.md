---
title: components-guide
createTime: 2025/10/03 22:08:23
permalink: /Wwise/aojotevs/
---
# Vue 互動組件使用指南

本文檔說明如何在 VuePress 中使用我們的互動式學習組件。

## 組件概覽

### LessonChecklist 組件
互動式課程檢查清單，支持進度保存和視覺回饋。

### LessonProgressOverview 組件  
顯示整體學習進度統計和課程完成情況。

## LessonChecklist 組件

### 基本用法

```vue
<LessonChecklist
  lesson-id="05-random-container"
  title="檢查清單（確認你的學習成果）"
  :items="[
    { text: '理解 Random Container 的基本概念', checked: false },
    { text: '成功創建第一個 Random Container', checked: false },
    { text: '掌握音效隨機播放的設置方法', checked: false },
    { text: '了解權重系統如何影響播放機率', checked: false },
    { text: '學會使用 Avoid Repeat 功能', checked: false },
    { text: '知道如何在遊戲中觸發隨機音效', checked: false }
  ]"
/>
```

### 參數說明

| 參數           | 類型    | 必需 | 默認值                         | 說明                         |
| -------------- | ------- | ---- | ------------------------------ | ---------------------------- |
| `lessonId`     | String  | ✅   | -                              | 課程唯一識別符，用於保存進度 |
| `title`        | String  | ❌   | "檢查清單（確認你的學習成果）" | 清單標題                     |
| `items`        | Array   | ✅   | -                              | 清單項目數組                 |
| `showProgress` | Boolean | ❌   | true                           | 是否顯示進度條和統計         |

### items 數組格式

```javascript
[
  {
    text: "學習目標描述",    // 必需：清單項目文本
    checked: false          // 可選：初始完成狀態，默認 false
  }
]
```

### 事件

| 事件名             | 參數                                         | 說明             |
| ------------------ | -------------------------------------------- | ---------------- |
| `progress-updated` | `{ lessonId, completed, total, percentage }` | 當進度更新時觸發 |

### 方法

| 方法名            | 說明             |
| ----------------- | ---------------- |
| `resetProgress()` | 重置當前課程進度 |

## LessonProgressOverview 組件

### 基本用法

```vue
<LessonProgressOverview
  :lessons="[
    {
      id: '05-random-container',
      title: 'Random Container 入門',
      order: 5,
      icon: '🎲',
      items: 6
    },
    {
      id: '06-switch-container',
      title: 'Switch Container 入門',
      order: 6,
      icon: '🔄',
      items: 7
    }
  ]"
/>
```

### 參數說明

| 參數      | 類型  | 必需 | 說明         |
| --------- | ----- | ---- | ------------ |
| `lessons` | Array | ✅   | 課程配置數組 |

### lessons 數組格式

```javascript
[
  {
    id: "lesson-unique-id",      // 必需：課程ID，對應 LessonChecklist 的 lessonId
    title: "課程標題",            // 必需：課程名稱
    order: 1,                    // 可選：課程順序
    icon: "📚",                  // 可選：課程圖標
    items: 6                     // 必需：該課程的檢查項目總數
  }
]
```

## 在 Markdown 中使用

### 1. 替換現有檢查清單

**舊的 Markdown 格式：**
```markdown
## 🏆 檢查清單（確認你的學習成果）

- [ ] 理解 Random Container 的基本概念
- [ ] 成功創建第一個 Random Container
- [ ] 掌握音效隨機播放的設置方法
```

**新的 Vue 組件格式：**
```vue
<LessonChecklist
  lesson-id="05-random-container"
  :items="[
    { text: '理解 Random Container 的基本概念' },
    { text: '成功創建第一個 Random Container' },
    { text: '掌握音效隨機播放的設置方法' }
  ]"
/>
```

### 2. 添加進度總覽頁面

在課程索引頁面或專門的進度頁面中：

```vue
<LessonProgressOverview
  :lessons="[
    { id: '01-basic-concepts', title: '基本概念', order: 1, items: 5 },
    { id: '02-project-creation', title: '專案創建和界面導覽', order: 2, items: 6 },
    { id: '03-audio-import', title: '音頻導入和管理', order: 3, items: 7 }
  ]"
/>
```

## 數據持久化

### localStorage 鍵值格式
- 鍵：`lesson-{lessonId}`  
- 值：`[true, false, true, ...]` （布爾數組，對應每個檢查項目的完成狀態）

### 進度重置
用戶可以通過 LessonProgressOverview 組件的「重置所有進度」按鈕清除所有保存的進度。

### 進度導出
用戶可以導出 JSON 格式的學習進度報告，包含：
- 導出日期
- 整體進度百分比
- 每個課程的詳細進度

## 樣式自定義

### CSS 自定義屬性
組件支持響應式設計和深色模式，如需自定義樣式，可以覆蓋以下 CSS 類：

```css
/* 自定義檢查清單樣式 */
.lesson-checklist {
  /* 主容器樣式 */
}

.checklist-item {
  /* 檢查項目樣式 */
}

.lesson-progress-overview {
  /* 進度總覽容器樣式 */
}
```

## 最佳實踐

### 1. lessonId 命名規範
- 使用小寫字母和連字符
- 包含課程順序：`01-basic-concepts`, `02-project-creation`
- 保持簡潔且具有描述性

### 2. 檢查項目設計
- 每個項目描述應該具體且可驗證
- 避免過於技術性的語言
- 通常 5-8 個項目比較適合
- 按照學習順序排列

### 3. 進度跟踪
- 定期提醒學習者檢查完成的項目
- 在課程結尾處放置檢查清單
- 考慮在課程開始時也放置清單，讓學習者了解目標

### 4. 多課程管理
- 在課程系列的主頁面放置 LessonProgressOverview
- 確保所有課程的 lessonId 在系列中是唯一的
- 維護統一的課程編號和命名規範

## 故障排除

### 常見問題

**Q: 進度沒有保存？**
A: 檢查 lessonId 是否正確設置，並確保瀏覽器支持 localStorage。

**Q: 組件不顯示？**
A: 確認 VuePress 版本兼容性，檢查組件文件路徑是否正確。

**Q: 樣式顯示異常？**
A: 檢查是否有 CSS 衝突，嘗試清除瀏覽器緩存。

**Q: 移動端顯示問題？**
A: 組件已包含響應式設計，如仍有問題請檢查父容器的 CSS 設置。

## 版本兼容性

- VuePress: 2.0.0-rc.20+
- Vue.js: 3.0+
- 現代瀏覽器支持 localStorage 和 CSS Grid

## 更新日誌

### v1.0.0 (2024-12)
- ✅ 基本的互動式檢查清單功能
- ✅ localStorage 進度持久化
- ✅ 進度統計和總覽組件
- ✅ 響應式設計和深色模式支持
- ✅ 進度導出功能