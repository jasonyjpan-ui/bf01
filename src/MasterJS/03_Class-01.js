class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  show() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

  setAge(age) {
    if (age > 0) {
      this.age = age;
    } else {
      console.log("Age cannot be negative.");
    }
  }
}

const p1 = new Person("Alice", 28);
const p2 = new Person("Bob", 35);
p1.show();
p2.show();

p1.name = "Charlie";
p1.setAge(-1);
p1.show();

//object is an associative array
console.log(p1["name"]);
console.log(p1["age"]);

p1.score = 95; // dynamically add property
console.log(p1.score);

for (const key in p1) {
  console.log(`${key} : ${p1[key]}`);
}

for (const key in p2) {
  console.log(`${key} : ${p2[key]}`);
}
