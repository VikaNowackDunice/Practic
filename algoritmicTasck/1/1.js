// Есть список эндпойнтов. Нужно сделать запросы последовательно
// на каждый эндпойнт, передавая в каждом последующем запросе
// результат ответа предыдущего запроса. Какими способами можно 
// это сделать в JS?

   // *V2 - тут id пользователя полученного в прошлом запросе.
   // *V3 - тут id последней таски, полученной во втором запросе
   async function fetchData(url){
    const response = await fetch(url);
    if(response.status !== 200){
      throw new Error('err')
    }
    return response.json();
   }

 async function fetchRequest(){
  const endPoints = [
    'https://jsonplaceholder.typicode.com/users?name=Leanne%20Graham',
    'https://jsonplaceholder.typicode.com/todos?user=*V2',
    'https://jsonplaceholder.typicode.com/todos/*V3'
    ];

     try{
      const result = await fetchData(endPoints[0]);
      const userId = result[0].id;

      const todoUrl = endPoints[1].replace('*V2', userId)
      const todos = await fetchData(todoUrl)
      const lastTaskId = todos[todos.length-1].id;

      const lastTasckUrl = endPoints[2].replace('*V3', lastTaskId)
      const lastTasckUrlDetails = await fetchData(lastTasckUrl)

      console.log('User:', result[0]);
      console.log('UserId:', userId);
      console.log('Todos:', lastTaskId);
     } catch( error){
      console.error('error', error)
     }
  }
  fetchRequest();