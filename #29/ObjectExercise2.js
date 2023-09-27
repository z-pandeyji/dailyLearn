// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise

function isEmpty(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key,obj[key]);
            return false; 
        }
    }
    console.log('Nothing in the object');
    return true; 
}

let nouser = {};

isEmpty(nouser);

let user = {
    name:'Shivanshu'
};

isEmpty(user);