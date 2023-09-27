// Write the code, one line for each action:

// 1- Create an empty object user.
// 2- Add the property name with the value Pandey.
// 3- Add the property surname with the value Ji.
// 4- Change the value of the name to Shivanshu .
// 5- Remove the property name from the object.

let user = {};

user.name = 'Pandey';
user.surname = 'Ji';
user.name = 'Shivanshu';
delete user.name;

console.log(user);