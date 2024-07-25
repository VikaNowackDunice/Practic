// 20

// Создать функцию inverse, которая заменит 1 на 0 и наоборот 
// во всем дереве.

const objInv= {
  a: {
    a: 1,
    b: {
      a: 0,
      b: 1
    },
    c: 0
  },
  b: 0,
  c: 1
};

function inverse(obj){
for(let key in obj){
  if(obj.hasOwnProperty(key)){
    if(obj[key] === 1){
       obj[key] = 0;
    } else if(obj[key] === 0){
       obj[key]=1;
    } else if(typeof obj[key] === 'object' && obj[key] !== null){
       inverse(obj[key])
    }
  }
}
}
inverse(objInv)
console.log(objInv);
