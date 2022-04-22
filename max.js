/*const businessPerson = 4500;
const ministerPerson = 500;
if (businessPerson > ministerPerson) {
    console.log('Business person is bigger');
}
else {
    console.log('Minister person is bigger');
}
*/

/*const ruhulAmin = 100000000;
const khairulAmin = 1000000;
const nurulAmin = 5000000;
if (ruhulAmin > khairulAmin && ruhulAmin > nurulAmin) {
    console.log('Ruhul Amin is biggest');
}
else if (khairulAmin > ruhulAmin && khairulAmin > nurulAmin) {
    console.log('Khairul Amin is biggest');
}
else {
    console.log('Nurul Amin is biggest');
}
*/

/*function maxNumber(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    else {
        return num2;
    }
}
const twoNumber = maxNumber(50, 60);
console.log('Largest number is ', twoNumber);
*/
/*
function threeNumber(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    }
    else if (num2 > num1 && num2 > num3) {
        return num2;
    }
    else {
        return num3;
    }
}
const maxThreeNumber = threeNumber(50, 80, 90);
console.log('The largest number is ', maxThreeNumber);
*/

function smallestNumber(first, second, third) {
    if (first < second && first < third) {
        return first;
    }
    else if (second < first && second < third) {
        return second;
    }
    else {
        return third;
    }
}
const theThreeNumber = smallestNumber(150, 620, 30);
console.log('The smallest Number is ', theThreeNumber);