// 5

// Задача: Реализовать функцию add у числа, 
// которая принимает значение и добавляет его к числу

// например: console.log(1..add(30)) // выведет 31
 function addNum(){
     Number.prototype.add = function(value){
       return this + value // Метод возвращает сумму текущего числа и value
   }
 }
 addNum();// Добавляем метод
 console.log((1).add(30))// Используем метод add