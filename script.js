// //========== Exercise #1 ===========//
// /*
// Write a function that parses through the below object and displays all of their
// favorite food dishes as shown:
// */

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

console.log(person3.pizza)
console.log(person3.tacos)
console.log(person3.burgers)
console.log(person3.ice_cream)
console.log(person3.shakes[0].oberwise)
console.log(person3.shakes[0].dunkin)
console.log(person3.shakes[0].culvers)
console.log(person3.shakes[0].mcDonalds)
console.log(person3.shakes[0].cupids_candies)


// //======= Exercise #2=========//
// /*
// Write an Javascript Class for a Person that has a name and age, has a
// printInfo method, and also has a method that 
// increments the persons age by 1 each time the method is called.
// Create two people using the 'new' keyword, and print 
// both of their infos and increment one persons
// age by 3 years. Use an arrow function for both methods.
// */

// // Create our Person Class

// // Use an arrow to create the printInfo method

// // Create another arrow function for the addAge method that takes a single parameter
// // Adding to the age 

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  printInfo = () => {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }

  addAge = (years) => {
    this.age += years;
  }
}

const person1 = new Person("Sean", 29);
const person2 = new Person("Borris", 40);

person1.printInfo();
person2.printInfo();

person1.addAge(3);

person1.printInfo();
person2.printInfo();



// // ============= Exercise #3 ============//
// /*
//     Using the Ergast API, fetch to 'http://ergast.com/api/f1/2008/5/driverStandings.json'
//     handle the promise with callbacks (.then(), .catch()) or async/await, and log the data.
// */

async function fetchData() {
    try {
      const response = await fetch('http://ergast.com/api/f1/2008/5/driverStandings.json');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log('Error:', error);
    }
  }
  
  fetchData();
  
// Codewars problem 1: https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/javascript

class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args);
    }
  }

// Codewars problem 2: https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/javascript

function basicOp(operation, value1, value2) {
    switch (operation) {
      case '+':
        return value1 + value2;
      case '-':
        return value1 - value2;
      case '*':
        return value1 * value2;
      case '/':
        return value1 / value2;
      default:
        throw new Error('Invalid operation');
    }
  }


