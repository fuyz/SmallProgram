Page({
    data:{
        array: ['美国', '中国', '巴西', '日本'],
        area: 0,
        score:0,
        is_dev:0
   },
   bindPickerChange: function(e){
     console.log('form发生了Picker事件，携带数据为：', e.detail.value)
     this.setData({ area: e.detail.value});
   },
   bindSliderChange: function(e){
     console.log('form发生了Slider事件，携带数据为：', e.detail.value)
     this.setData({ score: e.detail.value});
   },   
  formSubmit: function(e) {
    //console.log('form发生了submit事件，携带数据为：', e.detail.value)
    var formData = e.detail.value
    formData.area = this.data.area
    formData.score = this.data.score
    console.log('form发生了事件，携带数据为：', formData)

    var that = this

      wx.request({
          url: 'http://localhost/weicms/index.php?s=/addon/Feedback/Feedback/addFeedback',
          data: formData,
          header: {
              'Content-Type': 'application/json'
          },
          success: function(res) {
            console.log(res)
          },
          complete: function(){
       
          }
      })    
  }
})