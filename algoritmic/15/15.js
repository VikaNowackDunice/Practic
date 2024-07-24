// 15

// Напишите свой полифил для [].map()

Array.prototype.myMap= function (callback, thisArg){
  if(this === null)
    throw TypeError('TypeError')

  if(typeof callback !== 'function')
    throw TypeError('TypeError')

  const newArray = [];

  for(let i=0; i<this.length; i++){
    newArray[i] = callback.call(thisArg, this[i], i, this)
  }
  return newArray;
}

const arr = [1, 2, 3];
let result = arr.myMap(function(item){
  return item * 2;
});
console.log(result);