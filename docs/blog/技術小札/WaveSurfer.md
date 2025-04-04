---
title: WaveSurferPlayer 讓你的聲波動起來
createTime: 2025/04/03 19:19:04
permalink: /article/g6ebyl5g/
tags: 
 - 聲音
 - Vue
 - 插件
---

## **WaveSurferPlayer**

`WaveSurferPlayer` 是一個功能強大的聲音播放器，結合了多樣化的插件和直覺的波形，對於要在網頁上展示聲音檔案是非常好的工具。
下面介紹一些關於一些使用的方式：

## **新增基本組件**
對於在Plume主題下，我們在/components下方新增一個 `WaveSurferPlayer.vue`
如果要使用影片播放功能，可以另外新增一個 `VideoWaveform.vue`
::: file-tree

- docs
  - .vuepress
    - config.ts
  - theme **在這個資料夾**
    - components
      - **WaveSurferPlayer.vue**
      - **VideoWaveform.vue**
- package.json
- .gitignore
- README.md
- …
:::

## **基本播放方式**

### 顯示音檔波形

最簡單的顯示方式。
``` md
<WaveSurferPlayer audioSrc="/Path/Music.ogg" />
```
如果要增加一些細節調整，可以寫在括號內，記得要使用Kebab-Case

``` md
audioSrc="/Path/Music.ogg" 
	:show-Volume-Control="true"	//顯示音量播放
	:show-Speed-Control="false" //速度控制
	:show-Pitch-Control="false" //音調控制
	:show-minimap="false" //顯示小波形圖
	:min-Px-Per-Sec="1" //波形密度
	:show-hover="true" //顯示Hover圖標
/>
```

<!-- ::: chat title="你對聲音的看法"
{:2025-03-24 10:15:00}

{技術}
我認真說我覺得有點問題！
{技術}
事情不是你想得那樣。
{.}
不就好了嗎==

{技術}
用户二的消息

{.}
不就好了嗎12==
::: -->

使用結果如下：

<WaveSurferPlayer 
audioSrc="/Audio/Music-Ambient-01.ogg" 
	:show-Volume-Control="true"	
	:show-Speed-Control="false"
	:show-Pitch-Control="false"
	:show-minimap="false"
	:min-Px-Per-Sec="1"
	:show-hover="true"
/>



### 顯示影片波形
如果要顯示影片的波形，我們可以在文件裏面用下面的語法來表示

``` md
<VideoWaveform videoSrc="/Path/Video.mp4" 
/>
```
使用結果如下：
<VideoWaveform videoSrc="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" 
	:min-Px-Per-Sec="300"
	:bar-Width="1"
	:bar-Gap="2"
/>
