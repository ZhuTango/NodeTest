var name;

//设置其名字
exports.setName = function(thyName){
    name = thyName;
}

exports.sayHello = function(){
    console.log('Hello ' + name);
}