
function isPrimeNum(num) {
    for (let index = 2; index < num; index++) {
        if (num%index==0) {
            return false;
        }
    }
    return true;
}

const result = isPrimeNum(7);
console.log(`Is Prime Number : ${result}`);

 