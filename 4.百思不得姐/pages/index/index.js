//index.js
//获取应用实例
var app = getApp();

var ajax = require('../../utils/ajax.js');

var type = [
    {'index':1,loaded:false},
    {'index':41,loaded:false},
    {'index':10,loaded:false},
    {'index':29,loaded:false},
    {'index':31,loaded:false}
  ];

Page({
  data: {
    topTabItems:['推荐','视频','图片','段子','音乐','原创','网红'],
    comment_data:[],
    video_data:[],
    pic_data:[],
    dz_data:[],
    currentIndex: 0,
    loading: true
  },

  onLoad: function () {
    //首次进来加载数据
    var that = this;
    ajax.getData(type[0].index).then(function success(res){
      console.log(res);
      type[0].loaded = true;
      that.setData({comment_data: res.data.list,loading:false});
    },function fail(err){
      console.log(err);
    });

  },
  //设置当前导航栏高亮
  switchTo:function(e){
    this.setData({currentIndex: e.currentTarget.dataset.id});
  },

  bindchange:function(e){

    this.setData({currentIndex:e.detail.current});//设置当前swiper与导航栏保持一致

    var checkObj = this.checkData(e);
    if(!checkObj.isFirst){ //如果为第一次则请求数据，否则不加载
      this.setData({loading: true});
      //请求数据
      var that = this;
      ajax.getData(checkObj.dataType).then(function success(res){
        console.log(res)
        //设置对应数据
        switch (e.detail.current){
          case 1:
          that.setData({video_data: res.data.list,loading:false});
          break;
          case 2:
          that.setData({pic_data: res.data.list,loading:false});
          break;
          case 3:
          that.setData({dz_data: res.data.list,loading:false});
          break;
          default:
          console.log('没有正确请求数据');
          break;
        }

      },function fail(err){
        console.log(err);
      });
    }
  },
  //检查是否为第一次加载
  checkData:function(e){
    var dataType = '';
    var isFirst = type[e.detail.current].loaded ? true : false;
    switch (e.detail.current){
      case 0:
      dataType = type[0].index;
      type[0].loaded = true;
      break;
      case 1:
      dataType = type[1].index;
      type[1].loaded = true;
      break;
      case 2:
      dataType = type[2].index;
      type[2].loaded = true;
      break;
      case 3:
      dataType = type[3].index;
      type[3].loaded = true;
      break;
      default:
      console.log('未匹配到：'+e.detail.current);
      break;
    }
    return {dataType:dataType,isFirst:isFirst};
  }


})
