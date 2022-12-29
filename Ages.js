let ages = [ 3, 9, 23, 64, 2, 20, 8, 28, 93 ]
let firstElement = ages[0]
let lastElement = ages[ages.length-1];
console.log(lastElement - firstElement)

let array = [ 3, 9, 23, 64, 2, 20, 8, 28, 93 ]
console.log(array)

let SumofArray=0
console.log(SumofArray)


function returnsAverage (array) {
    for( var i = 0; i < array.length; i++) {
        SumofArray += array[i]
    }
         return(SumofArray / array.length) 
}

console.log(returnsAverage(ages));