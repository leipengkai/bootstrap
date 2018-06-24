var fs = require('fs')
// 异步
fs.readFile('read','utf-8',function (err,data) {
    if(err){
        console.error(err);
    }else{
        console.log(data)
    }

})

// 同步
// var data = fs.readFileSync('read','utf-8')
// console.log(data)

// console.log('hello Node.js')
// alert('hello Node.js')