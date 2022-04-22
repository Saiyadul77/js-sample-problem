function smallestElement(number) {
    let smallest = number[0];
    for (let i = 0; i < number.length; i++) {
        const small = number[i];
        if (small < smallest) {
            smallest = small;
        }
    }
    return smallest;
}
let smallNumber = [50, 30, 60, 20, 10];
let smallNumberStatus = smallestElement(smallNumber);
console.log('The smallest number is ', smallNumberStatus);