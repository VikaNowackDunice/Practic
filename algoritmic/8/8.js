// 8

// Написать метод массивов reverse через рекурсию

let arrayReverse = [1, 2, 3, 4, 5]
 function reverseFunc(arr){
    if(!Array.isArray(arr)){
     return 'Это не массив'
    }
    return reverseFunc(arr)
 }
 console.log(reverseFunc(arrayReverse))