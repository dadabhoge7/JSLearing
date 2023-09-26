function stringHandsOn() {
    var str="     Hey you are doing good, keep it up      ";
    console.log(`1. Given string is : ${str}`);
    console.log(`2. Total length of string : ${str.length}`);
    var removeSpaces=str.trim();
    console.log(`3. After removing extra spaces length of string : ${removeSpaces.length}`);

    var totalNoSpacesRemove=(str.length)-(removeSpaces.length);
    console.log(`4. Total number of remove spaces : ${totalNoSpacesRemove}`);
    console.log(`5. first character is : ${removeSpaces.charAt(0)} and last character is ${removeSpaces.charAt(removeSpaces.length-1)}`);

    console.log(`6. Total number of words after trim : ${removeSpaces.split(" ").length}`);
     console.log(`7. Index of good is : ${removeSpaces.indexOf("good")}`);
     console.log(`8. Substring starting from index 22 using substring() : ${removeSpaces.substring(22)} and using slice() : ${removeSpaces.slice(22)}`);
console.log(`9.  String end with word 'up' : ${removeSpaces.endsWith("up")}`);
console.log(`9.  String start with word 'Hey' : ${removeSpaces.startsWith("Hey")}`);
    }
stringHandsOn();