'use strict';

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var BasePerson = function BasePerson() {};

var Person = /*#__PURE__*/function (_BasePerson) {
  _inheritsLoose(Person, _BasePerson);

  function Person() {
    return _BasePerson.call(this) || this;
  }

  return Person;
}(BasePerson);
