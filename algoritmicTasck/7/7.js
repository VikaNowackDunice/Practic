// 7

// написать функцию суммирования, которая работает в двух режимах
// sum(1,2) -> 3
// sum(1)(2) -> 3

function sum(...initialValues) {
  let totalSum = initialValues.reduce((acc, num) => acc + num, 0);

  function addNextValue(...nextValues) {
    if (nextValues.length === 0) {
      return totalSum;
    }
    totalSum += nextValues.reduce((acc, num) => acc + num, 0);
    return addNextValue; 
  }

  addNextValue.valueOf = function () {
    return totalSum;
  };

  return addNextValue;
}

const result = +sum(1, 3);
const result1 = +sum(1) (3)

console.log(result); 
console.log(result1);
