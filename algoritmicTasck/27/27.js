// 27 
// напишите свой Promise.allSettled
function allSetled(promises){
  return new Promise((resolve) => {
    let settledPromises = [];
    let count = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
      .then((value) => {
        settledPromises[index] = {status: 'fulfilled', value: value};
      })
      .catch((reason) => {
        settledPromises[index] = {status: 'rejected', reason: reason};
      })
      .finally(()=>{
        count++;
        if(count === promises.length){
          resolve(settledPromises);
        }
      });
    });
  });
}


  // 27 
 // напишите свой Promise.all
 
 function all(){
  return new Promise((resolve, reject)=>{
    let allPromise = [];
    let count = 0;
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
      .then((value) => {
        allPromise[index] = value;
        count++;
        if(count === promises.length){
          resolve(allPromise);
        }
      })
      .catch(error => {
        reject(error);
      });
    })
  })
 }

 const promises = [
  Promise.resolve(1),
  Promise.reject('error'),
  Promise.resolve(3)
  ];
allSetled(promises).then((results) => console.log(results));
all(promises).then((results)=> console.log(results)).catch(error => console.error(error));