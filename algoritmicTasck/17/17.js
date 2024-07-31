// 17

// Напишите универсальную функцию дебаунса

function debounce(func, delay){
  let timer;
  return function(...args){
    clearTimeout(timer);
    timer = setTimeout(()=> {
      func.apply(this, args);
    }, delay);
  }
}

const debounceApplication=debounce(console.log, 1000);

setTimeout(debounceApplication, 100, 3);
setTimeout(debounceApplication, 500, 4);
setTimeout(debounceApplication, 1100, 5);