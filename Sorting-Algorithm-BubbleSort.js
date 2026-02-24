const numbers = [99, 12, 14, 11, 10, 9, 1]

function bubbleSort(arr){
    const length = arr.length;
    for(let i=0; i<length - 1; i++){
        for(let j=0; j<length - i - 1; j++){
            if(arr[j] > arr[j+1]){
                // swap numbers
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}

const results = bubbleSort(numbers)
console.log(results)
