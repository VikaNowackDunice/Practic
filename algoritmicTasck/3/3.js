// 3

// Написать функцию которая будет принимать строку и возвращать объект 

function convertToObject(str){
  str=str.split('');
 return Object.fromEntries(str.map((char,i) => [i, char]));
}
const res=convertToObject('ghbfdgdfh');
console.log(res);
