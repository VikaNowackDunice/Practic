// 3

// Написать функцию которая будет принимать строку и возвращать объект 

function convertToObject(str){
 return str.split('').reduceRight((acc, char) => ({ [char]: acc }), {});
}
const res = convertToObject('abc');
console.log(res);
