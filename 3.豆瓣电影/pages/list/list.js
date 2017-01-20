// pages/mine/mine.js
Page({
  data:{
    list:[],
    type: '',
    name: '',
    page: 1,
    count: 10,
    title: 'loading...',
    hasMore: true,
    loading: true,
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

    this.getData(this.data.type,this.data.page);
    this.setData({isFirst: true});

  },

  getData:function(type,page){
    const count = this.data.count * page;
    const a = 'http://api.douban.com/v2/movie/'+ type + '?count='+ count;
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
        if( !res.data.subjects ) {
          _this.setData({title: '没有加载到数据！！！'})
          return
        };
        if(res.data.subjects.length == count){
          _this.setData({list: res.data.subjects, title: res.data.title, loading: false});
        }else{
          _this.setData({hasMore: false});
        }
      },
      fail:function(err){
        console.log(err)
      }
    })
  },

  loadMore:function(){
    this.data.page += 1;
    this.getData(this.data.type,this.data.page);
    
  }

})