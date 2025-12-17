// console.log('hi');
// const currentDate = new Date();
// console.log("Current Date",currentDate.toString());

//add.

// let a = parseInt(process.argv[2]);
// let b = parseInt(process.argv[3]);

// let sum = a+b;
// console.log("sum",sum);

//fs and readline.

const fs = require('fs');

const rl = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout,
});

function writeToFile(data){
    fs.writeFile('5B.txt',data,(err)=>{
        if(err) console.log(err);
        else console.log('Created file successfully');
    });
}

rl.question('Enter your name: ',name=>{
    rl.question('Enter the subject: ',subject=>{
        rl.question('Enter the marks: ',marks=>{
            const data = ` name : ${name},\n subject: ${subject},\n marks : ${marks}`;
            writeToFile(data);
            rl.close();
        });
    });
});