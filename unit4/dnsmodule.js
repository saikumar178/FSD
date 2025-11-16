const dns = require('dns');

dns.lookup('www.google.com', (err, address, family)=>{
    if (err) throw err;
    console.log('IP address: ',address);
    console.log('Address family: ',family);
});