// 13

// Дана функция, она принимает в качестве 
// аргументов строки '-', '1', 'b', '1c', реализуйте ее так,
// чтобы она вернула строку '1-b-1c'

function argsFunc(...args){
  if(args[0] === '-'){
      args.shift()
  }
return args.join('-')
}
console.log(argsFunc('-', '1', 'b', '1c'))

// ИЛИ

function argsFuncTwo(a, b, c, d){
  return b+a+c+a+d
}
console.log(argsFuncTwo('-', '1', 'b', '1c'))