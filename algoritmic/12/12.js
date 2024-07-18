// 12

// Написать функцию которая будет строить “шахматную доску”
// Пример работы:

function createBoard(size, cellWhite, cellBlack){
  let arr= []
          for(let i=0; i<=size; i++){
              const rowArr=[];
              
      for (let j=1; j<=size;j++){
         if((i+j)%2===0){
             rowArr.push(cellWhite);
         } else{
             rowArr.push(cellBlack);
         }
      }
      arr.push(rowArr)
  }
  return arr;
}

function f(arr){
  for(const row of arr){
      console.log(row.join(' '));
  }
}
const chessBoard = createBoard(9,  '_', '#');
f(chessBoard);

// _#_#_#_#_#
// #_#_#_#_#_
// _#_#_#_#_#
// #_#_#_#_#_
// _#_#_#_#_#