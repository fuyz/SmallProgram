// pages/detail/detail.js
var ajax = require('../../utils/ajax.js');

Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.info(options);
    ajax.getData({id:options.id,type:'detail'}).then(function(res){
      console.log(res)
    });


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
  }
})