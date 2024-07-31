// 26 
// написать функцию, которая будет принимать массив, удалять 
// дубликаты и сортировать его

function transformArray(array){
  if(Array.isArray(array)){
    array.sort((a, b)=> a-b);
    let result = [array[0]];

    for(i =1; i<array.length; i++){
      if(array[i] !== array[i-1]){
        result.push(array[i]);
      }
    }
    return result;
  }
}
const res =[3, 4, 1, 5 , 2, 2, 1];
console.log(transformArray(res));//[ 1, 2, 3, 4, 5 ]

//ИЛИ
function transformArr(array){
  if(Array.isArray(array)){
    const result = [...new Set(array)].sort((a, b)=> a-b);
    return result;
  } else {
    throw new Error('err');
  }
}
const resi = [3, 4, 1, 5, 2, 2, 1];
console.log(transformArr(resi)); 
