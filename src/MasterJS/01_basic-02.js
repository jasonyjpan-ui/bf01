//spread operator

const numAry1 = [15, 4, 9, 16, 25];
const numAry2 = [3, 7, 13, 22, 39];

const myAry12 = [...numAry1, ...numAry2];
console.log(myAry12);

const obj1 = {
  name: "John",
  age: 30,
};
const obj2 = {
  city: "New York",
  country: "USA",
};

const obj12 = { ...obj1, ...obj2 };
console.log(obj12);

let obj3 = obj2;
console.log(obj3);

obj2.country = "Canada";
console.log(obj2);
console.log(obj3);

let obj4 = { ...obj2 };
console.log(obj2);
console.log(obj4);

// destructuring assignment

const [a, b, ...restAry] = myAry12;
console.log(a);
console.log(b);
console.log(restAry);
console.log(restAry);

// for in loop
for (const x in obj1) {
  console.log(`${x} : ${obj1[x]}`);
}

//for in loop
for (const i in obj12) {
  console.log(`${i} : ${obj1[i]}`);
}

for (const x in myAry12) {
  console.log(`index ${x} : ${myAry12[x]}`);
}
