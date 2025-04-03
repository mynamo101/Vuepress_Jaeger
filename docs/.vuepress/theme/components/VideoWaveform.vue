<template>
    <div>
      <video
        ref="videoElement"
        :src="videoSrc"
        controls
        playsinline
        style="width: 100%; margin: 0 auto; display: block;"
      />
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
      this.initWaveSurfer()
    },
    beforeDestroy() {
      if (this.wavesurfer) {
        this.wavesurfer.destroy()
      }
    },
    methods: {
      initWaveSurfer() {
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
          barGap: 2
        })
  
        // 可以添加一些事件监听
        this.wavesurfer.on('ready', () => {
          console.log('WaveSurfer is ready')
        })
  
        this.wavesurfer.on('error', (error) => {
          console.error('WaveSurfer error:', error)
        })

        this.wavesurfer.on('play', () => {
          this.isPlaying = true
        })

        this.wavesurfer.on('pause', () => {
          this.isPlaying = false
        })
      }
    }
  }
  </script>