// pages/event/event.js

//使用者要用 require()命令引用这个 JS 文件
var api = require("../../utils/api.js");
console.log(api);
console.log(api.str);
api.say(api.str);
api.say("哈哈哈");


Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },

  touchstart:function(){
    console.log("touchstart")
  },
  touchend:function(){
    console.log("touchend")
  },
  touchmove:function(event){
    console.log("touchmove");
    console.log(event);
  },
  touchcancle:function(){
    console.log("touchcancle");
  },

  handleTap1:function(){
    console.log('handleTap1最外层')
  },
  handleTap2:function(){
    console.log('handleTap1中间层')
  },
  handleTap3:function(){
    console.log('handleTap1最内层')
  }


})