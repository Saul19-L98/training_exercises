"use strict";

const stringCount = (string) => {
  let count = 0;
  const newString = string.split("");
  for (let index = 0; index < newString.length; index++) {
    console.log(`${newString[index]}:${index + 1}`);
    count++;
  }
  console.log(`Total letters: ${count}`);
};

stringCount("saul");

const countChar = (str) => {
  const result = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (result[char] > 0) {
      result[char]++;
    } else {
      result[char] = 1;
    }
    //console.log(Object.keys(result).find( key => result[key] == result[char]),result[char]);
  }
  return result;
};

// countChar('hello');

function isAlphNumeric(char) {
  let code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && //numeric (0-9)
    !(code > 64 && code < 91) && //upper alpha(A-Z)
    !(code > 96 && code < 123)
  ) {
    //lower alpha(a-z)
    return false;
  }
  return true;
}

const charCount = (str) => {
  let result = {};
  for (let char of str) {
    if (isAlphNumeric(char)) {
      char = char.toLowerCase();
      result[char] = ++result[char] || 1;
    }
    //console.log(Object.keys(result).find( key => result[key] == result[char]),result[char]);
  }
  return result;
};

////////////////////////////////////////////////////////////

// function print(a,b){
//     return a + " -> " + b;
// };

// function flip(fn){
//     return fn.split("->").reverse().join("->");
// }

// console.log(flip(print)(1,2));

function convert(cc) {
  if (cc.length > 4) {
    let newArray = cc.split("");
    for (let i = 0; i < newArray.length - 4; i++) {
      newArray[i] = "#";
    }
    return newArray.join("");
  } else {
    return cc;
  }
}

console.log(convert("4550526356855689"));

