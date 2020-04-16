function getMin(arr) {
    let min = arr[0];
    for (const value of arr){
        if (value < min) {
            min = value;
        }
        
    }
    return min
}
console.log(getMin([2,4,5,7,9,4,1,16]))


let arr = [2,4,5,7,9,4,1,16];
Math.min(...arr);
console.log(Math.min(...arr)) 