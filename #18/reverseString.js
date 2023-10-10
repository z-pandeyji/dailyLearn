const str = "JavaScript is awesome";

function reverseAString(str) {
  var newString = "";
  // write your solution here
    for(var i = str.length - 1; i >= 0; i--){
      newString += str[i]
    }
    return newString;
}

console.log(`Reversed string is: ${reverseAString(str)}`);