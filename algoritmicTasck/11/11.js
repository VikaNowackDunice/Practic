// 11

// Напишите функцию для бинарного поиска, она должна принимать
// отсортированный массив и элемент который ищем

function binarySearch(arr, item){
  arr.sort((a, b)=> a-b);
  
  let left = 0;
  let rigth = arr.length - 1;
  
  while(left <= rigth){
      const middle = Math.floor((left+rigth)/2);
      
      if(arr[middle]===item){
          return middle;
      }
      
      if(arr[middle] < item){
          left = middle + 1;
      } else {
          rigth = middle - 1;
      }
  }
  return -1;
}

const result = binarySearch([5,4,32,7,3,2,8], 32);
console.log(result);