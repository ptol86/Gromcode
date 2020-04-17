function checkEven(number){
    return number % 2 === 0
}
function getEven(arr){

        const evenArr = arr.filter(checkEven)
    return evenArr
}

console.log(getEven([2,4,5,7,9,4,1,16]))
