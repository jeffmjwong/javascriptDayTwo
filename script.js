// function Dog(name, location) {
//   this.name = name;
//   this.location = location;
// }
//
// Dog.prototype.speak = function() {
//   console.log(`Woof! My name is ${this.name}`);
//   console.log(`My location is ${this.location}`);
// }
//
// Dog.prototype.setLocation = function(location) {
//   this.location = location;
// }

class Dog {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  speak() {
    console.log(`Woof! My name is ${this.name}`);
    console.log(`My location is ${this.location}`);
  }

  setLocation(location) {
    this.location = location;
  }
}
