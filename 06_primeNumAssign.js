


const array = [11,3,6,10,43,29,50];
console.log(array);
for (let index = 0; index < array.length; index++) {
    
    const element = array[index];
    
    function isPrimeNum(element){
        for (let index = 2; index < element; index++) {
            if (element%index==0) {
                return false
            }
        }
        return true;
    }
    const result = isPrimeNum(element);
    console.log(`"${element}" Is Prime Number : ${result}`);

}
