<template>
  <div class="wavesurfer-player">

    <!-- 视频播放器（仅在传入视频时显示） -->
    <div ref="waveform" class="waveform"></div>

    <!-- 添加Minimap容器 -->
    <div v-if="showMinimap" ref="minimap" class="minimap"></div>
    <div v-if="showTimeline" ref="timeline" class="timeline"></div>

    <!-- 添加播放控制器 -->
    <div class="controls">

      <button @click="playPause">{{ isPlaying ? 'Pause' : 'Play' }}</button>

      <!-- 音量控制 -->
      <div class="volume-control" v-if="showVolumeControl">
        <label>
          Volume: <span>{{ (volume * 100).toFixed(0) }}%</span>
        </label>
        <div class="volume-slider">
          <span>0%</span>
          <input type="range" v-model="volume" min="0" max="1" step="0.01" @input="setVolume">
          <span>100%</span>
        </div>
      </div>
      <!-- 速度控制 -->
      <div class="speed-control" v-if="showSpeedControl">
        <label>
          Speed: <span class="rate-value">{{ (speed * 1).toFixed(1) }}</span> x
        </label>

        <div class="speed-slider">
          <span>0.1x</span>
          <input type="range" v-model="speed" min="0.1" :max="4" step="0.1" @input="setAudioRate">
          <span>4x</span>
        </div>
      </div>
      <!-- 音高控制 -->
      <label class="pitch-control" v-if="showPitchControl">
        <input type="checkbox" v-model="preservePitch" @change="handlePitchChange" />
        保留音高
      </label>

    </div>
  </div>
</template>

<script>
import WaveSurfer from 'wavesurfer.js'
import Minimap from 'wavesurfer.js/dist/plugins/minimap.esm.js' // 添加Minimap插件
import TimelinePlugin from 'wavesurfer.js/dist/plugins/timeline.esm.js'  // 添加Timeline插件
import Hover from 'wavesurfer.js/dist/plugins/hover.esm.js'  // 添加Hover插件
import RegionsPlugin from 'wavesurfer.js/dist/plugins/regions.esm.js'  // 添加Regions插件

