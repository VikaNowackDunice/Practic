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
    }, delay)
  }
}
throttle(console.log('hello'), 1000)
// каждый раз в какой то интервал отрабатывается какая то функция, 
// он разрезает вызовы
