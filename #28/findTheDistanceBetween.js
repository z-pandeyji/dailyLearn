const findTheDistanceValue = function (arr1, arr2, d) {
    let count = 0;
    for(let i=0; i<arr1.length; i++) {
        if(arr2.every(num => Math.abs(arr1[i] - num) > d)) {
            count++;
        }
    }
    return count;
}


console.log(findTheDistanceValue([4,5,8], [10,9,1,8], 2));