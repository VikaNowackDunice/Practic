// 7

// написать функцию суммирования, которая работает в двух режимах
// sum(1,2) -> 3
// sum(1)(2) -> 3

function sum(...initialValue) {
  let totalSum = initialValue.reduce((acc, num) => acc + num, 0);

  function addNextValue(...nextValues) {
    if (nextValues.length > 0) {
      totalSum += nextValues.reduce((acc, num) => acc + num, 0);
      return addNextValue;
    } else {
      return totalSum;
    }
  }

  addNextValue.toString = function () {
    return totalSum;
  };

  return addNextValue;
}

console.log(sum(1, 4)()); // 5
console.log(sum(1)(4)()); // 5
console.log(sum(1)(4)(5)(6)()); // 16
console.log(sum(1, 2, 3)(4, 5)()); // 15