////////////////////////////////////////////////////////////
//NOTE: Exercise 3.
/*
    A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
    Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

// const abc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// const newAbc = abc.join("");

function isPangram(string) {
  // const newString = string.toLowerCase().split(" ").join("").split("");
  // let alphabet = "abcdefghijklmnopqrstuvwxyz";
  // let alphabetArray = alphabet.split("");

  // alphabet.split("").forEach(letter =>{
  //     if(newString.indexOf(letter) === -1){
  //         return "not pangram";
  //     };
  // });
  //--Solution 2
  // const pangram = newAbc.forEach(index => {
  //     if(newString.indexOf(newAbc[index] === -1)){
  //         return "not pangram";
  //     }
  // });
  // return pangram;
  //---Solution 1
  // for(let i = 0; i<alphabet.length; i++){
  //     if(newString.indexOf(alphabet[i]) === -1){
  //         return "not pangram";
  //     }
  // }
  // return "is pangram";
  //---Solution 3.
  const newString = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .every((letter) => newString.indexOf(letter) !== -1)
    ? "is pangram"
    : "not pangram";
}

console.log(isPangram("The quick brown fox jumps over the lazy dog"));
console.log(isPangram("This is not a pangram"));

//|==> Problem
// An isogram is a word that has no repeating letters, consecutive or
// non-consecutive. Implement a function that determines whether a string that
// contains only letters is an isogram. Assume the empty string is an isogram.
// Ignore letter case.

// Example: (Input --> Output)
// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)
console.log("===============================================💣");
const isogram = (str) => {
  const cleanStr = str.toLowerCase().split("");
  let objectStr = {};
  let validate = true;
  cleanStr.forEach((char) => {
    objectStr[char] = objectStr[char] + 1 || 1;
  });
  cleanStr.forEach((char) => {
    if (objectStr[char] > 1) {
      return (validate = false);
    }
  });
  return validate;
};
console.log(isogram("apple"));

//|==> Problem
//Return the number (count) of vowels in the given string.
//We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.\

console.log("===============================================💣");
function getCount(str) {
  const cleanStr = str.toLowerCase().split("").sort();
  const vowels = ["a", "e", "i", "o", "u"];
  let counter = 0;
  cleanStr.forEach((char) => {
    if (vowels.indexOf(char) !== -1) {
      counter++;
    }
  });
  return counter;
}

// function getCount(str) {
//     var vowelsCount = 0;
//     vowelsCount = str.match(/[aeiou]/gi);
//     return vowelsCount ? vowelsCount.length:0;
// }

// function getCount(str) {
//     let vowels = ['a','e','i','o','u'];
//     return str.split('').filter(letter => {
//       return vowels.includes(letter)? true : false;
//     }).length;
// }

console.log(getCount("abracadabra"));

//|==> Problem
// You are given an array (which will have a length of at least 3, but
// could be very large) containing integers. The array is either entirely
// comprised of odd integers or entirely comprised of even integers except
// for a single integer N. Write a method that takes the array as an argument
// and returns this "outlier" N.

// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

console.log("===============================================💣");

function findOutlier(integers) {
  let counterOdd = 0;
  let counterEven = 0;
  integers.forEach((number) => {
    number % 2 === 0 ? counterEven++ : counterOdd++;
  });
  if (counterOdd > 1) {
    const number = integers.filter((even) => even % 2 === 0);
    return number[0];
  }
  if (counterEven > 1) {
    const number = integers.filter((odd) => odd % 2 !== 0);
    return number[0];
  }
}

// function findOutlier(int){
//     var even = int.filter(a=>a%2==0);
//     var odd = int.filter(a=>a%2!==0);
//     return even.length==1? even[0] : odd[0];
// }

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));

//|==> Problem
// Well met with Fibonacci bigger brother, AKA Tribonacci.
// As the name may already reveal, it works basically like a Fibonacci,
// but summing the last 3 (instead of 2) numbers of the sequence to generate
// the next. And, worse part of it, regrettably I won't get to hear non-native
// Italian speakers trying to pronounce it :(

// So, if we are to start our Tribonacci sequence with [1, 1, 1] as a
// starting input (AKA signature), we have this sequence:

// [1, 1 ,1, 3, 5, 9, 17, 31, ...]
// But what if we started with [0, 0, 1] as a signature?
// As starting with [0, 1] instead of [1, 1] basically shifts the
// common Fibonacci sequence by once place, you may be tempted to think
// that we would get the same sequence shifted by 2 places, but that is not
// the case and we would get:

// [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
// Well, you may have guessed it by now, but to be clear: you need
// to create a fibonacci function that given a signature array/list,
// returns the first n elements - signature included of the so seeded sequence.

// Signature will always contain 3 numbers; n will always be a non-negative
// number; if n == 0, then return an empty array (except in C return NULL)
// and be ready for anything else which is not clearly specified ;)

// If you enjoyed this kata more advanced and generalized version of
// it can be found in the Xbonacci kata

// [Personal thanks to Professor Jim Fowler on Coursera for his awesome
// classes that I really recommend to any math enthusiast and for showing
// me this mathematical curiosity too with his usual contagious passion :)]

console.log("===============================================💣");

//Solution 1
// function tribonacci(signature,n){
//     for( let i = 0; i < n; i++){
//         if(i > 2){
//             signature.push(signature[i-1] + signature[i-2] + signature[i-3]);
//         }
//     }
//     return signature;
// }

//Solution 2
function tribonacci(signature, n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    i < 3
      ? arr.push(signature[i])
      : arr.push(arr[i - 1] + arr[i - 2] + arr[i - 3]);
  }
  return arr;
}
//Solution 3: Using recursive function.

function tribonacci1(signature, n) {
  if (n > 0 && n < 3) return signature.slice(0, n);
  if (n === 0) return [];
  // if(signature.length === n + 1) return;
  if (signature.length !== n) {
    signature.push(
      signature[signature.length - 1] +
        signature[signature.length - 2] +
        signature[signature.length - 3]
    );
    return tribonacci1(signature, n);
  }
  return signature;
}

console.log(tribonacci([1, 1, 1], 10));
console.log(tribonacci([1, 2, 3], 15));

console.log(tribonacci1([1, 2, 3], 10));
console.log(tribonacci1([3, 2, 1], 4));

//|==> Problem
// DESCRIPTION:
// Create a function taking a positive integer as its parameter and returning
// a string containing the Roman Numeral representation of that integer.

// Modern Roman numerals are written by expressing each digit separately
// starting with the left most digit and skipping any digit with a
// value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC;
// resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII.
// 1666 uses each Roman symbol in descending order: MDCLXVI.

// Example:

// solution(1000); // should return 'M'
// Help:

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000

// Remember that there can't be more than 3 identical symbols in a row.

console.log("===============================================💣");

function romanNumber(number) {
  let str = "";
  const symbols = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  for (let i of Object.keys(symbols)) {
    let integer = Math.floor(number / symbols[i]);
    number -= integer * symbols[i];
    //If integer?.z is 0, the roman number will not be printed;
    str += i.repeat(integer);
  }
  return str;
}

console.log(romanNumber(130));

//|==> Problem
// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

console.log("===============================================💣");

//Solution 1
// function generateHashtag(str){
//     let hashtag = '#';
//     if(str !== '' && str.trim().length !== 0){
//         const words = str.split(' ').filter( element => element !== '');
//         words.forEach(word =>  {
//             const capital = word[0].toUpperCase();
//             const wordSlice = word.slice(1,word.length);
//             hashtag += capital + wordSlice;
//         });
//     }else{
//         return false;
//     }
//     if(hashtag.length > 140){
//         return false;
//     }
//     return hashtag;
// };

//Solution 2.
function generateHashtag(str) {
  if (str.trim().length !== 0) {
    let hashtag =
      "#" +
      str
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join("");
    return hashtag.length > 140 || str === "" ? false : hashtag;
  } else {
    return false;
  }
}

console.log(generateHashtag("Hello there thanks for trying my Kata"));
console.log(generateHashtag("war of wordls"));
console.log(generateHashtag(" ".repeat(200)));
console.log(generateHashtag("code" + " ".repeat(140) + "wars"));

//|==> Problem
// Write a function that takes a string of parentheses, and determines
// if the order of the parentheses is valid. The function should return
// true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
console.log("===============================================💣");
function validParentheses(parens) {
  const valid = { "(": 0, ")": 0 };
  parens.split("").forEach((element) => valid[element]++);
  return Object.keys(valid)
    .filter((key) => key === "(")
    .every((key) => valid[key] === valid[")"]);
}

//|==> Problem
// DESCRIPTION:
// Write a function that takes a string of braces, and determines if the
// order of the braces is valid. It should return true if the string is
// valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new
// characters: brackets [], and curly braces {}. Thanks to @arnedag for the
// idea!

// All input strings will be nonempty, and will only consist of parentheses,
// brackets and curly braces: ()[]{}.

// What is considered Valid?
// A string of braces is considered valid if all braces are matched
// with the correct brace.

// Examples
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False

console.log("===============================================💣");

//Mostly work 😆
// function boolValidation(key,valid){
//     let bool = false;
//     if(key === '('){
//         bool = valid[key] === valid[')'];
//     }else if( key === '['){
//         bool = valid[key] === valid[']'];
//     }else{
//         bool = valid[key] === valid['}'];
//     }
//     return bool;
// }

// function validBraces(braces){
//     //TODO
//     const valid = {
//         '(' : 0,
//         ')' : 0,
//         '[' : 0,
//         ']' : 0,
//         '{' : 0,
//         '}' : 0
//     };
//     braces.split('').forEach(char => valid[char]++);
//     return Object.keys(valid)
//     .filter( key => key === '(' || key === '[' || key === '{')
//     .every( key => boolValidation(key,valid));
// }

function validBraces(braces) {
  const valid = { "(": ")", "[": "]", "{": "}" };
  const stack = [];
  let currentChar;
  for (let i = 0; i < braces.length; i++) {
    currentChar = braces[i];
    if (valid[currentChar]) {
      stack.push(currentChar);
    } else {
      if (currentChar !== valid[stack.pop()]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(validBraces("(())"));
console.log(validBraces("([[])]"));
console.log(validBraces("()))"));
console.log(validBraces("())({}}{()][]["));

//|==> Problem
// Write a function named first_non_repeating_letter that takes a string
// input, and returns the first character that is not repeated anywhere
// in the string.

// For example, if given the input 'stress', the function should return
// 't', since the letter t only occurs once in the string, and occurs
// first in the string.

// As an added challenge, upper- and lowercase letters are considered
// the same character, but the function should return the correct
// case for the initial letter. For example, the input 'sTreSS'
// should return 'T'.

// If a string contains all repeating characters, it should return
// an empty string ("") or None -- see sample tests.

console.log("===============================================💣");

//Solution 1.
function firstNonRepeatingLetter(string) {
  if (string !== "") {
    const object = {};
    const arrStr = string.split("");
    string
      .toLowerCase()
      .split("")
      .forEach((char) => (object[char] = object[char] + 1 || 1));
    if (Object.keys(object).every((letter) => object[letter] > 1)) {
      return "";
    } else {
      const letterWithoutRepeation = Object.keys(object).filter(
        (letter) => object[letter] === 1
      )[0];
      return arrStr.find(
        (letter) => letter.toLowerCase() === letterWithoutRepeation
      );
    }
  } else {
    return string;
  }
}

//Solution 2.
// function firstNonRepeatingLetter(s) {
//     for(var i in s) {
//         if(s.match(new RegExp(s[i],"gi")).length === 1) {
//             return s[i];
//         }
//     }
//     return '';
// }

console.log(firstNonRepeatingLetter("a"));
console.log(firstNonRepeatingLetter("sTreSS"));
console.log(firstNonRepeatingLetter("abba"));
console.log(firstNonRepeatingLetter("stress"));
console.log(firstNonRepeatingLetter("moonmen"));

//|==> Problem.
// Write a program that will calculate the number of trailing zeros in a factorial
// of a given number.

// N! = 1 * 2 * 3 *  ... * N

// Be careful 1000! has 2568 digits...

// For more info, see: http://mathworld.wolfram.com/Factorial.html

// Examples
// zeros(6) = 1
// # 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

// zeros(12) = 2
// # 12! = 479001600 --> 2 trailing zeros
// Hint: You're not meant to calculate the factorial. Find another way to find
// the number of zeros.

console.log("===============================================💣");

function zeros(n) {
  let numberOfZeros = 0;
  const max = Math.round(Math.log(n) / Math.log(5));
  for (let i = 1; i <= max; i++) {
    numberOfZeros += Math.floor(n / Math.pow(5, i));
  }
  return numberOfZeros;
}

// console.log(zeros(1000));

//|==> Problem
// The maximum sum subarray problem consists in finding the maximum sum of a
// contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum
// sum is the sum of the whole array. If the list is made up of only negative numbers,
// return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or
// array is also a valid sublist/subarray.

console.log("===============================================💣");

function maxSequence(arr) {
  let currentSum = 0;
  let maxSum = 0;
  if (arr.length === 0) {
    return 0;
  }
  arr.forEach((number) => {
    currentSum = Math.max(number, currentSum + number);
    maxSum = Math.max(maxSum, currentSum);
  });
  return maxSum;
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

//|==> Problem
// Create a function that takes a positive integer and returns the next bigger
// number that can be formed by rearranging its digits. For example:

// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071
// nextBigger(num: 12)   // returns 21
// nextBigger(num: 513)  // returns 531
// nextBigger(num: 2017) // returns 2071
// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):

// 9 ==> -1
// 111 ==> -1
// 531 ==> -1
// nextBigger(num: 9)   // returns nil
// nextBigger(num: 111) // returns nil
// nextBigger(num: 531) // returns nil

console.log("13===============================================💣");

//Attempt 1
//===============================================
// function nextBiggerHelper(arr){
//     return arr.every((num,index) => {
//         num === arr[index + 1];
//     });
// }

// function nextBigger(n){
//     if( n < 10) return -1;
//     const numbers = n.toString().split('');
//     const numbersReversed = numbers.reverse().map( num => Number(num));
//     let nextBiggerNumber = [];
//     if(nextBiggerHelper(numbers)){
//         return -1;
//     }else{
//         for(let i = 0; i < numbersReversed.length; i++){
//             if( i === 0){
//                 nextBiggerNumber.push(numbersReversed[i]);
//             }
//             if(i === 1){
//                 nextBiggerNumber.unshift(numbersReversed[i]);
//             }
//             //This is to get the rest of the number iserted into the array "nestBiggerNumber"
//             if(i > 1){
//                 nextBiggerNumber.push(numbersReversed[i]);
//             }
//         }
//     }
//     const newNumber = Number(nextBiggerNumber.reverse().join(''));
//     return  (newNumber >= n) ? newNumber : -1;
// }

//Attempt 2
//===============================================
// function nextBiggerHelper(arr){
//     return arr.every((num,index) => {
//         num === arr[index + 1];
//     });
// }

// function nextBigger(n){
//     if( n < 10 ) return -1;
//     const numbers = n.toString().split('').map(num => { return Number(num)});
//     const numbersReversed = numbers.reverse();
//     let nextBiggerNumber = [];
//     let newNumber;
//     let current,previous;
//     if(nextBiggerHelper(numbersReversed)){
//         return -1;
//     }else{
//         newNumber = nextBiggerNumber.reverse().join('');
//         let count = 0
//         while(newNumber < n){
//             for(let i = count; i < numbersReversed.length; i++){
//                 if( i === count || i < count) nextBiggerNumber.push(numbersReversed[i]);
//                 if( i === count + 1) nextBiggerNumber.unshift(numbersReversed[i]);
//                 if( i > count) nextBiggerNumber.push(numbersReversed[i]);
//             }
//             newNumber = nextBiggerNumber.reverse().join('');
//             nextBiggerNumber = [];
//             console.log(newNumber)
//             count++;
//         }
//     }
//     return  (newNumber >= n) ? newNumber : -1;
// }

//Solution 3: Is to slow.
// function nextBigger(num) {
//     let newNum = 0;
//     let otherNum = 0;
//     let indicator = 0;
//     while (num > newNum) {
//         if (indicator === 0) {
//             otherNum = num;
//             indicator++;
//             continue;
//         }
//         if (
//             String(num).split("").sort().join("") === String(otherNum).split("").sort().join("")
//         ){
//             if (otherNum > num) {
//                 newNum = otherNum;
//             }
//         }
//         otherNum++;
//     }
//     return newNum;
// }

function nextPermutation(n, arr) {
  const originalNum = parseInt(arr.join(""));
  // Start from the right most digit and find the first
  // digit that is
  // smaller than the digit next to it.
  let i = 0;
  for (i = n - 1; i > 0; i--) {
    if (arr[i] > arr[i - 1]) break;
  }
  // If there is a possibility of a next greater element
  if (i !== 0) {
    // Find the smallest digit on right side of (i-1)'th
    // digit that is
    // greater than number[i-1]
    for (let j = n - 1; j >= i; j--) {
      if (arr[i - 1] < arr[j]) {
        // Swap the found smallest digit i.e. arr[j]
        // with arr[i-1]
        let temp = arr[i - 1];
        arr[i - 1] = arr[j];
        arr[j] = temp;
        break;
      }
    }
  }
  // Reverse the digits after (i-1) because the digits
  // after (i-1) are in decreasing order and thus we will
  // get the smallest element possible from these digits
  arr = arr.slice(0, i).concat(arr.slice(i, arr.length).reverse());
  // If i is 0 that means elements are in decreasing order
  // Therefore, no greater element possible then we just
  // return the lowest possible
  // order/element formed from these digits by just
  // reversing the vector
  return parseInt(arr.join("")) > originalNum ? parseInt(arr.join("")) : -1;
}

function nextBiggerAreAllNumberTheSame(arr) {
  return arr.every((num) => num === arr[0]);
}

function nextBigger(n) {
  // If number of digits is less that 10 then just return -1
  if (n < 10) return -1;
  const numbersArr = n
    .toString()
    .split("")
    .map((num) => {
      return Number(num);
    });
  const numbersArrLength = numbersArr.length;
  if (nextBiggerAreAllNumberTheSame(numbersArr)) return -1;
  return nextPermutation(numbersArrLength, numbersArr);
}

console.log(nextBigger(444));
console.log(nextBigger(12000));
console.log(nextBigger(531));
console.log(nextBigger(8));
console.log(nextBigger(144));

//|==> Problem
// Snail Sort
// Given an n x n array, return the array elements arranged from outermost
// elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]
// This image will illustrate things more clearly:

// NOTE : The idea is not sort the elements from the lowest value to the highest;
// the idea is to traverse the 2-d array in a clockwise snailshell pattern.

// NOTE 2 : The 0x0 (empty matrix) is represented as en empty array inside an array [[]].

console.log("14===============================================💣");

//Solution 1.
function snails(arr) {
  const row_length = arr.length;
  const column_length = arr[0].length;
  if (row_length === 1) return arr;
  if (row_length === 0 && column_length === 0) return [[]];
  const results = [];
  let start_column = 0;
  let end_column = column_length - 1;
  let start_row = 0;
  let end_row = row_length - 1;
  while (start_column <= end_column && start_row <= end_row) {
    //1 top row
    for (let i = start_column; i <= end_column; i++) {
      results.push(arr[start_row][i]);
    }
    start_row++;
    //2 right column
    for (let i = start_row; i <= end_row; i++) {
      results.push(arr[i][end_column]);
    }
    end_column--;
    //3 bottom row
    for (let i = end_column; i >= start_column; i--) {
      results.push(arr[end_row][i]);
    }
    end_row--;
    //4 left column
    for (let i = end_row; i >= start_row; i--) {
      results.push(arr[i][start_column]);
    }
    start_column++;
  }
  return results;
}

//Solution 2.
function snail(array) {
  var vector = [];
  while (array.length) {
    console.log(array);
    vector.push(...array.shift());
    console.log(array);
    array.map((row) => vector.push(row.pop()));
    console.log(array[0], array[1]);
    array.reverse().map((row) => row.reverse());
    console.log(array[0], array[1]);
  }
  return vector;
}
console.log(
  "second",
  snail([
    [1, 2, 3],
    [8, 9, 4],
    [7, 6, 5],
  ])
);
console.log(snails([[], []]));
console.log(snails([[1, 2, 3]]));

//|==> Problem
// DESCRIPTION:
// Given a positive number n > 1 find the prime factor decomposition of n.
// The result will be a string with the following form :

//  "(p1**n1)(p2**n2)...(pk**nk)"
// with the p(i) in increasing order and n(i) empty if n(i) is 1.

// Example: n = 86240 should return "(2**5)(5)(7**2)(11)"

console.log("15===============================================💣");

//Solution 1.
function getFactaorsArr(n) {
  const factors = [];
  let divisor = 2;
  while (n >= 2) {
    if (n % divisor === 0) {
      factors.push(divisor);
      n = n / divisor;
    } else {
      divisor++;
    }
  }
  return factors;
}

function primeFactors(n) {
  let stringOfIncreasingOrder = "";
  const arrayOfFactors = getFactaorsArr(n);
  const objectOfNumbers = {};
  arrayOfFactors.forEach(
    (number) => (objectOfNumbers[number] = objectOfNumbers[number] + 1 || 1)
  );
  Object.keys(objectOfNumbers).forEach((number) => {
    if (objectOfNumbers[number] > 1) {
      stringOfIncreasingOrder += `(${number}**${objectOfNumbers[number]})`;
    } else {
      stringOfIncreasingOrder += `(${number})`;
    }
  });
  return stringOfIncreasingOrder;
}

//Solution 2.
const primeFactor2 = (n) => {
  const obj = {};
  let i = 2;
  //NOTE: obj[i] = -~obj[i]
  /*
        if ([key] in obj) obj[key] = obj[key] + 1
        else obj[key] = 1
    */
  while (n > 1) !(n % i) ? ((obj[i] = -~obj[i]), (n /= i)) : i++;
  return Object.keys(obj).reduce(
    (pre, val) => pre + `(${val}${obj[val] > 1 ? `**${obj[val]}` : ``})`,
    ``
  );
};

