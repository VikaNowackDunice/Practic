// 16

// Анаграммы – это слова, у которых те же буквы в том же количестве,
// но они располагаются в другом порядке.

// Например:
// nap - pan
// ear - are - era
// cheaters - hectares - teachers

// Напишите функцию aclean(arr), которая возвращает массив слов,
// очищенный от анаграмм.

// Например
const arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// Из каждой группы анаграмм должно остаться только одно слово,
// не важно какое.

let array = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
 function aclean(arr){
   const map = new Map();
   for(i=0; i < arr.length; i++){
     const sorted = arr[i].toLowerCase().split('').sort().join('');
     map.set(sorted, arr[i]);
   }
   return Array.from(map.values());
 }
 
 console.log( aclean(array) );
 