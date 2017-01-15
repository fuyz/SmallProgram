// pages/info/info.js
Page({
  data:{
    arr1:["熟练html5+css3", "熟练面向对象js编程语法,符合W3C语法规范", "掌握前段主流框架，如JQuery、angular、ionic,了解react框架的编程思想", "熟练GitHub托管工具实现多人协助开发"]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
    console.log("个人页面渲染完成");
  },
  onShow:function(){
    // 页面显示
    console.log("个人页面显示");
  },
  onHide:function(){
    // 页面隐藏
    console.log("个人页面隐藏");
  },
  onUnload:function(){
    // 页面关闭
  }
})