const randomNumber = Math.floor(Math.random() * 10000);
//const randomNumber = 86240;
console.log(primeFactor2(randomNumber));
//console.log('Prime factors of', randomNumber + ':', primeFactors(randomNumber))

//|==> Problem
// Lyrics...
// Pyramids are amazing! Both in architectural and mathematical sense. If you
// have a computer, you can mess with pyramids even if you are not in Egypt at the
// time. For example, let's consider the following problem. Imagine that you have
// a pyramid built of numbers, like this one here:

//    /3/
//   \7\ 4
//  2 \4\ 6
// 8 5 \9\ 3
// Here comes the task...
// Let's say that the 'slide down' is the maximum sum of consecutive numbers from
// the top to the bottom of the pyramid. As you can see, the longest 'slide down'
// is 3 + 7 + 4 + 9 = 23

// Your task is to write a function that takes a pyramid representation as argument
// and returns its' largest 'slide down'. For example:

// * With the input `[[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]]`
// * Your function should return `23`.
// By the way...
// My tests include some extraordinarily high pyramids so as you can guess,
// brute-force method is a bad idea unless you have a few centuries to waste.
// You must come up with something more clever than that.

console.log("16===============================================💣");

//Attempt 1.
// function getBiggerNumber(row){
//     console.log(row)
//     if(row.length === 1) return row[0];
//     return row.reduce( (prev,curr) => {
//         return (prev > curr) ? prev : curr;
//     });
// }

