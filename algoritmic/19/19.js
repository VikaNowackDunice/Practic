// 19

// Реализовать алгоритм сжатия строки "AAADDDGFFFAAR" → "3A3DG3F2AR"

function funcAlgoritmRest(str){ if(str.length === 0) {
  return 'no symbol'
}
let count = 1;
let result = '';
let currentChar = str[0];
for(let i=1; i<str.length; i++){
  if(str[i] === str[i + 1]){
      count++;
  } else{
      result  += count + currentChar;
      currentChar = str[i];
      count =1;
  }
}
result += count + currentChar
return result;
}
console.log(func("AAADDDGFFFAAR"))