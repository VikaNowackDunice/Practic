// Есть список эндпойнтов. Нужно сделать запросы последовательно
// на каждый эндпойнт, передавая в каждом последующем запросе
// результат ответа предыдущего запроса. Какими способами можно 
// это сделать в JS?
const endPoints = [
  'https://jsonplaceholder.typicode.com/users?name=Leanne%20Graham',
  'https://jsonplaceholder.typicode.com/todos?user=*V2',
  'https://jsonplaceholder.typicode.com/todos/*V3'
   ]

   // *V2 - тут id пользователя полученного в прошлом запросе.
   // *V3 - тут id последней таски, полученной во втором запросе

 function fetchRequest(endpoins){
  let result;
  let promise = Promise.resolve();
  endpoins.forEach((endpoint, index) =>{
    promise=promise
    .then(() => {
      if(index === 1 && result){
        endpoint=endpoint.replace('*V2', result[0].id)
      }
      if(index === 2 && result){
        endpoint=endpoint.replace('*V3', result[0].id)
      }
      return fetch(endpoint, {
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(result)
      })
    })
    .then(response => {
      if(!response.ok){
        throw new Error('error')
      }
      return response.json()
    })
    .then(data => {
      result=data;
      return result;
    })
    .catch(error=>{
      console.error('error', error)
    })
  })
  return promise
}