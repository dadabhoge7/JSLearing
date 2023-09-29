console.log(`===STEP 01===`);
var Square=function(value){
    result = value * value
    console.log(`Square of ${value} :- ${result}`);
}
Square(5);Square(6);Square(25);
Square(100);
Square(67);Square(89);Square(59);

console.log(`===STEP 02===`);
console.log(`Type of FunctionExpression : ${typeof squre}`);

console.log(`===STEP 03===`);
var areaOfRectangle = function(length, width){
    console.log(`Area Of Rectangle is Lenght * width :- ${length*width}`);
}
areaOfRectangle(499, 917);

console.log(`===STEP 04===`);
var swapValue = function(a,b){
console.log(`Value before swap :- ${a} , ${b}`);
var c=a;
a=b;
b=c;
console.log(`Value after swap :- ${a} , ${b}`);

}
swapValue("Mahi", "Raina");
swapValue(55, 77);

console.log(`===STEP 05===`);

var stringValue = function(){

    var str = "JS the most popular Language of internet";
    console.log(`A. MyString :- ${str}`);
    console.log(`B. Total Length of MyString : ${str.length} `);
    console.log(`C. MyString Character of index 6 : ${str.charAt(6)}`);
    console.log(`D. MyString Character of index 11 : ${str.charAt(11)}`);
    console.log(`E. Last Charat of String : ${str.charAt(str.length-1)}`);
    console.log(`F. First character of String : ${str.charAt(0)}`);
    console.log(`G. Third last character of string : ${str.charAt(str.length-3)}`);
    console.log(`H. Total number of word : ${str.split(" ").length}`);

}
stringValue();



