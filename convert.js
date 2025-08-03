//  12 inch 1 feet

function inchToFeet(inch){
    const feet = inch/12;
    return feet;
}

// 75
function inchToFeet2(inch){
    const feetFraction = inch/12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining  = inch % 12;
    const result = feetNumber+ ' ft '+ inchRemaining + ' inch ';
    return result;
}

const shovoHeight = inchToFeet(75);
// console.log(shovoHeight);
const shovoHeight2 = inchToFeet2(75);
// console.log(shovoHeight2);

// miles to kilometer
function mileToKillometer (mile){
    const kilo= mile* 1.60934;
    return kilo;
}
const killo= mileToKillometer(5);
// console.log(killo);

// kilomerer

function kiloMeterToMiles(kilo){
    const mile = kilo* 0.621371;
    return(mile);
}

const mile = kiloMeterToMiles(24);
console.log(mile);