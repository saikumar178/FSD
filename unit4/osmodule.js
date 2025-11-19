const os = require('os');

console.log('Operating System Type: '+os.type());
console.log('platform: '+os.platform());
console.log('total memory: '+ os.totalmem());
console.log('free memory: '+ os.freemem());
let usedmem = os.totalmem() -os.freemem();
console.log('used memory: '+ usedmem);
console.log('operating system release:', os.release());
console.log('CPU information:', os.cpus());
console.log('home directory:', os.homedir());
console.log('system uptime in seconds:', os.uptime());