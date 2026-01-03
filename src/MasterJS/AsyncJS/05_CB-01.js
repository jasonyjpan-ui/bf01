// Promise
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve({ id: 1, name: "David" });
    reject(new Error("Something went wrong"));
  }, 2000);
});

p.then((user) => {
  console.log(user);
}).catch((err) => {
  console.error(err);
});
