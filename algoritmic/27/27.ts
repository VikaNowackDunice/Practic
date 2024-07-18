// 27 
// напишите свой Promise.allSettled, на TS 

type SettledResult<T> = 
 | { status: 'fulfilled'; value: T } 
 | { status: 'rejected'; reason: any};
 //это тип, который может быть либо объектом с состоянием fulfilled и 
 //значением value типа T, 
 //либо объектом с состоянием rejected и причиной reason любого типа.
function allSetledPromise<T>(promise: Promise<T>[]): Promise<SettledResult<T>[]>{
  return new Promise((resolve)=> {
    const results: SettledResult<T>[]=[];
    let completedPromises=0;//счетчик завершенных промисов.

    promises.forEach((promise, index)=> {
      promise 
      .then((value) => {
        results[index]={status: 'fulfilled', value};
      })
      .catch((reason)=>{
        results[index]={ status: 'rejected', reason };
      })
      .finally(()=> {
        completedPromises +=1;
        if (completedPromises === promises.length) {
          resolve(results)
        }
      })    
    })
  })
}

 let promise1 = Promise.resolve(1)
 let promise2 = new Promise((resolve, rejected) => setTimeout(reject, 100, 'err'))
 
 const promises =[promise1, promise2];
 
 allSettled(promises).then((result)=> {
   result.forEach(result=>{
     if(result.status === 'filfilled'){
       console.log('Fulfilled')
     } else {
       console.log('Rejected')
     }
   });
 });



  // 27 
 // напишите свой Promise.all на TS 
 
function allPromise<T>(promise: Promise<T>[]): Promise<T[]>{
  return new Promise((resolve, reject) => {
    const results: T[]=[];
    let completedPromises = 0;

    promises.forEach((promise, index)=>{
      promise
      .then((value)=>{
        results[index]= value;
        completedPromises +=1;
        if(completedPromises === promises.length){
          resolve(results);
        }
      })
      .catch((reason)=> {
        reject(reason)
      })
    })
  })
}

const promise3= Promise.resolve(7);
const promise4= Promise.resolve(7);
const promise5= Promise.resolve(7);

const promisesAll = [promise3, promise4, promise5]

allPromise(promisesAll).then((results)=>{
  console.log(results);
})
.catch((error)=>{
  console.error(error)
})