// function getSlideNumber(row){
//     if(row.length === 1) return row[0];
//     let num = 0;
//     row.forEach( (number,index) => {
//         if(index === row.length - 2 && number){
//             num += number
//         };
//     })
//     return num;
// }

// function longestSlideDown (pyramid) {
//     let greaterNumbersArr = [];
//     let accumulator = 0;
//     pyramid.forEach( row => {
//         greaterNumbersArr.push(getSlideNumber(row));
//     })
//     greaterNumbersArr.forEach(num => accumulator += num);
//     return accumulator;
// }

//Solution 1 💀 I don't understant this code.
function longestSlideDown(pyramid) {
  let pyramidSum = [];
  pyramid.forEach((elem, index) => {
    pyramidSum.push(
      elem.map((e) => {
        return index === pyramid.length - 1 ? e : 0;
      })
    );
  });
  for (let i = pyramidSum.length - 2; i >= 0; i--) {
    for (let j = 0; j < pyramidSum[i].length; j++) {
      pyramidSum[i][j] =
        pyramid[i][j] +
        Math.max(pyramidSum[i + 1][j], pyramidSum[i + 1][j + 1]);
    }
  }
  return pyramidSum[0][0];
}

//Solution 2
function longestSlideDown2(pyramid) {
  return pyramid.reduceRight((last, current) =>
    current.map(
      (value, index) => value + Math.max(last[index], last[index + 1])
    )
  )[0];
}

