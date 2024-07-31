// 23 
// найти и исправить как можно больше ошибок, функция должна создавать полную копию объекта

// function createCopy (data){
//   const copy = {
//     meta: data.meta, 
//     age : data.age,
//     setting : data.setting
//   }
//   const title = `new copy ${data.setting.title}`
//   copy.setting.title = title
//   return copy;
// }


function createCopy (data){
  function deppCopy(obj){
    if(typeof obj === 'object' && obj !== null){
      let copy = Array.isArray(obj) ? [] : {};
      for (let key in obj){
        if(obj.hasOwnProperty(key)){
          copy[key]=deppCopy(obj[key]);
        }
      }
      return copy;
    } else {
        return obj;
      }
  }
 const copy= deppCopy(data);
 if(  copy.setting && copy.setting.title ){
  copy.setting.title = `new copy ${copy.setting.title}`;
}
return copy;
}
console.log(createCopy({d:2,f:4, j: {k:4, t:'dfgh'}}));