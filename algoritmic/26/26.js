// 26 
// написать функцию, которая будет принимать массив, удалять 
// дубликаты и сортировать его

function transformArray(array){
  if(Array.isArray(array)){
    array.sort((a, b)=> a-b)
    let result = [array[0]];

    for(i =1; i<array.length; i++){
      if(array[i] !== array[i-1]){
        result.push(array[i])
      }
    }
    return result
  }
}
let resr =[3, 4, 1, 5 , 2, 2, 1]
console.log(transformArray(res))//[ 1, 2, 3, 4, 5 ]

//ИЛИ
function transformArr(array){
  if(Array.isArray(array)){
    array.sort((a, b)=> a-b)

    let result = array
    .map((index, item)=> (index ===0 || item !== array[index-1] ? item : null))
    .filter(item=> item !==null);
    return result;
  } else {
    throw new Error('err')
  }
}
let resi = [3, 4, 1, 5, 2, 2, 1];
console.log(transformArr(resi)); 
