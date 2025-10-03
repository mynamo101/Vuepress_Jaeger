<template>
  <div class="video-container">
    <iframe
      :src="videoUrl"
      frameborder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  name: 'VideoEmbed',
  props: {
    src: {
      type: String,
      required: true
    },
    platform: {
      type: String,
      default: 'vimeo'
    }
  },
  computed: {
    videoUrl() {
      if (this.platform === 'vimeo') {
        // 从完整 URL 提取视频 ID
        const match = this.src.match(/vimeo\.com\/video\/(\d+)/);
        const videoId = match ? match[1] : this.src;
        return `https://player.vimeo.com/video/${videoId}?fl=pl&fe=vl`;
      }
      return this.src;
    }
  }
}
</script>

<style scoped>
.video-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 比例 */
  height: 0;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  margin: 1.5rem 0;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* 暗色主题适配 */
@media (prefers-color-scheme: dark) {
  .video-container {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
}
</style>