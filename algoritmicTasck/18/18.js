// 18

// Напишите функцию для тротлинга

function throttle(callback,delay){
  let isWaiting = false;
  return function(...args){
    if(isWaiting){
      return;
    }
    callback.apply(this, args);
    isWaiting = true;

    setTimeout(()=> {
      isWaiting = false;
    }, delay);
  }
}
const log = throttle(console.log, 1000);
log('hello');
log('hello');
log('hello');
