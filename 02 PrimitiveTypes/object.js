"use strict";
const person1 = { name: 'Mark', age: 39 };
console.log(typeof person1);
const person2 = Object.create({ name: 'Mark', age: 39 });
console.log(typeof person2);