// 12

// Написать функцию которая будет строить “шахматную доску”
// Пример работы:

function createBoard(heith, width, cellWhite, cellBlack){
  const arr= [];
          for(let i=1; i<=heith; i++){
              const rowArr=[];
              
      for (let j=1; j<=width;j++){
         if((i+j)%2===0){
             rowArr.push(cellWhite);
         } else{
             rowArr.push(cellBlack);
         }
      }
      arr.push(rowArr);
  }
  return arr;
}

function chessBoardFunc(arr){
  for(const row of arr){
      console.log(row.join(' '));
  }
}
const chessBoard = createBoard(5, 10, '_', '#');
chessBoardFunc(chessBoard);

// _#_#_#_#_#
// #_#_#_#_#_
// _#_#_#_#_#
// #_#_#_#_#_
// _#_#_#_#_#