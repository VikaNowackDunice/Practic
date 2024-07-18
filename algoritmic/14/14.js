// 14

// Есть несколько слов, определить состоят ли они из одних 
// и тех же букв
// например 
// matchCharacters('кот', 'ток', 'окт') --> true
// matchCharacters('кот', 'ком') --> false
// matchCharacters('аларм', 'малар', 'армал', 'рамал') --> true

function matchCharacters(...args){
  if(args.length <2) return true;
  const unicqueLetters = str => [...new Set(str.split(''))];
  const firstArgsLetters = unicqueLetters(args[0])
for (let i=0; i<=args.length; i++){
  const currentArgs = unicqueLetters(args[i])
  for(const letter of firstArgsLetters){
    if(!currentArgs.includes(letter)){
      return false
    }
  }
}
return true
}
console.log(matchCharacters('кот', 'ток', 'окт')); // true
console.log(matchCharacters('кот', 'ком')); // false
console.log(matchCharacters('аларм', 'малар', 'армал', 'рамал')); // true
