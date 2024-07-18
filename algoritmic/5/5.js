// 5

// Задача: Реализовать функцию add у числа, 
// которая принимает значение и добавляет его к числу

// например: console.log(1..add(30)) // выведет 31

let a;
 function add(num){
     a = +prompt();
   if(typeof a == 'number'){
     return num=a+num;
   } 
   return num;
 }
 
 console.log(add(30))
 
 function addNum(){
   if(!Number.prototype.add){
     Number.prototype.add = function(value){
       return this + value
     }
   }
 }
 addNum();
 console.log((1).add(30))