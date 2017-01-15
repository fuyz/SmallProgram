//index.js
//获取应用实例
var app = getApp();
console.info(app);

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    p:"我是通过js创建p标签"
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
        userInfo:userInfo
      })
    })
  }
})
