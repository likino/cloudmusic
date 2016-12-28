<template>
  <div>
    <div class="search-box">
      <div class="search-bar">
        <div class="search-outer">
          <div class="search-inner">
            <i class="iconfont icon-sousuo_sousuo"></i>
            <input v-model.trim="msg" type="search" class="search-input" autocomplete="off" required :placeholder="placeholder" @keyup.enter="search">
          </div>
        </div>
        <a href="javascript:;" class="search-cancel" @click="search">搜索</a>
      </div>
    </div>
    <div class="cells">
      <div class="cell" v-for="(music, index) in musics" @click="playMp3" :data-index="index" :data-id="music.id">
        <div class="cell-primary">
          <p>{{music.name}}</p>
          <span><a href="#">{{music.artists[0].name}}</a> - {{music.album.name}}</span>
        </div>
        <div class="cell-btn"><i class="iconfont icon-bofang1"></i></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import bus from '../bus.js'

export default {
  name: 'search',
  data () {
    return {
      placeholder: '搜索音乐、歌手',
      msg: '',
      musics: ''
    }
  },
  methods: {
    search () {
      if (!this.msg) {
        console.log('请输入搜索内容')
        return
      }
      axios({
        method: 'get',
        url: '/search/' + this.msg
      }).then((response) => {
        this.musics = response.data
      }).catch((error) => {
        console.log(error)
      })
    },
    playMp3 (e) {
      var id = e.currentTarget.getAttribute('data-id')
      axios({
        method: 'get',
        url: '/song/' + id
      }).then((response) => {
        console.log(response.data.songs[0])
        bus.currentData = response.data.songs[0]
        bus.$emit('playMp3')
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>

<style>
.search-box{
  width:100%;
  position: fixed;
  top:0;
  z-index: 999;
}
.search-bar{
  position: relative;
  padding: 8px 10px;
  display: flex;
  box-sizing: border-box;
  background: #efeff4;
}
.search-outer{
  position: relative;
  -webkit-box-flex: 1;
  -ms-flex: auto;
  flex: auto;
  background-color: #efeff4;
}
.search-outer:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 200%;
    height: 200%;
    -webkit-transform: scale(.5);
    transform: scale(.5);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    border-radius: 10px;
    border: 1px solid #e6e6ea;
    box-sizing: border-box;
    background: #fff;
}
.search-cancel{
  display: block;
  margin-left: 10px;
  line-height: 28px;
  white-space: nowrap;
  color: #09bb07;
}
.search-inner {
    position: relative;
    padding-left: 30px;
    padding-right: 30px;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    z-index: 1;
}
.search-inner .icon-sousuo_sousuo {
    position: absolute;
    left: 10px;
    top: 2px;
    line-height: 28px;
}
.icon-sousuo_sousuo {
    color: #b2b2b2;
    font-size: 14px;
}
.search-inner .search-input {
    padding: 4px 0;
    width: 100%;
    height: 1.42857143em;
    border: 0;
    font-size: 14px;
    line-height: 1.42857143em;
    box-sizing: content-box;
    background: transparent;
}
.cells {
  margin-top: 44px;
  margin-bottom: 51px;
  background-color: #fff;
  line-height: 1.41176471;
  font-size: 14px;
  overflow: hidden;
  position: relative;
  z-index: 998;
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