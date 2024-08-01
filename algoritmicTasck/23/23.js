// 23 
// найти и исправить как можно больше ошибок, функция должна создавать полную копию объекта

// function createCopy (data){
//   //Ошибка, это неглубокое клонирование, meta и setting ссылаются на те же свойство что и в data 
//   const copy = {
//     meta: data.meta, 
//     age : data.age,
//     setting : data. 
//   }
//   const title = `new copy ${data.setting.title}`
//   copy.setting.title = title
//   return copy;
// }

function createCopy(data){
  const copy = JSON.parse(JSON.stringify(data));//глубокое клонирование
  const title = `new copy ${data.setting.title}`;//создание заголовка
  copy.setting.title = title;//применение нового заголовка к копии
  return copy;
}