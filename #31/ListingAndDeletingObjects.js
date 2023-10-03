function modifyObject(obj, propertyName) {
  if (obj.hasOwnProperty(propertyName)) {
    delete obj[propertyName];
  } else {
    obj[propertyName] = "objects are cool";
  }
  return obj;
}



let myObj = { name: "shivanshu", age: 22 };
myObj = modifyObject(myObj, 'age');
console.log(myObj); // Outputs: { name: 'shivanshu' }
