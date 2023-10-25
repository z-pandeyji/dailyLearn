// Javascript compare value in 2 Ways 
// 1 - By Value 
// 2 - Where is the value or we can say Reference

let x = '123';
let y = '123';

let value = x === y;
console.log(value); // true

let xObject = {prop:1};
let yObject = {prop:2};

let valueObject = xObject === yObject;

console.log(valueObject); // false 

// Why false?  Because they are different objects stored in different parts of memory. Hence, xObject === yObject returns false.

// Question: How to compare 2 objects in javascript ?
Answer: 
// In JavaScript, comparing two objects can be quite tricky because when you compare two objects, 
// they are compared by their reference, not their content. 
// This means that even if two objects have the exact same properties and values, 
// they will still be considered unequal because they reference different places in memory.

// Here's an example:

let obj11 = { name: 'Shivanshu', age: 25 };
let obj22 = { name: 'Shivanshu', age: 25 };

console.log(obj1 == obj2); // false
console.log(obj1 === obj2); // false

// The == and === comparison will return false because the two objects are not the same instance.

// To compare the content of the two objects, you would need to manually check each property:

function compareObjects(obj1, obj2) {
    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    for (let key in obj2) {
        if (obj2[key] !== obj1[key]) {
            return false;
        }
    }
    return true;
}

let obj1 = { name: 'Shivanshu', age: 25 };
let obj2 = { name: 'Shivanshu', age: 25 };

console.log(compareObjects(obj1, obj2)); // true

// This function will return true if all properties and values are equal in both objects.