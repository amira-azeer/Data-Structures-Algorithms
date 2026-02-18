// Fibonacci Sequence 
function fibonacciIterative(number){
    let arr = [0,1]
    for(let i = 2; i <= number; i++){
        arr.push(arr[i-2] + arr[i-1])
    }
    return arr[number]
}

function fibonacciIterativeRecursive(number){
   if(number < 2){
       return number; 
   }
   return fibonacciIterativeRecursive(number-1) + fibonacciIterativeRecursive(number-2)
}

let result1 = fibonacciIterative(10)
console.log(result1)
let result2 = fibonacciIterativeRecursive(10)
console.log(result2)
