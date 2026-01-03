console.log("before");

const id = 1;
console.log("id: ", id);

const fn1 = () => {
  console.log("Get user data of id from db");
  return { id: id, name: "John Doe" };
};

const timer1 = setTimeout(fn1, 2000);

console.log("after");
