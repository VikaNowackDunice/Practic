// 7

// написать функцию суммирования, которая работает в двух режимах
// sum(1,2) -> 3
// sum(1)(2) -> 3


function sum(...args){// Не поняла функцию каррирования
  let currentSum = args.reduce((acc, num) => acc + num, 0);
  function curried(...nextArgs){
    if(nextArgs.length === 0){
      return currentSum;
    }
    currentSum += nextArgs.reduce((acc, num)=> acc + num, 0);
    return curried;
  }
  curried.toString = function(){
    return currentSum;
  };
  return curried;
}
console.log(sum(1, 4).toString())
console.log(sum(1)(4).toString())
console.log(sum(1)(4)(5)(6).toString())