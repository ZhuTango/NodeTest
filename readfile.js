var fs = require('fs');
fs.readFile('file.txt', 'utf-8', function(err, data){
    if(err){
        console.error(err);        
    }else {
        console.log(data);
    }
});
console.log('end.');


//sync part;
var data = fs.readFileSync('file.txt','utf-8');
console.log(data);
console.log('endSync.');