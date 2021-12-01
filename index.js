const fs = require('fs');

const depths = fs.readFileSync("./input.txt").toString().split("\n");

const convertToIncreasedArray = (arr) => {
    return arr.filter((element, index, array) => {
        return element > array[index - 1] && index !== 0;
    })
}

const convertToArrayofIntegers = (arr) => {
    return arr.map(element => parseInt(element));
}

const convertToFloatingSumsArray = (arr) => {
    return arr.map((element, index, array) => {
        if (index < array.length - 2) {
            return element + array[index + 1] + array[index + 2]
        } else {
            return 0;
        }
    })
}

// Day 1 - Part 1
const increasedArray = convertToIncreasedArray(convertToArrayofIntegers(depths));

console.log(increasedArray.length);

// Day 1 - Part 2
const increasedSumArray = convertToIncreasedArray(convertToFloatingSumsArray(convertToArrayofIntegers(depths)));

console.log(increasedSumArray.length);