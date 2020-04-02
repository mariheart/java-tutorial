
let firstWord = ["the past", "the present", "the future", "FEAR"];
let secondWord = ["bright", "great", "wrong", "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"];

let firstRandIndex = Math.floor (Math.random() * firstWord.length);
let secondRandIndex = Math.floor (Math.random() * firstWord.length);

console.log("Here we are in " + firstWord[firstRandIndex] + " and it's " + secondWord[secondRandIndex]);