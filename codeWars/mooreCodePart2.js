// DESCRIPTION:
// Part of Series 2/3
// This kata is part of a series on the Morse code. Make sure you solve 
// the previous part before you try this one. After you solve this kata, you 
// may move to the next one.


// In this kata you have to write a Morse code decoder for wired electrical 
// telegraph.
// Electric telegraph is operated on a 2-wire line with a key that, 
// when pressed, connects the wires together, which can be detected on 
// a remote station. The Morse code encodes every character being transmitted 
// as a sequence of "dots" (short presses on the key) and "dashes" (long presses 
//     on the key).

// When transmitting the Morse code, the international standard specifies that:

//IMPORTANT
// "Dot" – is 1 time unit long.
// "Dash" – is 3 time units long.
// Pause between dots and dashes in a character – is 1 time unit long.
// Pause between characters inside a word – is 3 time units long.
// Pause between words – is 7 time units long.
// However, the standard does not specify how long that "time unit" is. 
// And in fact different operators would transmit at different speed. An 
// amateur person may need a few seconds to transmit a single character, a 
// skilled professional can transmit 60 words per minute, and robotic 
// transmitters may go way faster.

// For this kata we assume the message receiving is performed automatically 
// by the hardware that checks the line periodically, and if the line 
// is connected (the key at the remote station is down), 1 is recorded, and 
// if the line is not connected (remote key is up), 0 is recorded. After the 
// message is fully received, it gets to you for decoding as a string containing 
// only symbols 0 and 1.

// For example, the message HEY JUDE, that is ···· · −·−−   ·−−− ··− −·· · may 
// be received as follows:

// 110011001100110000001100000011111100110011111100111111000000000000001100111
// 1110011111100111111000000110011001111110000001111110011001100000011

// As you may see, this transmission is perfectly accurate according to the 
// standard, and the hardware sampled the line exactly two times per "dot".

// That said, your task is to implement two functions:

// Function decodeBits(bits), that should find out the transmission rate of 
// the message, correctly decode the message to dots ., dashes - and spaces 
// (one between characters, three between words) and return those as a string. 
// Note that some extra 0's may naturally occur at the beginning and the end of 
// a message, make sure to ignore them. Also if you have trouble discerning if 
// the particular sequence of 1's is a dot or a dash, assume it's a dot.
// 2. Function decodeMorse(morseCode), that would take the output of the previous 
// function and return a human-readable string.

// NOTE: For coding purposes you have to use ASCII characters . and -, not 
// Unicode characters.

// The Morse code table is preloaded for you (see the solution setup, to get 
//     its identifier in your language).


// Eg:
//   morseCodes(".--") //to access the morse translation of ".--"
// All the test strings would be valid to the point that they could be reliably 
// decoded as described above, so you may skip checking for errors and 
// exceptions, just do your best in figuring out what the message is!

// Good luck!

// After you master this kata, you may try to Decode the Morse code, 
// for real.

console.log("20===============================================💣");

const morseCodes = {
    //'':' ',
    '.-':'A',
    '-...':'B',
    '-.-.':'C',
    '-..':'D',
    '.':'E',
    '..-.':'F',
    '--.':'G',
    '....':'H',
    '..':'I',
    '.---':'J',
    '-.-':'K',
    '.-..':'L',
    '--':'M',
    '-.':'N',
    '---':'O',
    '.--.':'P',
    '--.-':'Q',
    '.-.':'R',
    '...':'S',
    '-':'T',
    '..-':'U',
    '...-':'V',
    '.--':'W',
    '-..-':'X',
    '-.--':'Y',
    '--..':'Z',
    '.----':'1',
    '..---':'2',
    '...--':'3',
    '....-':'4',
    '.....':'5',
    '-....':'6',
    '--...':'7',
    '---..':'8',
    '----.':'9',
    '-----':'0',
    '...---...':'SOS',
    '.-.-':'AA',
    '-.-.--':'!',
    '.-.-.-':'.'
}

//|==> Part 1.
const decodeMorse = (morseCode) => {
    const arrMorseCodeChars = morseCode.split(' ');
    let string = '';
    arrMorseCodeChars.forEach((code) => {
        if(morseCodes[code]){
            string += morseCodes[code]
        }else{
            string += ' ';
        }
    })
    if(string[0] === ' ') string = string.split(' ').slice(1).join(' ');
    if(string[string.length - 1] === ' ' && string.length > 2) string = string.split(' ').slice(0,(string.length - 2)).join(' ');
    return string.split(' ').filter( word => word !== '').join(' ');
}

