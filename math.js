/*const number = -5;
const absoluteNumber = Math.abs(number);
console.log(absoluteNumber);*/

const realNumber = 5.698;
const approxNumber = 3.125;
const approxNumber1 = 3.598;
const ceilNumber = Math.ceil(realNumber);// upper case number
console.log('The upper integer number is ', ceilNumber);
const floorNumber = Math.floor(realNumber);
console.log('The lower integer number is ', floorNumber);
const roundNumber = Math.round(approxNumber);
const roundNumber1 = Math.round(approxNumber1);
const randomNumber = Math.random(approxNumber) * 10;
const floorNumber1 = Math.floor(randomNumber)
console.log('The nearest rounded number is ', roundNumber);
console.log('The nearest rounded number is ', roundNumber1);
console.log('The random number is ', randomNumber);
console.log('The random number is ', floorNumber1);

for (i = 0; i < 10; i++) {
    const number = 5;
    const randomNum = Math.random(number)
    console.log(randomNum);
}