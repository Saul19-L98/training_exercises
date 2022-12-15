//|==> Problem

// DESCRIPTION:
// Consider a "word" as any sequence of capital letters A-Z (not limited
// to just "dictionary words"). For any word with at least two different letters, 
// there are other words composed of the same letters but in a different order 
// (for instance, STATIONARILY/ANTIROYALIST, which happen to both be dictionary 
// ords; for our purposes "AAIILNORSTTY" is also a "word" composed of the same 
// letters as these two).

// We can then assign a number to every word, based on where it falls in an 
// alphabetically sorted list of all words made up of the same group of letters. 
// One way to do this would be to generate the entire list of words and find 
// the desired one, but this would be slow if the word is long.

// Given a word, return its number. Your function should be able to accept any 
// owrd 25 letters or less in length (possibly with some letters repeated), 
// and take no more than 500 milliseconds to run. To compare, when the solution 
// code runs the 27 test cases in JS, it takes 101ms.

// For very large words, you'll run into number precision issues in JS 
// (if the word's position is greater than 2^53). For the JS tests with large 
// positions, there's some leeway (.000000001%). If you feel like you're 
// getting it right for the smaller ranks, and only failing by rounding on 
// the larger, submit a couple more times and see if it takes.

// Python, Java and Haskell have arbitrary integer precision, so you must be 
// precise in those languages (unless someone corrects me).

// C# is using a long, which may not have the best precision, but 
// the tests are locked so we can't change it.

// Sample words, with their rank:
// ABAB = 2
// AAAB = 1
// BAAA = 4
// QUESTION = 24572
// BOOKKEEPER = 10743

console.log("19===============================================💣");

// factorial: Example 3! = 6
const fact = n => (n < 2) ? 1 : fact(n - 1) * n;

// permutations with repetition
const countCombinations = (seq) => {
    console.log(seq)
    const duplications = Object.values(
        seq.reduce((acc, e) => ({...acc, [e]: (acc[e] || 0) + 1}), {})
    ).reduce((acc, el) => acc * fact(el), 1);
    console.log(duplications)
    return fact(seq.length) / duplications;
};

// solution
function listPosition(s) {
    const arr = s.split('');
    let order = 1;
    for (let i = 0; i < arr.length; i++) {
        const set = new Set();
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i] && !set.has(arr[j])) {
                set.add(arr[j]);
                order += countCombinations([...arr.slice(i, j), ...arr.slice(j + 1)]);
            }
        }
    }

    return order
}
//console.time('a');
console.log(listPosition('BABA'))
// console.log(listPosition('BAAA')); //4
// console.log(listPosition('ABAB')); //2
// console.log(listPosition('ABCD')); //1
// console.log(listPosition('BCDA')); //10
// console.log(listPosition('BDAC')); //11
console.log(listPosition('BDCA')); //12
// console.log(listPosition('QUESTION')); //24572
// console.log(listPosition('BOOKKEEPER')); //10743
//console.timeEnd('a');


//This is what supposed to look the array with all different combinations using the same group of work.
const words = ['ABAB','AABB','BABA','BBAA','ABBA','BAAB'];
const sorted = words.sort();
console.log(sorted)









//NOTE: Example: Giving an array transform it into object
var votes =[
    "angular",
    "angular",
    "react",
    "react",
    "react",
    "angular",
    "ember",
    "react",
    "vanilla"
];
//1
const initialValue = {};

// const reducer=function(tally,vote){
//     if(!tally[vote]){
//         tally[vote] = 1;
//     }else{
//         tally[vote]++;
//     }
//     return tally;
// };

const reducer = (accumulator, value) => {
    return {...accumulator, [value] : (accumulator[value] || 0) + 1}
}

const result = votes.reduce(reducer,initialValue);
//console.log(result);