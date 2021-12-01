const fs = require('fs');

const depths = fs.readFileSync("./input.txt").toString().split("\n");

const increasedArray = depths.filter((element, index, array)=>{
    return parseInt(element) > parseInt(array[index-1]) && index!==0;
})

console.log(increasedArray.length);