let a = [3, 4, 1, 5, 7, 2]

function reverse(arr) {
    let result = []
    for (let i = arr.length - 1; i >= 0;  i--){
        result.push(arr[i])
    }
    return result
} 
console.log(reverse(a))