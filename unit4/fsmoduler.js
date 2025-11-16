var fs = require('fs');

//      read 

// fs.readFile("5B.txt",'utf8',function(err,data){
//  if(err) console.log(err);
//  else console.log(data);
// })

//      write

// fs.writeFile("context.txt",'hello world',function(err){
//     if(err) console.log(err);
//     else console.log('File created!!');
// })

//      append

// fs.appendFile("context.txt",', js',function(err){
//     if(err) console.log(err);
//     else console.log('File created!!');
// })

//      delete

fs.unlink('context.txt',function(err){
    console.log('Deleted');
})