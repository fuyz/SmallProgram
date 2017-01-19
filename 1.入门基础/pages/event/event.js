// pages/event/event.js

//使用者要用 require()命令引用这个 JS 文件
var api = require("../../utils/api.js");
console.log(api);
console.log(api.str);
api.say(api.str);
api.say("哈哈哈");


Page({
  data:{
    list:[]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数

    this.getData();

    this.postData();

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
  },


  //  数据请求
  getData: function(){
    var _that = this;
    wx.request({
      url: 'http://www.phonegap100.com/appapi.php?a=getPortalCate',
      data: {
        name:'付颖志'
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        'content-type': 'application/json'
      }, // 设置请求的 header
      success: function(res){
        // success
        console.log(res);
        _that.setData({
          list: res.data.result
        });
         console.log(_that.data.list);
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },

  postData:function(){

    wx.request({
        url: 'http://www.57lehuo.com/upload.php',
        method:"POST",
        data: {
            username: '张三 1111' ,
            age: '222'
        },
        header: {
          'Content-Type': 'application/json'
        },
        success: function(res) {
          console.log(res)
        }
    })

  }


})