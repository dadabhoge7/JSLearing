let global = 100;
function outer() {
  let outerVariable = 200;
  let inner = function () {
    let innerVariable = 300;
    console.log(global,outerVariable, innerVariable);
  }
  return inner;
}

// outer()();  
//or
let result = outer();
result();

