// 8

// Написать метод массивов reverse через рекурсию

const arrayReverse = [1, 2, 3, 4, 5];

function reverseFunc(arr){
   if(!Array.isArray(arr)){
   return 'Это не массив';
   }
   if(arr.length <= 1) return arr;

   return reverseFunc(arr.slice(1)).concat(arr[0]);
}
console.log(reverseFunc(arrayReverse));