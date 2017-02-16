
var a = 'hello world';

var say = function(word){
    console.log(word);
}


//使用 exports 对象进行暴露。
module.exports = {
    str: a,
    say: say
}