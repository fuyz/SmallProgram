
var ajax = function(url){

	var promise = new Promise(function(resolve,reject){
		wx.request({
			url: 'http://api.douban.com/v2/movie/'+ url,
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