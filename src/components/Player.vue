<template>
  <div class="player">
    <audio id="audio" :src='mp3Url' autoplay></audio>
    <a class="mp3Pic" href="#"><img :src="mp3Albumpic"></a>
    <div class="mp3Textbox">
      <p class="mp3Name">{{mp3Name}}</p>
      <p class="mp3Author">{{mp3Author}}</p>
    </div>
    <div class="btn-group">
      <i class="iconfont icon-caidan"></i>
      <i class="iconfont icon-zanting1" @click="pause" v-if="isPlaying"></i>
      <i class="iconfont icon-bofang" @click="play" v-else></i>
      <i class="iconfont icon-xiayishou"></i>
    </div>
  </div>
</template>

<script>
import bus from '../bus.js'

export default {
  name: 'player',
  data () {
    return {
      isPlaying: false,
      mp3Name: '',
      mp3Author: '',
      mp3Url: '',
      mp3Albumpic: require('../assets/logo_small.png')
    }
  },
  methods: {
    play () {
      let audio = document.getElementById('audio')
      if (audio.paused) {
        audio.play()
        this.isPlaying = true
      }
    },
    pause () {
      let audio = document.getElementById('audio')
      if (!audio.paused) {
        audio.pause()
        this.isPlaying = false
      }
    }
  },
  created () {
    bus.$on('playMp3', data => {
      this.isPlaying = true
      this.mp3Name = bus.currentData.name
      this.mp3Author = bus.currentData.artists[0].name
      this.mp3Url = bus.currentData.mp3Url
      this.mp3Albumpic = bus.currentData.album.blurPicUrl
      // 版权检测
      let audio = document.getElementById('audio')
      audio.onerror = function () {
        window.alert('版权悲剧了:(')
      }
    })
  }
}
</script>

<style>
.player {
  width: 100%;
  height: 42px;
  position: fixed;
  bottom:0;
  padding: 5px 0;
  background-color: #f7f7fa;
  color: #888;
  z-index: 999;
}
.player:before{
  content: " ";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 1px;
  border-top: 1px solid #979797;
  color: #979797;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: scaleY(.5);
  transform: scaleY(.5);
}
.mp3Pic{
  display: inline-block;
  height: 42px;
  width: 42px;
  float: left;
  margin-left: 5px;
}
.mp3Pic img{
  height: 100%;
  width: 100%;
}
.mp3Textbox{
  margin-left: 5px;
  float:left;
  width: 40%;
  text-align: left;
}
.mp3Textbox p{
  margin: 4px 0;
}
.mp3Name{
  font-size: 14px;
  font-weight: 700;
}
.mp3Author{
  font-size: 12px;
}
.btn-group{
  margin-right: 5px;
  float: right;
  margin-top: 8px;
  width: 134px;
}
.btn-group i{
  margin: 0 10px;
  font-size: 22px;
}
.btn-group i.icon-caidan{
  color: #4FD6F5;
}
.btn-group i.icon-zanting1{
  color: #FF6868;
}
.btn-group i.icon-bofang{
  color: #09bb07;
}
.btn-group i.icon-xiayishou{
  color: #FFD400;
}
</style>