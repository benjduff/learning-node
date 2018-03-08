var events = require('events'); //node module
var util = require('util'); //node module
var fs = require('fs');


/*
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
Steve.emit('speak', 'Testing custom events!');
*/


//creating and deleting directories using Sync and Async methods from the fs module

//fs.mkdirSync('newDir');  //Synchronous method for creating a new directory
//fs.rmdirSync('newDir'); //Synchronous method for deleting a directory


//To use the Async method, just delete the word Sync from the method name. An Async method should include a callback func to execute something after the action has been completed. In this case the newDir is created, the readMe.txt file is read, writeMe.txt is then created in the newDir and the data from readMe.txt is written to writeMe.txt

/*
fs.mkdir('newDir', function(){
  fs.readFile('../readMe.txt', 'utf8', function(err, data){
    fs.writeFileSync('./newDir/writeMe.txt', data); //Since writeFile does not have a callback function and readFile is an Async function there is no need for writeFile to be Async too.
  });
});
*/


//To remove a directory. A directory must first be empty.
fs.unlink('./newDir/writeMe.txt', function(){ //unlink removes a particular file in a dir, once that is done execute callback func which deletes the dir.
  fs.rmdirSync('newDir');
})
