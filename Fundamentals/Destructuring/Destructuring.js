// Problem 1:
console.log(("###### Problem 1: ######"))
const cars = ['Tesla', 'Mercedes', 'Honda'];
const [randomCar] = cars;
const [, otherRandomCar] = cars;
// Predict the output
console.log(randomCar);
console.log(otherRandomCar);

// Problem 2:
console.log(("###### Problem 2: ######"))
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
};
const { name: otherName } = employee;
// Predict the output
// console.log(name); // name not defined
console.log(otherName);

// Problem 3:
console.log(("###### Problem 3: ######"))
const person = {
    name: "Phil Smith",
    age: 47,
    height: '6 feet'
};

const password = '12345';
const { password: hashedPassword } = person;
// Predict the output
console.log(password);
console.log(hashedPassword);

// Problem 4:
console.log(("###### Problem 4: ######"))
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [, first] = numbers; // 2
const [,,, second] = numbers; // 5
const [,,,,,,,, third] = numbers; // 2
// Predict the output
console.log(first == second);
console.log(first == third);
console.log(third)

// Problem 5:
console.log(("###### Problem 5: ######"))
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
};

const { key } = lastTest;
const { secondKey } = lastTest;
const [, willThisWork] = secondKey
// Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);