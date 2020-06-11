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
