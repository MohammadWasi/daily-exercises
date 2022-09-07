function Animal (leg) {
 this.leg = leg;
  
}
Animal.prototype.walk = function() {
  console.log('animal Walked');
}
const animal = new Animal(4);
function Dog(name, noise) {
  this.name = name;
  this.noise = noise;
  Animal.call(this,4);
}
Dog.prototype = Object.create(Animal.prototype);
const dog = new  Dog('kutta','bhokta hai');

console.log(dog.leg);