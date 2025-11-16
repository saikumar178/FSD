const cal = require('./cal');

let x=50,y=10;

console.log(`add ${x} and ${y} = ${cal.add(x,y)}`);
console.log(`sub ${x} and ${y} = ${cal.sub(x,y)}`);
console.log(`mul ${x} and ${y} = ${cal.mul(x,y)}`);
console.log(`div ${x} and ${y} = ${cal.div(x,y)}`);
console.log(`rem ${x} and ${y} = ${cal.rem(x,y)}`);