export default {
  name: 'WaveSurferPlayer',
  props: {
    audioSrc: String,
    showHover: Boolean,
    showRegions: Boolean,
    // 显示控制参数
    showPitchControl: {
      type: Boolean,
      default: false
    },
    showSpeedControl: {
      type: Boolean,
      default: false
    },
    showVolumeControl: {
      type: Boolean,
      default: true
    },
    showMinimap: {
      type: Boolean,
      default: false
    },
    showTimeline: {
      type: Boolean,
      default: true
    },
    timeInterval: {
      type: Number,
      default: 1
    },
    primaryLabelInterval: {
      type: Number,
      default: 10
    },
    secondaryLabelInterval: {
      type: Number,
      default: 5
    },
    minimapHeight: {
      type: Number,
      default: 40
    },
    minPxPerSec: {
      type: Number,
      default: 100
    },
    regions: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      wavesurfer: null,
      isPlaying: false,
      volume: 1,
      speed: 1,
      preservePitch: true,
      regionsPlugin: null,
      activeRegion: null,

      audioContext: null,
    }
  },
  computed: {
  },
  mounted() {
    this.initWaveSurfer()

    if (this.audioSrc) {
      this.loadAudio(this.audioSrc)
    }
  },
  beforeDestroy() {
    if (this.wavesurfer) {
      this.wavesurfer.destroy()
    }
  },
  watch: {
    audioSrc(newSrc) {
      if (newSrc && this.wavesurfer) {
        this.loadAudio(newSrc)
      }
    }
  },
  methods: {
    initWaveSurfer() {
      const plugins = []
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)()
      // 添加Minimap插件
      if (this.showMinimap) {
        plugins.push(
          Minimap.create({
            container: this.$refs.minimap,
            height: this.minimapHeight,
            waveColor: '#8B8B8B',
            progressColor: '#3990B3',
            cursorColor: '#E91414',
            cursorWidth: 2,
            showRegions: true,
            regions: [],
            hideScrollbar: false,
            scrollParent: true,
            deferInit: true,
          }),
        )
      }
      if (this.showTimeline) {  // 需要在props中定义这个参数
        plugins.push(
          TimelinePlugin.create({
            container: this.$refs.timeline,
            timeInterval: this.timeInterval, // 时间间隔
            primaryLabelInterval: this.primaryLabelInterval, // 主要标签间隔
            secondaryLabelInterval: this.secondaryLabelInterval, // 次要标签间隔
            primaryFontSize: 16,
            secondaryFontSize: 12,
            zoomDebounce: false,
            isTouch: true,
            isKeyboard: true,
            height: 20,
          }),
        )
      }
      if (this.showHover) {
        plugins.push(
          Hover.create({
            container: this.$refs.waveform,
            lineColor: '#FF34F5',
            lineWidth: 3,
            labelBackground: '#1B1B1B8E',
            labelColor: '#fff',
            labelSize: '14px',
            labelPadding: { top: 4, right: 8, bottom: 4, left: 8 },
            formatTimeCallback: (time) => time.toFixed(2) + 's',
          }),
        )
      }
      if (this.showRegions) {
        this.regionsPlugin = RegionsPlugin.create()
        plugins.push(this.regionsPlugin)
      }

      this.wavesurfer = WaveSurfer.create({
        container: this.$refs.waveform,
        backend: 'WebAudio',
        audioContext: this.audioContext, // 使用 Web Audio API
        waveColor: '#525252',       // 波形颜色
        progressColor: '#EEB12E',   // 播放进度颜色
        cursorColor: '#1a1a1a',     // 光标颜色
        cursorWidth: 2,             // 光标宽度
        barWidth: 8,                // 波形条宽度
        barRadius: 5,               // 波形条圆角
        barHeight: 1,               // 波形条高度
        barGap: 3,                  // 波形条间距
        barAlign: 'center',         // 波形条对齐方式
        height: 100,                // 波形高度
        audioRate: this.speed,      // 音频播放速率
        responsive: true,           // 响应式布局
        plugins: plugins,  // 传入插件数组
        minPxPerSec: this.minPxPerSec,
        hideScrollbar: false,
        autoCenter: true,
      })

      this.wavesurfer.setVolume(this.volume)

      this.wavesurfer.on("interaction", () => {
        console.log("点击波形！当前进度:", this.wavesurfer.getCurrentTime());
      });

      this.wavesurfer.on('play', () => {
        this.isPlaying = true
      })

      this.wavesurfer.on('pause', () => {
        this.isPlaying = false
      })

      this.wavesurfer.on('ready', () => {
        console.log('WaveSurfer is ready!')
        this.setAudioRate()
        this.setupRegions()
        
      })
      this.wavesurfer.on('error', (error) => {
        console.error('WaveSurfer error:', error)
      })

    },
    loadAudio(url) {
      if (!this.wavesurfer) return;

      this.wavesurfer.load(url)
    },

    playPause() {
      if (this.wavesurfer){
        this.wavesurfer.playPause();
        this.isPlaying = !this.isPlaying;
      }
    }, 
    
    setVolume() {
      if (this.wavesurfer) {
        this.wavesurfer.setVolume(this.volume)
      }
    },
    handlePitchChange() {
      if (this.wavesurfer && this.wavesurfer.setPlaybackRate) {
        // 保持当前速率，只更新preservePitch参数
        this.wavesurfer.setPlaybackRate(this.speed, this.preservePitch)
      }
    },
    setAudioRate() {
      if (this.wavesurfer && this.wavesurfer.setPlaybackRate) {
        this.wavesurfer.setPlaybackRate(this.speed, this.preservePitch)
        if (this.isPlaying) {
          this.wavesurfer.play() // 保持播放状态
        }
      }
    },
    setupRegions() {
      if (!this.showRegions || !this.regionsPlugin) return;

      this.regions.forEach(region => {
        this.regionsPlugin.addRegion({
          start: region.start,
          end: region.end,
          content: region.content,
          color: region.color
        });
      });

      const randomColor = () => `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.5)`;
      this.regionsPlugin.enableDragSelection({ color: 'rgba(255, 0, 0, 0.1)' });

      this.regionsPlugin.on('region-clicked', (region, e) => {
        e.stopPropagation();
        this.activeRegion = region;
        region.play(true);
      });
      this.regionsPlugin.on('region-updated', (region) => {
        console.log('Updated region:', region);
      });
    },
  }
}
</script>

<style>
/* 保持之前的樣式不變 */
.wavesurfer-player {
  margin: 20px 0;
  padding: 10px;
  border: 1px solid #DFDFDF;
  border-radius: 8px;
}

.waveform {
  padding: 10px;
  margin-bottom: 20px;
}

.active-setting {
  color: #9963FD;
  font-weight: bold;
}

