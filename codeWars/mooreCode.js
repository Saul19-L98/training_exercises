// In this kata you have to write a simple Morse code decoder. While 
// the Morse code is now mostly superseded by voice and digital data 
// communication channels, it still has its use in some applications around 
// the world.
// The Morse code encodes every character as a sequence of "dots" and 
// "dashes". For example, the letter A is coded as ·−, letter Q is coded 
// as −−·−, and digit 1 is coded as ·−−−−. The Morse code is case-insensitive, 
// traditionally capital letters are used. When the message is written in 
// Morse code, a single space is used to separate the character codes and 3 
// spaces are used to separate words. For example, the message HEY JUDE in 
// Morse code is ···· · −·−−   ·−−− ··− −·· ·.

// NOTE: Extra spaces before or after the code have no meaning and should 
// be ignored.

// In addition to letters, digits and some punctuation, there are some 
// special service codes, the most notorious of those is the international 
// distress signal SOS (that was first issued by Titanic), that is coded 
// as ···−−−···. These special codes are treated as single special characters, 
// and usually are transmitted as separate words.

// Your task is to implement a function that would take the morse code as 
// input and return a decoded human-readable string.

// For example:

// decodeMorse('.... . -.--   .--- ..- -.. .')
//should return "HEY JUDE"

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

//Solution 1.
// const decodeMorse = (morseCode) => {
//     const matrixMorseCodeChars = morseCode.split('   ').map(word => {
//         if(word[0] === ' ') return word.slice(1).split(' ');
//         if(word[word.length - 1] === ' ') return word.slice(0, word.length - 1).split(' ');
//         return word.split(' ');
//     });
//     let string = '';
//     matrixMorseCodeChars.forEach((word,index) => {
//         if(index > 0) string += ' ';
//         if(word){
//             word.forEach( code => string += morseCodes[code]);
//         }
//     });
//     return string;
// }

//Solution 2.
const decodeMorse2 = (morseCode) => {
    const arrMorseCodeChars = morseCode.split(' ');
    let string = '';
    arrMorseCodeChars.forEach((code,index) => {
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

console.log(decodeMorse2(' .... . -.--   .--- ..- -.. .')); //'HEY JUDE'
console.log(decodeMorse2('...---...')); //SOS
console.log(decodeMorse2('.... . .-.. .-.. ---   .-- --- .-. .-.. -..'))//Hello world
console.log(decodeMorse2('... .... .- .-. .   - .... .   -- . ... ... .- --. .   .- -... --- ...- .'))//Share the message above
console.log(decodeMorse2(' .   . '));//E E
console.log(decodeMorse2(' . '));//E

