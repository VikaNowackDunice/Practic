// 13

// Дана функция, она принимает в качестве 
// аргументов строки '-', '1', 'b', '1c', реализуйте ее так,
// чтобы она вернула строку '1-b-1c'

function argsFunc(str, ...args){
return args.join(str)
}
console.log(argsFunc('-', '1', 'b', '1c'))

//OR

function argsFuncTwo(str, ...args){
  let result = '';
  for(let i = 0; i<args.length; i++){
    result += args[i]
    if(i < args.length -1){
      result += str;
    }
  }
    return result;
}
  console.log(argsFuncTwo('-', '1', 'b', '1c'))