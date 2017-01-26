
var getData = function(type){
	var url = '';
	if(type.type == 'detail'){
		url = 'http://c.api.budejie.com/topic/comment_list/'+type.id+'/0/budejie-android-6.6.4/0-20.json';
	}else if(type < 100){
		url = 'http://s.budejie.com/topic/list/jingxuan/'+type+'/budejie-android-6.6.4/0-20.json';
	}else{
		url = 'http://s.budejie.com/topic/tag-topic/'+type+'/hot/budejie-android-6.6.4/0-20.json'
	}
	console.log(url)

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