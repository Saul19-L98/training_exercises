//|==> Exercise 1.
// Bracket Combinations
// Have the function BracketCombinations(num) read num which will be an integer greater than or equal to zero, and return the number of valid combinations that can be formed with num pairs of parentheses. For example, if the input is 3, then the possible combinations of 3 pairs of parenthesis, namely: ()()(), are ()()(), ()(()), (())(), ((())), and (()()). There are 5 total combinations when the input is 3, so your program should return 5.
// Examples
// Input: 3
// Output: 5
// Input: 2
// Output: 2
// Tags
// combinatoricsGooglefree
const permutaionArray = (arrayLenght) => {
  let permutationNum = [];
  for (let i = arrayLenght; i > 0; i--) {
    permutationNum[arrayLenght - i] = i;
  }
  return permutationNum;
};
const permutation = (arrPermutated) => {
  const value = arrPermutated.reduce((current, accumulator) => {
    return (accumulator = current * accumulator);
  }, 1);
  return value;
};
function BracketCombinations(num) {
  if (num == null || num == "") return "Error, this is not a number";
  //Catalan Number
  const n = num;
  const twoN = 2 * n;
  const nPlusOne = 1 + n;
  const nPermutated = permutation(permutaionArray(n));
  const twoNPermutated = permutation(permutaionArray(twoN));
  const nPlusOnePermutated = permutation(permutaionArray(nPlusOne));
  // code goes here
  return twoNPermutated / (nPlusOnePermutated * nPermutated);
}

// keep this function call here
console.log(BracketCombinations(readline()));
