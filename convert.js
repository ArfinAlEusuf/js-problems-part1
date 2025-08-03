//  12 inch 1 feet

function inchToFeet(inch){
    const feet = inch/12;
    return feet;
}

// 75
function inchToFeet2(inch){
    const feetFraction = inch/12;
    const feetNumber = parseInt(feetFraction);
    const num = feetNumber * 12
    const inchNumber = inch - num;
    console.log(feetNumber, inchNumber)
}

const shovoHeight = inchToFeet(75);
// console.log(shovoHeight);
const shovoHeight2 = inchToFeet2(75);