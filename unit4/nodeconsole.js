console.time('Execution Time');
console.log('log');
console.info('info');
console.warn('warning');

const name = "john";
console.error(`user ${name} is found`);

console.group('group Example');
console.log('Msg1 in group');
console.log('Msg2 in group');
console.groupEnd();

console.group('User Details:');
console.log('Name: Alice');
console.log('Age:20');
console.groupEnd();

let x=5;
console.assert(x>10,'x is less than 10');
console.assert(x<10,'x is greater than 10');

const users=[
    {name:'Rayan',age:20},
    {name:'Bob',age:30},
    {name:'sam',age:25},
    {name:'Alice',age:23}
];
console.table(users);
console.table(users,['name']);

const someDebugInfo = "Debig error";
console.debug('Debug details: ',someDebugInfo);

console.timeEnd('Execution Time');