// 7

// написать функцию суммирования, которая работает в двух режимах
// sum(1,2) -> 3
// sum(1)(2) -> 3

function curry(func){// Не поняла функцию каррирования
  return function curried(...args){
    if(args.length >= func.length){
      return func.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2))
      }
    }
  }
}
function sum(a, b){
  return a+b
}
let result = curry(sum);
console.log(result(1, 4))