// 4

// Напишите функцию которая сортирует массив по датам

const arr = [
  { date: '10.01.2016' },
  { date: '11.01.2017' },
  { date: '05.11.2016' },
  { date: '21.12.2002' }
];

arr.sort((a, b) => new Date(a.date) -new Date(b.date)) ;
 console.log(arr);
 