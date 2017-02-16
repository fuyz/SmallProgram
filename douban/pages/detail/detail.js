// pages/detail/detail.js
var getData = require("../../utils/ajax.js");

Page({
  data:{
    detailData: {},
    castNameArr: []
  },
  onLoad:function(options){
    
    // console.log(options);

    var _this = this;

    wx.showNavigationBarLoading();/*显示导航条加载动画。*/
    wx.setNavigationBarTitle({
      title: "详情 << 电影 << 豆瓣",
      success:function(){
        wx.hideNavigationBarLoading();/*隐藏导航条加载动画。*/
      }
    });

    getData.ajax({id:options.id,q:''}).then(function(res){
      console.info(res);
      _this.setData({detailData: res.data});

      //处理数据：
      function getChineseName(arr){
        var newArr = [];
        arr.forEach(function(ele,i){
          newArr.push(ele.split(' ')[0]);
          _this.setData({castNameArr: newArr})
        })
      }

      getChineseName(_this.data.detailData.attrs.cast);
      

    })


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