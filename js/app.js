var events = require('events');
var util = require('util');

var Person = function(name){ //Create Person object and set name
  this.name = name;
}

util.inherits(Person, events.EventEmitter); //Allows Person to inherit events.emitter. Peram1 is the object that is going to inherit, peram2 is the thing we want it to inherit. In this case, anything that uses the Person ctor will inherit the EventEmitter method from the events module. An EventEmitter is a string with a corresponding callback func, which allows you to create custom events.


var James = new Person('James'); //create Person
var Mary = new Person('Mary');
var Steve = new Person('Steve');
var people = [James, Mary, Steve]; //add Person to people array

people.forEach(function(person){ //foreach person in people
  person.on('speak', function(msg){ //create and attatch custom event listener 'speak' to person (using EventEmitter). Peram1 = listener name. Peram2 = what happens
    console.log(person.name + ' said: ' + msg);
  })
})

James.emit('speak', 'Hello World!'); //speak event listener called, msg is passed to 'speak' callback function(msg)
Steve.emit('speak', 'Testing custom events!')
