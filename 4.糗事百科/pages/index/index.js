//index.js
//获取应用实例
var app = getApp();

var ajax = require('../../utils/ajax.js');

Page({
  data: {
    topTabItems:['专享','视频','純文','纯图','糗闻','其他'],
    urlArr:['http://news.qiushibaike.com/article/list?page=1&count=30&rqcnt=19&r=7d9b4d661485258816830']
  },

  onLoad: function () {
    
    ajax.getData(this.data.urlArr[0]).then(function success(res){
      console.log(res);
    },function fail(err){
      console.log(err);
    });

  }
})
