/*const number = [10, 20, 30, 40, 25, 35, 41];
let sum = 0;
for (let i = 0; i < number.length; i++) {
    let element = number[i]
    sum = sum + element;
}
console.log(sum);
*/

function arraySum(numbers) {
    let sum = 0;
    for (i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
const numberElement = arraySum([35, 63, 12, 10]);
console.log('The array sum is ', numberElement)