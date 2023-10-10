//1- this one is showing the variable declaration is globally 
// let hello = 'world';

// function x() {
//     console.log(hello);
// }
// x()
// console.log(hello);


//2- this one is showing the variable is declare in the function

// function x() {
//     let hello = 'world';
//     console.log(hello);
// }
// x()
// console.log(hello); //<- this console shows error


//3- this is the same example for scoping in the loops, now in this example it increate the value of i
// in both of the console.log;

// function x() {
//     let i = 0;
//     for(;i<10;i++){
//         console.log(i)
//     }
//     console.log(i);
// }
// x();

//0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10 <- last console.log it show over the itteration then it goes to next console.log and then it
// shows 10 in the console.log()


//4- again the example for the loop to showing the variable scope

function x() {
    for(let i = 0; i < 10; i++) {
        console.log(i)
    }

    console.log(i)
}

x();

// in this case the last console.log() showing error in the console panel because it doesn't 
// shows the scope of the i variable.