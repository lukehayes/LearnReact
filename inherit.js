'use strict';

/**
 * A simple example of inheritance in 'old style' Javascript
 */

function inherit(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
}

var BasePerson = function BasePerson() {};

var Person = function (_BasePerson) {
  inherit(Person, _BasePerson);

  function Person() {
    return _BasePerson.call(this) || this;
  }

  return Person;

}(BasePerson);



// Abstract Class Definition
var AbstractClass = function() {
    if(this.constructor === AbstractClass) {
        throw new Error("Cannot instantiate an Abstract Class!");
    }
    this.type = "Abstract Class";
}

AbstractClass.prototype.getType = function() {
    return this.type;
}

var ConcreteClass = function() {
    AbstractClass.apply(this);
}

ConcreteClass.prototype = Object.create(AbstractClass.prototype, {
    'constructor' : ConcreteClass
});

var cc = new ConcreteClass();




