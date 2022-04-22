/*const fibo = [0, 1];
for (let i = 2; i <= 10; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);
*/

function fibonacciElement(numbers) {
    if (typeof numbers != 'number') {
        return 'Please Given Number';
    }
    if (typeof numbers < 1) {
        return 'Please Positive Number';
    }
    const fibo = [0, 1];
    for (let i = 2; i < numbers; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
let fibonacciStatus = fibonacciElement(-5);
console.log(fibonacciStatus);