//|==> Exercise 1.
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
