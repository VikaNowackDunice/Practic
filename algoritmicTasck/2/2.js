// 2

// Представьте что вам нужно записать в переменную arr  массив из 50 
// элементов, со значениями от 1 до 50, соответственно, как вы это сделаете?
const arr=[];
 for(let i=1; i<=50; i++){
   arr.push(i)
   }
 console.log(arr);
 

 const arrTwo = Array.from({length:50}, (_,i)=> ++i);
 console.log(arrTwo);

 arr3=Array(50).fill().map((_, i)=> ++i);
 console.log(arr3);