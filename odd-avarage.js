
/**
 * function takes an array as parameter
 * give me the average of the odd numbers in the array 
 */

/**
 * 1. puts odd numbers in an array
 */

function oddAvarage(numbers){
    const odds = []
     for(const number of numbers){
        if(number % 2 ===1){
            // console.log(number)
            odds.push(number);
        }
     }
    // odds is the array that contains only the odd numbers
    //  console.log(odds)
    let sum = 0;
    for(const number of odds){
        sum = sum + number;
    }
    // console.log(sum);
    const count = odds.length;
    const avg = sum / count;
    return avg;
}

const numbers = [42, 13, 58, 65, 81, 7];
const avg = oddAvarage(numbers);
console.log('avarage of the odd number is: ' , avg);
