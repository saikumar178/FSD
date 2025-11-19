const EventEmitter = require('events');

const eventemitter= new EventEmitter ();

eventemitter.on('greet',(name,age)=>{
    console.log(`Hello ${name}, you are ${age} years old.`);
});

eventemitter.emit('greet','Alice',30);
eventemitter.emit('greet','Bob',25);



eventemitter.on('welcome',()=> console.log('listener 1 triggered'));
eventemitter.on('welcome',()=> console.log('listener 2 triggered'));
eventemitter.on('welcome',()=> console.log('listener 3 triggered'));
eventemitter.on('welcome',()=> console.log('listener 4 triggered'));

eventemitter.emit('welcome');

//both events will trigger when there is multiple listeners for same event



eventemitter.once('start',()=> console.log('This will only run once'));


eventemitter.emit('start');
eventemitter.emit('start');
eventemitter.emit('start');


function sayBye(){
    console.log("goodbye event triggred");

}

eventemitter.on('bye',sayBye);

eventemitter.emit('bye');

eventemitter.off('bye',sayBye);

eventemitter.emit('bye');


eventemitter.on('error',(err)=>{
    console.log('An error occurred:', err.message);
});

eventemitter.emit('error', new Error('Something went wrong'));
