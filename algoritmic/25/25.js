// 25 
//  избавиться от дубликатов букв, которые стоят друг за другом.

// // Пример использования:
// const result = uniqueNonConsecutiveElements("hello");
// console.log(result); // Output: ['h', 'e', 'l', 'o']

function uniqueNonConsecutiveElements(str){
  if(str.length === 0) return [];
  let result = [str[0]];
    for(i=1; i<str.length; i++){// неачинаем с 1 так как индекс 0 уже добавлен в result
      if(str[i] !== str[i-1]){
        result.push(str[i])
      }
    }
    return result;
  
  }
  const resultat = uniqueNonConsecutiveElements("hello");
  console.log(resultat); // Output: ['h', 'e', 'l', 'o']
  