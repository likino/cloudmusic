<template>
  <div class="search-box">
    <div class="search-bar">
      <div class="search-outer">
        <div class="search-inner">
          <i class="iconfont icon-sousuo_sousuo"></i>
          <input v-model="msg" type="search" class="search-input" autocomplete="off" required :placeholder="placeholder">
        </div>
      </div>
      <a href="javascript:;" class="search-cancel" @click="search">搜索</a>
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
      placeholder: '搜索音乐ID',
      msg: '',
      searchResult: ''
    }
  },
  methods: {
    search () {
      axios.get('https://bird.ioliu.cn/netease', {
        params: {
          id: this.msg
        }
      }).then(function (response) {
        bus.data = response.data.data.songs[0].name
        console.log(bus)
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>

<style>
.search-box{
  width:100%;
  positon: fixed;
  top:0;
}
.search-bar{
  postion: relative;
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
</style>