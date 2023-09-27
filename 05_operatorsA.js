console.log(`============ TASK 01===============`);
function squreOfWordLenght(str1) {
    var length=str1.length;
    console.log(`The Given String is : "${str1}" and length of string : ${length} and square of length is : ${length**2}`);
}
squreOfWordLenght("JavaScript");
squreOfWordLenght("GoogleChrome");
squreOfWordLenght("Java Script");

console.log(`============ TASK 02===============`);

function divMulByWord() {
    var str2='I am Angular Developer';
    console.log(`Given String : ${str2}`);
    var length=str2.length;
    var word=str2.split(" ");
    console.log(`Total Length "${length}" divided by Total words "${word.length}" : ${length/word.length}`);
    console.log(`Total Length "${length}" multiply by Total words "${word.length}" : ${length*word.length}`);
}
divMulByWord();
