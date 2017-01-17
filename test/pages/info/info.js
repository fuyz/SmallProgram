// pages/info/info.js

var app = getApp();//实例化app.js，从而可以调用其中的方法。。。

Page({
  data:{
    name: "付颖志",
    sex: "男",
    job: "web前端工程师",
    arr1:["熟练html5+css3", "熟练面向对象js编程语法,符合W3C语法规范", "掌握前段主流框架，如JQuery、angular、ionic,了解react框架的编程思想", "熟练GitHub托管工具实现多人协助开发"]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log("info onload");
  },
  onReady:function(){
    // 页面渲染完成
    console.log("info onReady");
  },
  onShow:function(){
    // 页面显示
    console.log("info onShow");
  },
  onHide:function(){
    // 页面隐藏
    console.log("info onHide");
  },
  onUnload:function(){
    // 页面关闭
    console.log("info onUnload");
  },

  say: function(){
    console.log('hello ,我将调用app.js里面的方法---》')
    app.fn();
  },
  addSkill: function(event){

    console.log(event)

    //通过setData来变data对象信息，并从新渲染页面
    this.setData({
      name: "Lucifer",
      sex: "女",
      job: "web前端工程师",
      arr1:["熟练html5+css3", "熟练js语法,符合W3C语法规范", "掌握JQuery、angular、ionic,了解react框架的编程思想", "熟练GitHub托管工具"]
    })
  }
})