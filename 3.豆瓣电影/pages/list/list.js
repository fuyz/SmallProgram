// pages/mine/mine.js
Page({
  data:{
    list:[],
    name: '',
    title: 'loading...'
  },
  onLoad:function(params){
    // 页面初始化 params为页面跳转所带来的参数
    console.log(params);

    wx.showNavigationBarLoading();/*显示导航条加载动画。*/
    wx.setNavigationBarTitle({
      title: params.name+ " << 电影 << 豆瓣",
      success:function(){
        wx.hideNavigationBarLoading();/*隐藏导航条加载动画。*/
      }
    });

    this.getData(params);

  },

  getData:function(params){

    const a = 'http://api.douban.com/v2/movie/'+ params.type ;
    console.info(a)
    const _this = this;

    wx.request({
      url: a,
      method: 'GET',
      data: {},
      header: {
        'content-type': 'application/x-www-form-urlencoded'/* 注意这个地方不是'application/json'  */
      },
      success: function(res) {
        console.log(res);
        _this.setData({list: res.data.subjects,title: res.data.title});

      },
      fail:function(err){
        console.log(err)
      }
  })

 }

})