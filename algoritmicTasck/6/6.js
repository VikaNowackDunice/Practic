// 6

// Реализовать функцию getMatchedNumbers. На вход поступают 2 
// отсортированных массива чисел
// Необходимо вернуть объект с двумя массивам:
// matched - массив цифр, в котором есть одинаковые элементы из 
// двух входных массивов
// Учесть!!! Цифры не должны дублироваться.
// different - массив цифр, которые находятся в одном из массивов, 
// но в другом его не было

// пример: 
// на вход [1,3,3,5]; [3,5,5,6]
// на выходе {matched: [3,5], different: [1,6]}

const first = [1,3,3,5];
const second = [3,5,5,6];

const getMatchedNumbers = (firstArr,secondArr)=>{
  const res = {
    matched: [],//массив цифр которые одингаковые в двух входных массивов, цифры не повторяются в самом массиве
    different: [],//массив из цифр которые не одинаковы в двух массивах
  }
  const set1 = new Set(firstArr)
  const set2 = new Set(secondArr)

  for(let num of set1){
    if(set2.has(num)){
      res.matched.push(num)
    }
  }
  
  for (let num of set1) {
    if (!set2.has(num)) {
      res.different.push(num);
    }
  }

  for(let num of set2){
      if(!set1.has(num)){
      res.different.push(num)
    }
  }
  return res;
}

  let res1 = getMatchedNumbers(first,second)
  console.log(res1)