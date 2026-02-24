// Anatomy of recursion
let counter = 0;
function inception(){
    if(counter > 3){
        return 'Completed!'
    }
    counter++
    return inception()
}


// Factorial 
function findFactorialRecursive(number){
    if (number === 1) {
        return 1   // base case
    }
    return number * findFactorialRecursive(number - 1)
}

function findFactorialIterative(number){
    let answer = 1;
    for(let i = 1; i <= number; i++){
        answer = answer * i
    }
    return answer;
}
