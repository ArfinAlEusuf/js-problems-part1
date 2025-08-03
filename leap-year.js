/**
 * year will be a leap year if the year is divisible by 4
 * 
 * 1. 
 */

function isleapYear(year){
    if( year % 400 === 0){
        return true;
    }
    else if( year % 4 ===0 && year % 100 !== 0){
        return true;
    }
    else{
        return false;
    }
}

const isLeap = isleapYear(2000);
console.log(isLeap);
