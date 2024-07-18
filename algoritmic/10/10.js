// 10

// Есть объект

// Напишите функцию которая принимает объект и название ключа, 
// и рекурсивно просчитывает все значения по ключу в объекте 

const tree = {
  value: 1,
  next: [
    {
      value: 2,
      next: null,
    },
    {
      value: 2,
      next: {
        value2: 4,
        next: null,
      },
    },
  ],
  foo: {
    bar: {
      baz: [
        { value: 9 },
        {
          value: 2,
          next: {
            value: 4,
            next: null,
          },
        },
      ],
    },
    baz: 33,
    value: 1,
  },
};

function sum(obj, key){
  let total=0
  function recursive(arr){
      if(Array.isArray(arr)){
          arr.forEach(i=>recursive(i));// используем метод 
          //forEach для обхода каждого элемента массива 
          //и вызываем recursiveSum для каждого элемента.
      }else if(typeof arr === 'object' && arr !== null){
          for( const k in arr){
              if(k === key && typeof arr[k] === 'number'){
                  total += arr[k]//Если ключ совпадает с заданным ключом key
                  // и значение является числом, добавляем это значение к total.
              }
               recursive(arr[k]);//Рекурсивно вызываем recursiveSum для значения 
               //текущего ключа, чтобы продолжить обход.
          }
      }
  }
 recursive(obj);//Вызываем recursiveSum для начального объекта obj,
 // чтобы запустить рекурсивный обход.
 return total
}
console.log(sum(tree, 'value'))// --> 21


sum(tree, 'value') // --> 21