//|==> Attempt 1, Part 2.
// const decodeBits = (bits) => {
//     const objectBits = {
//         '111111': '-',
//         '11':'.',
//         '1':'.',
//         '111':'-'
//     }
//     let morseCodeStr = '';
//     //14 zeros means 'three spaces' and 4 zeros '1 space'
//     const arrOfWords = bits.split('00000000000000').map( arr => arr.split('0000'));
//     let arrOfChars = [];
//     for( let i = 0; i < arrOfWords.length; i++){
//         arrOfChars = arrOfChars.concat(arrOfWords[i]);
//         if(i < arrOfWords.length - 1) arrOfChars.push('   ');
//     }
//     console.log(arrOfChars)
//     arrOfChars.forEach(letter => {
//         letter.split('00').forEach( code => {
//             if(code === '   ') morseCodeStr += code;
//             else if(!objectBits[code]) morseCodeStr += ' ';
//             else morseCodeStr += objectBits[code];
//         })
//     })
//     return morseCodeStr;
// }

//|==> Part 2. taked form code wars solutions.
const decodeBits = (bit) => {
    //Trim zeros
    let bits = bit.replace(/(^0+|0+$)/g, '')
    console.log(bit)
    // Find transmission rate
    let rate = Math.min.apply(null, bits.match(/0+|1+/g).map((b) => { return b.length }))
    console.log(bits)
    // Convert to morse code
    bits = bits
        .replace(new RegExp('(?:111){' + rate + '}(?:0{' + rate + '}|$)', 'g'), '-')
        .replace(new RegExp('1{' + rate + '}(?:0{' + rate + '}|$)', 'g'), '.')
        .replace(new RegExp('(?:000000){' + rate + '}', 'g'), '   ')
        .replace(new RegExp('(?:00){' + rate + '}', 'g'), ' ')
    
    return bits
}
/*
RegExr was created by gskinner.com, and is proudly hosted by Media Temple.

Edit the Expression & Text to see matches. Roll over matches or the expression for details. PCRE & JavaScript flavors of RegEx are supported. Validate your expression with Tests mode.

The side bar includes a Cheatsheet, full Reference, and Help. You can also Save & Share with the Community, and view patterns you create or favorite in My Patterns.

Explore results with the Tools below. Replace & List output custom results. Details lists capture groups. Explain describes your expression in plain English.

*/

console.log(decodeMorse(decodeBits('11111111111111100000000000000011111000001111100000111110000011111000000000000000111110000000000000000000000000000000000011111111111111100000111111111111111000001111100000111111111111111000000000000000111110000011111000001111111111111110000000000000001111100000111110000000000000001111111111111110000011111000001111111111111110000011111000000000000000111111111111111000001111100000111111111111111000000000000000000000000000000000001111111111111110000011111000001111100000111110000000000000001111100000111111111111111000001111100000000000000011111111111111100000111111111111111000001111111111111110000000000000001111100000111111111111111000001111111111111110000000000000001111111111111110000011111000000000000000000000000000000000001111100000111110000011111111111111100000111110000000000000001111111111111110000011111111111111100000111111111111111000000000000000111111111111111000001111100000111110000011111111111111100000000000000000000000000000000000111110000011111111111111100000111111111111111000001111111111111110000000000000001111100000111110000011111111111111100000000000000011111111111111100000111111111111111000000000000000111110000011111111111111100000111111111111111000001111100000000000000011111000001111100000111110000000000000000000000000000000000011111111111111100000111111111111111000001111111111111110000000000000001111100000111110000011111000001111111111111110000000000000001111100000000000000011111000001111111111111110000011111000000000000000000000000000000000001111111111111110000000000000001111100000111110000011111000001111100000000000000011111000000000000000000000000000000000001111100000111111111111111000001111100000111110000000000000001111100000111111111111111000000000000000111111111111111000001111111111111110000011111000001111100000000000000011111111111111100000111110000011111111111111100000111111111111111000000000000000000000000000000000001111111111111110000011111000001111100000000000000011111111111111100000111111111111111000001111111111111110000000000000001111111111111110000011111111111111100000111110000000000000001111100000111111111111111000001111100000111111111111111000001111100000111111111111111'))); //···· · −·−−   ·−−− ··− −·· ·

