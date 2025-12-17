// eventDemo.js
const EventEmitter = require('events');

// Create an event emitter object
const emitter = new EventEmitter();

// Listener function
function greetListener(name) {
    console.log(`Hello, ${name}!`);
}

// Add the event listener
emitter.on('greet', greetListener);

console.log("Event listener added.");

// Emit the event
emitter.emit('greet', 'Heisenberg');

// Remove the event listener
emitter.removeListener('greet', greetListener);
// Alternative: emitter.off('greet', greetListener);

console.log("Event listener removed.");

// Try emitting again to show it no longer works
emitter.emit('greet', 'Saikumar');
