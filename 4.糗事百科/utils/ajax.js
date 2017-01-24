
var getData = function(url){

	var promise = new Promise(function(resolve,reject){

		wx.request({
			url: url,
			data:{},
			success: resolve,
			fail: reject
		})

	});

	return promise;

}

module.exports = {
	getData: getData
}