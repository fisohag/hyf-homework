const housePrices = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000];

//Average Calculation
let sum = housePrices.reduce((previous, current) => current += previous);
let avg = sum / housePrices.length;
console.log(avg);


//Median Calculation
housePrices.sort((a, b) => a - b);
let lowMiddle = Math.floor((housePrices.length - 1) / 2);
let highMiddle = Math.ceil((housePrices.length - 1) / 2);
let median = (housePrices[lowMiddle] + housePrices[highMiddle]) / 2;
console.log(median);