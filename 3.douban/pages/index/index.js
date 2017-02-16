// pages/list/list.js
Page({
  data:{
    imageUrls:[
      "https://img5.doubanio.com/view/movie_poster_cover/lpst/public/p2403049086.jpg",
      "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2408893200.jpg",
      "https://img5.doubanio.com/view/movie_poster_cover/lpst/public/p2410576676.jpg",
      "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2411622421.jpg",
      "https://img5.doubanio.com/view/movie_poster_cover/lpst/public/p2411608656.jpg"
    ],
    sortArr:[
      {type: 'in_theaters',name:'正在热映'},
      {type: 'coming_soon',name:'即将上映'},
      {type: 'top250',name:'top100'},
      {type: 'us_box', name:'北美票房榜'},
      {type: 'weekly', name:'口碑榜'},
      {type: 'new_movies', name:'新片榜'}
    ]
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
  }
})