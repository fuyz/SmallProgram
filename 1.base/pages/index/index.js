//index.js
//获取应用实例
var app = getApp();
console.info(app);

var T = new Date();
T = T.toLocaleTimeString();
console.log(T)
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    name: "付颖志",
    time: 00
  },
  //事件处理函数
  bindViewTap: function() {
    console.log('登陆成功！！！');
    wx.navigateTo({
      url: '../info/info'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo,
        time: T
      })
    })
  }
})
