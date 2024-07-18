// 3

// Написать функцию которая будет принимать строку и возвращать объект 

function convertToObject(str){
  str=str.split('')
 return Object.fromEntries(str.map((char,i) => [i, char]))// map преобразует массив 
 //символов в массив пар ключ значение 
}
let str='ghbfdgdfh'
let res=convertToObject(str)
console.log(res)
