// pages/search/search.js
var getData = require("../../utils/ajax.js");

Page({
 data:{
  list:[],
  type: '',
  name: '',
  page: 1,
  count: 10,
  title: 'loading...',
  hasMore: true,
  loading: false,
  showTip: false,
  topTip: false,

  searchWord: ''
},
onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
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

  search:function(e){
    console.log(e);
    this.setData({topTip: true,showTip:true,loading: true, searchWord: e.detail.value})

    this.requestData({q:e.detail.value, page: this.data.page, count: this.data.count});

  },
  loadMore:function(){
    this.setData({showTip: true,loading: true,hasMore:true});
    this.data.page += 1;
    this.data.count =  this.data.page * 10;
    this.requestData({q: this.data.searchWord, page: this.data.page, count: this.data.count});

  },

  requestData:function(obj){
    var _this = this;
    getData.ajax(obj).then(function(res){
    console.log(res);
    if(res.data.subjects.length == 0){
      _this.setData({list: '',title: '没有该相关信息！！！',showTip: false,loading: false})
    }else if(res.data.subjects.length < _this.data.count){
      console.log(111);
      _this.setData({list: res.data.subjects, title: res.data.title, showTip: false, loading: false, hasMore: false});
    }else{
      _this.setData({list: res.data.subjects, title: res.data.title,showTip: false,loading: false});
    }
  });

 }

})