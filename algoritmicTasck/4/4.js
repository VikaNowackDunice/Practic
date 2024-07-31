// 4

// Напишите функцию которая сортирует массив по датам

const arr = [
  { date: '10.01.2016' },
  { date: '11.01.2017' },
  { date: '05.11.2016' },
  { date: '21.12.2002' }
];

arr.sort((a, b) => {
  const [dayA, monthA, yearA] = a.date.split('.').map(Number);
  const [dayB, monthB, yearB] = b.date.split('.').map(Number);
  const dateA = new Date(yearA, monthA - 1, dayA);
  const dateB = new Date(yearB, monthB - 1, dayB);
  return dateA - dateB;
});
 console.log(arr);
 