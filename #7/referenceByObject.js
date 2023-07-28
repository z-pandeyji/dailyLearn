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
console.log('num', num);

function mutate(obj){
    obj.age++
}

mutate(myProfile);
console.log('Object Age', myProfile);


