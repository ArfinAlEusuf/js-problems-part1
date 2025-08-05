const today = new Date();
const date = new Date('2026-10-19');
console.log(date.getMonth());
console.log(date.getDay());
const spacificDate = new Date(2091, 0, 26)
console.log(spacificDate)
spacificDate.setMonth(10);
console.log(spacificDate.toLocaleString('en-GB'));

// unix epoc