



const str = "How are you mate";
const arrayWord = str.split(' ');
let finalWord = '';
for (const word of arrayWord) {
    let firstChar = word.charAt(0).toUpperCase();
    let lastChar = word.charAt(word.length-1).toUpperCase();
    finalWord = finalWord + word;
    console.log(word,firstChar,lastChar);
}
console.log(finalWord);