.minimap div {
  height: auto;
  /* width: 100% !important;  */
  margin-bottom: 10px;
  border-radius: 0px;
}

.minimap canvas {
  border-radius: 0px;
}

/* 音量控制區塊CSS */
/* 统一控制区域样式 */
.controls {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  padding: 0px;
  border-radius: 12px;
}

/* 统一按钮样式 */
.controls button {
  padding: 12px 24px;
  width: 100px;
  background: #0D64E7;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

}

.controls button:hover {
  /* transform: translateY(-2px); */
  background-color: #2181FF;

}

.controls button:active {
  transform: translateY(0);
}

/* 统一控制项容器 */
.volume-control,
.speed-control,
.pitch-control {
  position: relative;
  min-width: 100px;
  padding: 5px 5px 0px 5px;
  /* border-radius: 5px; */
  transition: all 0.3s;
}

.volume-control:hover,
.speed-control:hover,
.pitch-control:hover {
  background: rgba(240 240 240 / 0);
}

/* 统一标签样式 */
.volume-control label,
.speed-control label,
.pitch-control label {
  display: block;
  font-weight: 500;
  margin-bottom: 8px;
  font-size: 14px;
  user-select: none;
}

/* 统一数值显示 */
.volume-control label span,
.speed-control .rate-value {
  color: #0077EE;
  font-weight: 600;
  margin-left: 4px;
}

/* 统一滑块容器 */
.volume-slider,
.speed-slider {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 6px;
}

/* 统一百分比/速率标签 */
.volume-slider span,
.speed-slider span {
  font-size: 11px;
  min-width: 26px;
  text-align: center;
}

/* 统一滑块轨道样式 */
.volume-slider input[type="range"],
.speed-slider input[type="range"] {
  -webkit-appearance: none;
  flex-grow: 1;
  height: 6px;
  background: #e0e0e0;
  border-radius: 3px;
  outline: none;
  transition: all 0.2s;
}

/* 统一滑块轨道渐变色 */
.volume-slider input[type="range"]::-webkit-slider-runnable-track,
.speed-slider input[type="range"]::-webkit-slider-runnable-track {
  height: 6px;
  background: linear-gradient(90deg, #0077EE 0%, #00C6FF 100%);
  border-radius: 3px;
}

/* 统一滑块拇指样式 */
.volume-slider input[type="range"]::-webkit-slider-thumb,
.speed-slider input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 18px;
  height: 18px;
  background: white;
  border: 2px solid #0077EE;
  border-radius: 50%;
  cursor: pointer;
  margin-top: -6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

/* 统一悬停效果 */
.volume-slider input[type="range"]:hover::-webkit-slider-thumb,
.speed-slider input[type="range"]:hover::-webkit-slider-thumb {
  transform: scale(1.15);
  /* box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15); */
}

/* 统一音高控制样式 */
.pitch-control {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.pitch-control input[type="checkbox"] {
  -webkit-appearance: none;
  width: 18px;
  height: 18px;
  border: 2px solid #0077EE;
  border-radius: 4px;
  outline: none;
  transition: all 0.2s;
  position: relative;
  cursor: pointer;
}

.pitch-control input[type="checkbox"]:checked {
  background-color: #0077EE;
}

.pitch-control input[type="checkbox"]:checked::after {
  content: "✓";
  position: absolute;
  color: white;
  font-size: 12px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* 响应式调整 */
@media (max-width: 768px) {
  .controls {
    flex-direction: column;
    align-items: stretch;
  }

  .controls button {
    width: 100%;
  }
}

/* Timeline */
.timeline {
  height: 30px;
  margin-bottom: 5px;
  background: rgba(255, 255, 255, 0.1);
}

/* Hover */
.waveform ::part(hover-label):before {
  content: '⏱️ ';
}

.waveform ::part(hover-label) {
  border-radius: 4px;
  padding: 2px 6px;
}

/* Regions */
.waveform ::part(region) {
  border: 1px solid rgba(255, 0, 0, 0.5);
  font-size: 0.7em;
  /*區域字體大小*/
  font-weight: 500;
  line-height: 1.2em;
}

.waveform ::part(region):hover {
  background: rgba(255 255 255 / 0.38);
}

.waveform ::part(region-content) {
  background: rgba(0 0 0 / 0.58);
  color: white;
  padding: 8px 15px 8px 10px;
  border-radius: 4px;
  margin-top: 0px;
}

/* 影片播放 */

</style>