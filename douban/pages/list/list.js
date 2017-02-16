// pages/mine/mine.js

var getData = require('../../utils/ajax.js');

Page({
  data:{
    list:[],
    title: 'loading...',
    hasMore: true,
    loading: true,
    showTip: true,

    type: '',
    name: '',
    page: 1,
    count: 10,

  },
  onLoad:function(params){
    // 页面初始化 params为页面跳转所带来的参数
    console.log(params);
    this.setData({type: params.type});

    wx.showNavigationBarLoading();/*显示导航条加载动画。*/
    wx.setNavigationBarTitle({
      title: params.name+ " << 电影 << 豆瓣",
      success:function(){
        wx.hideNavigationBarLoading();/*隐藏导航条加载动画。*/
      }
    });

    this.requestData({type: this.data.type, page: this.data.page, count: this.data.count});

  },

  loadMore:function(){
    this.setData({loading: true});
    this.data.page += 1;
    this.data.count =  this.data.page * 10;
    this.requestData({type: this.data.type, page: this.data.page, count: this.data.count});

  },

  requestData:function(obj){
    var _this = this;

    getData.ajax(obj).then(
      function(res){
        console.log(res);
        if( !res.data.subjects ) {
          _this.setData({title: '没有加载到数据！！！',hasMore: false, loading: false});
          return
        };
        if(res.data.subjects.length == _this.data.count){
          _this.setData({list: res.data.subjects, title: res.data.title, loading: false});
        }else{
          _this.setData({hasMore: false, loading: false});
        }
      }
      );

  }

})