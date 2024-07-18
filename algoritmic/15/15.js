// 15

// Напишите свой полифил для [].map()

Array.prototype.myForEach= function (callback, arg){
  if(this === null || this === window)
    throw TypeError('TypeError')

  if(typeof call !== 'function')
    throw TypeError('TypeError')

  for(let i=0; i<this.length; i++){
    newArr[i] = call.call(arg, this[i], [i], this)
  }
  return newArr;
}