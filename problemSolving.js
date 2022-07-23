'use strict';

const stringCount = (string) => {
    let count = 0;
    const newString = string.split('');
    for (let index = 0; index < newString.length; index++) {
        console.log(`${newString[index]}:${index + 1}`);
        count++;
    }
    console.log(`Total letters: ${count}`);
};

stringCount('saul');

const countChar = (str) =>{
    const result = {};
    for(let i = 0; i < str.length; i++){
        let char = str[i].toLowerCase();
        if(result[char] > 0){
            result[char]++;
        }else{
            result[char] = 1;
        };
        //console.log(Object.keys(result).find( key => result[key] == result[char]),result[char]);
    };
    return result;
};

// countChar('hello');

function isAlphNumeric(char){
    let code = char.charCodeAt(0);
    if(!(code > 47 && code < 58) && //numeric (0-9)
    !(code > 64 && code < 91) && //upper alpha(A-Z) 
    !(code > 96 && code < 123)) //lower alpha(a-z)
    {
        return false;
    }
    return true;
}

const charCount = (str) =>{
    let result = {};
    for(let char of str){
        if(isAlphNumeric(char)){
            char = char.toLowerCase();
            result[char] = ++result[char] || 1;
        }
        //console.log(Object.keys(result).find( key => result[key] == result[char]),result[char]);
    };
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

function convert(cc){
    if(cc.length > 4){
        let newArray = cc.split("");
        for(let i=0;i<(newArray.length-4);i++){
            newArray[i] = '#';
        }
        return newArray.join("");
    }else{
        return cc;
    }
};

console.log(convert("4550526356855689"));

////////////////////////////////////////////////////////////
//NOTE: Exercise 3.
/*
    A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
    Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/


// const abc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// const newAbc = abc.join("");

function isPangram(string){
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
    return "abcdefghijklmnopqrstuvwxyz".split("").every(letter => newString.indexOf(letter) !== -1) ? "is pangram" : "not pangram";
};

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
    const cleanStr = str.toLowerCase().split('');
    let objectStr = {};
    let validate = true;
    cleanStr.forEach(char => {
        objectStr[char] = objectStr[char] + 1 || 1;
    });
    cleanStr.forEach( char => {
        if(objectStr[char] > 1){
            return validate = false;
        }
    });
    return validate;
}
console.log(isogram('apple'));

//|==> Problem
//Return the number (count) of vowels in the given string.
//We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.\

console.log("===============================================💣");
function getCount(str) {
    const cleanStr = str.toLowerCase().split('').sort();
    const vowels = ['a','e','i','o','u'];
    let counter = 0;
    cleanStr.forEach(char => {
        if(vowels.indexOf(char) !== -1){
            counter++;
        }
    })
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

console.log(getCount('abracadabra'));

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

function findOutlier(integers){
    let counterOdd = 0;
    let counterEven = 0;
    integers.forEach( number => {
        (number % 2 === 0) ? counterEven++ : counterOdd++;
    });
    if(counterOdd > 1){
        const number = integers.filter( even => even % 2 === 0);
        return number[0];
    }
    if( counterEven > 1){
        const number = integers.filter( odd => odd % 2 !== 0);
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
function tribonacci(signature,n){
    let arr = [];
    for( let i = 0; i < n; i++){
        (i < 3) ? arr.push(signature[i]) : arr.push(arr[i-1] + arr[i-2] + arr[i-3]);
    }
    return arr;
}
//Solution 3: Using recursive function.

function tribonacci1(signature,n){
    if(n > 0 && n < 3) return signature.slice(0,n);
    if(n===0) return [];
    // if(signature.length === n + 1) return;
    if(signature.length !== n){
        signature.push(signature[signature.length-1] + signature[signature.length-2] + signature[signature.length-3]);
        return tribonacci1(signature,n);
    }
    return signature;
}

console.log(tribonacci([1,1,1],10));
console.log(tribonacci([1,2,3],15));

console.log(tribonacci1([1,2,3],10));
console.log(tribonacci1([3,2,1],4));

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

function romanNumber(number){
    let str = '';
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
        I: 1
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
function generateHashtag(str){
    if(str.trim().length !== 0){
        let hashtag = '#' + str.split(' ').map( word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
        return hashtag.length > 140 || str === '' ? false: hashtag;
    }else{
        return false;
    }
}; 


console.log(generateHashtag('Hello there thanks for trying my Kata'));
console.log(generateHashtag('war of wordls'));
console.log(generateHashtag(' '.repeat(200)));
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
    const valid = { '(':0,')':0};
    parens.split('').forEach(element => valid[element]++);
    return Object.keys(valid)
        .filter(key => key === '(')
        .every( key => valid[key] === valid[')']);
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

function validBraces(braces){
    const valid = { '(':')','[':']','{':'}'};
    const stack = [];
    let currentChar;
    for(let i = 0; i < braces.length; i++){
        currentChar = braces[i];
        if(valid[currentChar]){
            stack.push(currentChar);
        }else{
            if(currentChar !== valid[stack.pop()]){
                return false;
            }
        }
    }
    return stack.length === 0;
}

console.log(validBraces('(())'));
console.log(validBraces('([[])]'));
console.log(validBraces('()))'));
console.log(validBraces("())({}}{()][]["));