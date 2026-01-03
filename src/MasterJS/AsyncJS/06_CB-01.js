const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async op-1 from db");
    resolve([1, 3]);
  }, 3000);
});

const p2 = new Promise((resolve, rerject) => {
  setTimeout(() => {
    console.log("Async op-2 from API");
    resolve([2, 4]);
  }, 2000);
});

// Promise.all(): 等所有的 Promise 都 resolve 之後，才進行下一步

const time1 = new Date().getTime();

Promise.all([p1, p2]).then((results) => {
  console.log("Promise.all results: ", results);
  const time2 = new Date().getTime();
  console.log(`Total time: ${time2 - time1} ms`);
});

// Promise.race(): 只要有一個 Promise resolved 之後，就會進行下一步
const time3 = new Date().getTime();
Promise.race([p1, p2]).then((result) => {
  console.log("Promise.race result: ", result);
  const time4 = new Date().getTime();
  console.log(`Total time: ${time4 - time3} ms`);
});
