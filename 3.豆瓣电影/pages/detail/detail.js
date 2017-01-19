// pages/detail/detail.js
var getData = require("../../utils/ajax.js");

Page({
  data:{
    detailData: {}
  },
  onLoad:function(options){
    
    // console.log(options);

    var _this = this;

    getData.ajax(options.id).then(function(res){
      console.info(res);
      _this.setData({detailData: res.data});
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