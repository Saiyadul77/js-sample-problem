/*function largestElement(numbers) {
    let largest = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;

}

const ages = [20, 30, 4, 52, 30, 62];
const agesElement = largestElement(ages);
console.log(agesElement);
*/

function biggestChallenge(nums) {
    let biggest = nums[0];
    for (let i = 0; i < nums.length; i++) {
        const status = nums[i];
        if (status > biggest) {
            biggest = status;
        }
    }
    return biggest;
}
let temparatureStatus = [29, 30, 35, 15, 40, 57, 95, 3, 10, 100, 55, 79];
let temparature = biggestChallenge(temparatureStatus);
let temparature1 = biggestChallenge([-2, -8, -18, -1]);
console.log(temparature);
console.log(temparature1);
