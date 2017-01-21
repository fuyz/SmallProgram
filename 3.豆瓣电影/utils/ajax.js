
var ajax = function(obj){
	console.warn(obj);
	var requestUrl = '';
	if(obj.q){   
		//电影搜索页
		requestUrl = 'http://api.douban.com/v2/movie/search?q='+ obj.q;
	}else if(obj.count){  
		//电影列表页
		requestUrl = 'http://api.douban.com/v2/movie/'+ obj.type + '?count='+ obj.count;

	}else{    
		//电影详情页
		requestUrl = 'http://api.douban.com/v2/movie/'+ obj.id;
	}
	console.log(requestUrl);

	var promise = new Promise(function(resolve,reject){
		wx.request({
			url: requestUrl,
			data:{},
			header: {
				'content-type': 'application/x-www-form-urlencoded'/* 注意这个地方不是'application/json'  */
			},
			success: resolve,
			fail: reject
		})
	});
	
	return promise;
}

module.exports = {
	ajax: ajax
}