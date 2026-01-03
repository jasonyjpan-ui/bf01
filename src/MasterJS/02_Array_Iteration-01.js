const numbers = [15, 4, 9, 16, 25];

//let aryStr = " ";
//for (let i = 0; i < numbers.length; i++) {
//aryStr += (i === 0 ? " " : ", ") + numbers[i];
//}
//console.log(aryStr);

let aryStr = " ";
numbers.forEach((value, index) => {
  aryStr += (index === 0 ? " " : ", ") + value;
});
console.log(aryStr);

//map()
const aryTwice = numbers.map((value) => value * 2);
console.log(aryTwice);
console.log(numbers);

//reduce() :純量: single value
const sum = numbers.reduce((total, value) => {
  return total + value;
}, 0);
console.log(sum);

const sum2 = numbers.reduce(
  (sumStr, value, index) => sumStr + (index === 0 ? "" : ", ") + value,
  " "
);

console.log(sum2);

///filter(): array => new array
const aryFiltered = numbers.filter((value) => value % 2 === 0);
console.log(aryFiltered);

//some(): array => boolean
const hasOver10 = numbers.some((value) => value > 100);
console.log(hasOver10);

//every(): array => boolean
const allOver10 = numbers.every((value) => value > 0);
console.log(allOver10);
1;

//findIndex(): array => index
const index16 = numbers.findIndex((value) => value > 16);
console.log(index16);
