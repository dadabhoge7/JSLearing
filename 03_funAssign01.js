console.log("-*-*-*-*-*- Step_01-*-*-*-*-*");
function swap() {
    console.log("01_First function no argument ang no return type ");
    console.log("02_Second function no argument and no return type");
}
swap();

console.log("-*-*-*-*-*- Step_02-*-*-*-*-*");
function personalDetails(firstName, lastName, collageName) {
    console.log("My Name is :",firstName,lastName);
    console.log("My collage Name :",collageName);
}
personalDetails("Dada", "Bhoge", "S B Patil Collage of Engineering");

console.log("-*-*-*-*-*- Step_03-*-*-*-*-*");
function swapValues(arg01, arg02){
    console.log("Before swap :",arg01,arg02);
    temp=arg01;
    arg01=arg02;
    arg02=temp;
    console.log("After swap :",arg01,arg02);
}
swapValues(4,5);
swapValues("Virat", "Anushka")
swapValues(1000,2000);

console.log("-*-*-*-*-*- Step_04-*-*-*-*-*");
function addTreeValues(value1, value2, value3){
    finalValue=value1+value2+value3;
    console.log("Addition of Three values is :",finalValue);
    console.log("Hello","Good","Morning");

}
addTreeValues(10.23, 600, 40);


