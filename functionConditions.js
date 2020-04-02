
let toTest = Math.floor(Math.random(0, 10));
let odd = [1, 3, 5, 7 ,9];
let even = [0, 2, 4, 6 ,8, 10];

function numTest (num, odd, even) {
    if (odd.includes(num)) {
        console.log ("Odd");
    } else if (even.includes(num)) {
        console.log("Even");
    }
}

numTest(toTest, odd, even);