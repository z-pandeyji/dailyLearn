const myProfile = {
    "name": "Shivanshu Pandey",
    "age": 23
}

function primitiveMutate(primitive) {
    primitive++;
    console.log(primitive);
}

let num = 100;
primitiveMutate(num);
// Using primitiveMutate the increament in num only create a reference not in the memory.
console.log('num', num);

function mutate(obj){
    obj.age++
}

mutate(myProfile);
// Using Mutate The change in obj memory changes and shows the age increament in the memory.
console.log('Object Age', myProfile);


