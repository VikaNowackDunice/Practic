// 8

// Написать метод массивов reverse через рекурсию

const arrayReverse = [1, 2, 3, 4, 5];

function reverseFunc(arr){
   if(!Array.isArray(arr)){
   return 'Это не массив';
   }
   return arr.slice().reverse()// Используем slice() для копии, чтобы не изменить оригинал
}
console.log(reverseFunc(arrayReverse))