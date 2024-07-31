// 9

// Необходимо реализовать функцию getNumberCharacters, которая
// считает количество символов в строке и выводит
//  *количество символов**символ* 

// Пример aaabbcaff → выведет 3a2b1c1a2f

function getNumberCharacters(str){
  if(str.length === 0){
      return 'Нет символов';
  }
  let count = 1;
  let result = '';
  let currentChar = str[0];
  for(i=1; i < str.length; i++){
      if(str[i] === currentChar){
       count++;   
      } else {
       result += count + currentChar;
         currentChar = str[i];
          count = 1;
      }
  }
  result += count + currentChar;
  return result;
}
const getNumber = getNumberCharacters("aaabbcaff");
console.log(getNumber);//3a2b1c1a2f
