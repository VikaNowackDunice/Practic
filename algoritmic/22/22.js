// 22
// напишите функцию которая при каждом вызове будет увеличивать внутренний 
// счетчик на 1 
// ! внешних переменных создать нельзя
// console.log(inc(), inc(), inc()) // 1, 2, 3

function inc(){
  let a=0;
  return function(){
    return a++
  }
}
let d=inc()
console.log(i())
