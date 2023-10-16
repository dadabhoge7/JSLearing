// 3! = 1*2*3= 6
// 4! = 4*3*2*1=24
// 5! = 1*2*3*4*5 = 120

function factorial(num) {
    let factNum = 1;
    for (let index = num; index >= 1; index--) {
        factNum = factNum * index ;
    }
    console.log(`Factorial of ${num} is  ${factNum}`);
}
factorial(5);
factorial(10);
factorial(3);
factorial(7);
factorial(1);
