// arrays

let myFriends = ['me'];

function addMyFriends(friends) {
//   myFriends.push(friends);
//   console.log(myFriends);
myFriends.unshift(friends);
console.log(myFriends);

}


addMyFriends('prakash');
addMyFriends('aman');

// myFriends.pop()

// pop function always returns the last value

const lifeLongFriend = myFriends.pop()

console.log('Best friends', lifeLongFriend);