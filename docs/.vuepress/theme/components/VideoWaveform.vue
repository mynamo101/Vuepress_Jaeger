<template>
  <div class="video-wrapper">
    <video ref="videoElement" :src="videoSrc" controls playsinline
      style="width: 100%; margin: 0 auto; display: block; border-radius:15px;" />
    <div ref="waveformContainer" style="margin-top: 20px;"></div>
  </div>
</template>

<script>
import WaveSurfer from 'wavesurfer.js'

export default {
  name: 'VideoWaveform',
  props: {
    videoSrc: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      wavesurfer: null,
      isPlaying: false
    }
  },
  mounted() {
    this.initWaveSurfer();
    this.$refs.videoElement.addEventListener('play', (e) => {
      console.log('Video element play triggered');
      if (!this.isPlaying) {
        e.preventDefault();
        this.$refs.videoElement.pause();
        console.log('Blocked unexpected play in VideoWaveform');
      }
    })
    this.$refs.videoElement.addEventListener('click', (e) => {
      console.log('Video element clicked directly');
    })
  },
  beforeDestroy() {
    if (this.wavesurfer) {
      this.wavesurfer.destroy()
    }
  },
  methods: {
    initWaveSurfer() {
      console.log(this.wavesurfer)
      this.wavesurfer = WaveSurfer.create({
        container: this.$refs.waveformContainer,
        waveColor: 'rgb(200, 0, 200)',
        progressColor: 'rgb(100, 0, 100)',
        media: this.$refs.videoElement,
        // 可选配置
        backend: 'MediaElement',
        responsive: true,
        cursorWidth: 1,
        cursorColor: '#ddd',
        barWidth: 2,
        barRadius: 3,
        barGap: 2,
        dragToSeek: true,
      })

      // 可以添加一些事件监听
      this.wavesurfer.on('ready', () => {
        console.log('WaveSurfer is ready')
      })

      this.wavesurfer.on('error', (error) => {
        console.error('WaveSurfer error:', error)
      })

      this.wavesurfer.on('play', () => {
        console.log('影片被播放');
        this.$refs.videoElement.play();
        this.isPlaying = true
      })

      this.wavesurfer.on('pause', () => {
        this.isPlaying = false
      })
      this.$refs.videoElement.addEventListener('play', () => {
        if (!this.isPlaying) {
          this.wavesurfer.play();
        }
        console.log('Video element play triggered');
      });
    }
  }
}
</script>

<style>
.video-wrapper {
  pointer-events: auto; /* 确保事件正常触发 */
}
</style>