function sumAll(...numbers){
    let sum = numbers.reduce((total,num) => total + num);
    console.log('rest', sum);
    return sum;
}

sumAll(13,1,12);