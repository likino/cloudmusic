<template>
  <div class="cells">
    <div class="cell" v-for="(music, index) in musics" @click="playMp3" :data-index="index">
      <div class="cell-primary">
        <p>{{music.mp3Name}}</p>
        <span><a href="#">{{music.mp3Author}}</a> - {{music.mp3Album}}</span>
      </div>
      <div class="cell-btn"><i class="iconfont icon-bofang1"></i></div>
    </div>
  </div>
</template>

<script>
import bus from '../bus.js'

export default {
  name: 'searchlist',
  data () {
    return {
      musics: [
        {
          mp3Name: 'Apologize',
          mp3Author: 'OneRepublic',
          mp3Album: 'Dreaming Out Loud Tour Edition',
          mp3Url: 'http://m2.music.126.net/y5U0aj7E8ZKJAg_RtZoT6g==/2015404813715112.mp3',
          mp3Albumpic: 'http://p4.music.126.net/RnAXhfMkmqIvTw1kMd_dzQ==/1749322999805209.jpg'
        },
        {
          mp3Name: '给你们',
          mp3Author: '张宇',
          mp3Album: '雨一直下',
          mp3Url: 'http://m2.music.126.net/Eg1Z0CQyrj-vT7wPr5QvmA==/6656443394636285.mp3',
          mp3Albumpic: 'http://p3.music.126.net/otCQ-2wUgLaEN2_W8Nf_DA==/57174604656249.jpg'
        },
        {
          mp3Name: '用心良苦',
          mp3Author: '张宇',
          mp3Album: '用心良苦',
          mp3Url: 'http://m2.music.126.net/PxyeFQN1lS7ioyC_s85daQ==/3367804116051336.mp3',
          mp3Albumpic: 'http://p3.music.126.net/Ze_AwuqX8iH5iu0qleHFow==/794946906882377.jpg'
        }
      ]
    }
  },
  methods: {
    playMp3 (e) {
      var index = e.currentTarget.getAttribute('data-index')
      return this.musics[index]
    }
  }
}

console.log(bus)
</script>

<style>
.cells {
  margin-top: 1.17647059em;
  background-color: #fff;
  line-height: 1.41176471;
  font-size: 14px;
  overflow: hidden;
  position: relative;
}
.cell {
    padding: 10px 15px;
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-align: left;
}
.cells:after, .cells:before {
    content: " ";
    position: absolute;
    left: 0;
    width: 100%;
    height: 1px;
    color: #d9d9d9;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
}
.cell:before {
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 1px;
    border-top: 1px solid #d9d9d9;
    color: #d9d9d9;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    left: 15px;
}
.cell:active{
  background-color: #ececec;
}
.cells:before {
    top: 0;
    border-top: 1px solid #d9d9d9;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
}
.cells:after {
    bottom: 0;
    border-bottom: 1px solid #d9d9d9;
    -webkit-transform-origin: 0 100%;
    transform-origin: 0 100%;
}
.cell-primary {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
}
.cell-primary p {
    text-align: left;
}
.cell-primary span {
    font-size: 12px;
    color: #666;
}
.cell-btn i{
  font-size: 26px;
  color: #09bb07;
}
</style>