console.log(longestSlideDown([[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]]));
console.log(
  longestSlideDown2([
    [75],
    [95, 64],
    [17, 47, 82],
    [18, 35, 87, 10],
    [20, 4, 82, 47, 65],
    [19, 1, 23, 75, 3, 34],
    [88, 2, 77, 73, 7, 63, 67],
    [99, 65, 4, 28, 6, 16, 70, 92],
    [41, 41, 26, 56, 83, 40, 80, 70, 33],
    [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
    [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
    [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
    [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
    [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
    [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23],
  ])
);
// console.log(getBiggerNumber([8, 5, 9, 3]));

//|==> Problem
// DESCRIPTION:
// My friend John and I are members of the "Fat to Fit Club (FFC)". John is
// worried because each month a list with the weights of members is published and
// each month he is the last on the list which means he is the heaviest.

// I am the one who establishes the list so I told him: "Don't worry any more,
// I will modify the order of the list". It was decided to attribute a "weight" to
// numbers. The weight of a number will be from now on the sum of its digits.

// For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100
// will come before 99.

// Given a string with the weights of FFC members in normal order can you give this
// string ordered by "weights" of these numbers?

// Example:
// "56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes:

// "100 180 90 56 65 74 68 86 99"
// When two numbers have the same "weight", let us class them as if they were
// strings (alphabetical ordering) and not numbers:

// 180 is before 90 since, having the same "weight" (9), it comes before as a string.

// All numbers in the list are positive numbers and the list can be empty.

// Notes
// it may happen that the input string have leading, trailing whitespaces and more
// than a unique whitespace between two consecutive numbers
// For C: The result is freed.

console.log("17===============================================💣");

//Mostly solution 1.
function compareNumber(a, b) {
  return a[1] - b[1];
}

// function compareString(a,b){
//     return ('' + a.attr).localeCompare(b.attr);
// }

function orderWeight(strng) {
  const arrStr = strng.split(" ").filter((el) => {
    return el !== "";
  });
  const arrNum = arrStr
    .map((strNum) => strNum.split("").map((num) => Number(num)))
    .sort();
  let arrSum = arrNum.map((numArr) =>
    numArr.reduce((prev, cur) => {
      return prev + cur;
    })
  );
  let arrMatrix = [];
  let result = [];
  for (let i = 0; i < arrNum.length; i++) arrMatrix.push([]);
  arrNum.forEach((number, index) => {
    arrMatrix[index][0] = number.join("");
    arrMatrix[index][1] = arrSum[index];
  });
  //console.log(arrMatrix)
  arrMatrix
    .sort(compareNumber)
    .sort(compareString)
    .forEach((num) => result.push(num[0]));
  return result.join(" ");
}

//Solution 2: taken from stack Overflow.
function sumOfParts(num) {
  return num.split("").reduce((a, b) => a + +b, 0);
}

function orderWeight2(string) {
  return string
    .split(" ")
    .sort((a, b) => sumOfParts(a) - sumOfParts(b) || a > b || -(a < b))
    .join(" ");
}

//Solution 3: taken from codewars
function orderWeight(strng) {
  const sum = (str) => str.split("").reduce((sum, el) => sum + +el, 0);
  function comp(a, b) {
    let sumA = sum(a);
    let sumB = sum(b);
    return sumA === sumB ? a.localeCompare(b) : sumA - sumB;
  }
  return strng.split(" ").sort(comp).join(" ");
}

//console.log("56 65 74 100 99 68 86 180 90")
console.log(orderWeight2("56 65    74 100 99 68 86 180 90"));
//console.log(somethign([[5,6], [6,5], [7,4], [1,0,0], [9,9], [6,8], [8,6], [1,8,0], [9,0]]));
//console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"));
//console.log(orderWeight("297193 185 393983 153 38084 123 407144 84 112107 149 132475 123 90461 197 62332 173 100370 145 152390 84 63"));
//console.log('123 123 153 63 145 100370 173 112107 84 84 149 185 62332 197 152390 407144 90461 132475 38084 297193 393983')
//console.log(orderWeight("476936 1 338050 65 175598 57 171733 97 89837 140 2869 92 216434 163 124277 85 25649 173 281844 164 52"));
//console.log('1 2 200 4 4 6 6 7 7 18 27 72 81 9 91 425 31064 7920 67407 96488 34608557 71899703');
//console.log([1,7, 18, 27, 72].sort())

//|==> Problem
// Write a method that takes a field for well-known board game "Battleship"
// as an argument and returns true if it has a valid disposition of ships, false
// otherwise. Argument is guaranteed to be 10*10 two-dimension array. Elements
// in the array are numbers, 0 if the cell is free and 1 if occupied by ship.

// Battleship (also Battleships or Sea Battle) is a guessing game for two players.
// Each player has a 10x10 grid containing several "ships" and objective is to destroy
// enemy's forces by targetting individual cells on his field. The ship occupies one
// or more cells in the grid. Size and number of ships may differ from version to
// version. In this kata we will use Soviet/Russian version of the game.

// Before the game begins, players set up the board and place the ships accordingly to
// the following rules:
// There must be single battleship (size of 4 cells), 2 cruisers (size 3), 3 destroyers
// (size 2) and 4 submarines (size 1). Any additional ships are not allowed, as well
// as missing ships.
// Each ship must be a straight line, except for submarines, which are just single cell.

// The ship cannot overlap or be in contact with any other ship, neither by edge nor by corner.

// This is all you need to solve this kata. If you're interested in more information about the
// game, visit this link.

console.log("18===============================================💣");

//Waste of time;
// function validateRowSpaces(arr){
//     let validate = true;
//     let index = 0;
//     if(arr.every((prev,cur) => prev + cur === 0)) {
//         return false;
//     }else{
//         for (index; index < arr.length; index++){
//             //console.log(arr[index],index)
//             if(arr[index] === 1){
//                 if( arr[index + 1] === 1){
//                     if(arr[index + 2] === 1){
//                         if(arr[index + 3] === 1){
//                             if(arr[index + 4] === 1) {
//                                 //index++;
//                                 validate = false;
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
//     //console.log(validate)
//     return validate;
// }

// function validateBattlefield(field){
//     //arrColum [colum number, index column, row]
//     let arrColum = [];
//     let matrixC = [[],[],[],[],[],[],[],[],[],[]];
//     field.forEach( (row,indexR) => {
//         //console.log(validateRowSpaces(row))
//         if(validateRowSpaces(row)){
//             console.log(indexR)
//         }
//     })
//     arrColum.forEach( (object,index) => {
//         matrixC[object.indexC].push(object.numberOnColum);
//     })
//     return matrixC;
// }

// // console.log(validateRowSpaces([1, 0, 0, 0, 0, 1, 1, 0, 0, 0]));
// // console.log(validateRowSpaces([1, 0, 1, 0, 1, 0, 1, 0, 1, 0]));
// // console.log(validateRowSpaces([1, 1, 1, 0, 1, 1, 1, 0, 1, 1]))
// console.log(validateRowSpaces([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
// console.log([0, 0, 0, 0, 0, 0, 0, 0, 0, 0].reduce((prev,cur) => prev + cur === 0));

//NOTE: Solution 1;

// function findShip(x,y,field,valid,ships){
//     let k = 0, l = 0, m = 0;
//     if(
//         (field[x-1] && (field[x-1][y-1] === 1 || field[x-1][y+1] === 1)) ||
//         (field[x+1] && (field[x+1][y-1] === 1 || field[x+1][y+1] === 1))
//     ) return false;
//     for(k = 0; k < ships.length; k++){
//         // horizontal
//         for(l = 0; l < ships.length; l++ ){
//             if(!field[x][y+l] || field[x][y+l] === 0) break;
//             // The ship cannot overlap or be in contact with any other ship
//             if( l > 0 && field[x+1] && field[x+1][y+l] === 1) return false;
//             valid[`(${x},${y + l})`] = true;
//         }
//         // vertical
//         for(m = 0; m < ships.length; m++){
//             if(!field[x+m] || field[x+m][y] === 0) break;
//              // The ship cannot overlap or be in contact with any other ship
//             if( m > 0 && field[x+m][y+1]  === 1) return false;
//             valid[`(${x+m},${y})`] = true;
//         }
//     }
//     ships[Math.max(l,m) - 1][1] -= 1;
//     return !(l > 1 && m > 1);
// }

// function validateBattlefield(field){
//     /*
//         1 : battleship
//         2 : crusisers
//         3 : destroyers
//         4 : submarines
//      */
//     const ships = [[1,4],[2,3],[3,1],[4,1]];
//     const valid = {};
//     for(let row = 0; row < field.length; row++){
//         for(let column = 0; column < field[row].length; column++){
//             if(ships.every(value => value[1] === 0) && field[row][column] === 1) return false;
//             if(!valid[`${row},${column}`] && field[row][column] === 1){
//                 if(!findShip(row,column,field,valid,ships)) return false;
//             }
//         }
//     }
//     return ships.every(value => value[1] === 0);
// }
// console.log(validateBattlefield([
//     [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
//     [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
//     [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
//     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
//     [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
//     [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]));

function findShip(x, y, field, visited, ships) {
  // should not be in contact with other ship by corner
  if (
    (field[x - 1] &&
      (field[x - 1][y - 1] === 1 || field[x - 1][y + 1] === 1)) ||
    (field[x + 1] && (field[x + 1][y - 1] === 1 || field[x + 1][y + 1] === 1))
  )
    return false;
  let k = 0,
    l = 0,
    m = 0;
  for (k = 0; k < ships.length; k++) {
    // horizontal
    for (l = 0; l < ships.length; l++) {
      if (!field[x][y + l] || field[x][y + l] === 0) break;
      // The ship cannot overlap or be in contact with any other ship
      if (l > 0 && field[x + 1] && field[x + 1][y + l] === 1) return false;
      visited[`(${x},${y + l})`] = true;
    }
    // vertical
    for (m = 0; m < ships.length; m++) {
      if (!field[x + m] || field[x + m][y] === 0) break;
      // The ship cannot overlap or be in contact with any other ship
      if (m > 0 && field[x + m][y + 1] === 1) return false;
      visited[`(${x + m},${y})`] = true;
    }
  }
  console.log(l, m);
  ships[Math.max(l, m) - 1][1] -= 1;
  return !(l > 1 && m > 1);
}
function validateBattlefield(field) {
  /*
        1 : battleship
        2 : crusisers
        3 : destroyers
        4 : submarines
    */
  const ships = [
    [1, 4],
    [2, 3],
    [3, 2],
    [4, 1],
  ];
  const visited = {};
  for (let row = 0; row < field.length; row++) {
    for (let column = 0; column < field[row].length; column++) {
      if (ships.every((val) => val[1] === 0) && field[row][column] === 1)
        return false;
      if (!visited[`(${row},${column})`] && field[row][column] === 1) {
        if (!findShip(row, column, field, visited, ships)) return false;
      }
    }
  }
  //console.log(visited)
  return ships.every((val) => val[1] === 0);
}

console.log(
  validateBattlefield([
    [1, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ])
);

console.log(
  validateBattlefield([
    [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
  ])
);
