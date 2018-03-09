var events = require('events'); //node module
var util = require('util'); //node module
var fs = require('fs');
var http = require('http');


// --- CUSTOM EVENT LISTENERS --- //

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





// --- DIRECTORIES --- //

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

/*
//To remove a directory. A directory must first be empty.
fs.unlink('./newDir/writeMe.txt', function(){ //unlink removes a particular file in a dir, once that is done execute callback func which deletes the dir.
  fs.rmdirSync('newDir');
})
*/





/*
// --- READABLE STREAMS  --- //
// Different to "fs.readFile" which reads the whole file to memory before it executes a callback function, a read stream sends the data in buffers so you can execute a callback function as the buffers (chunks of data) are arriving over the stream.
var myReadStream = fs.createReadStream(__dirname + '/example.txt'); //Created a readable stream and specified which file to read in the params. To get the data from the stream in english, 'utf8' needs to be added as a 2nd parameter
/*
myReadStream.on('data', function(chunk){ //data event listener is inheritted from createReadStream which uses EventEmitter to create the 'data' event listener. When a buffer (a chunk of data) is received, execute callback func and log the chunk contents
  console.log('new chunk received:');
  console.log(chunk);
})
*/

/*
// --- WRITEABLE STREAMS --- //
var myWriteStream = fs.createWriteStream(__dirname + '/writeExample.txt')
/*
myReadStream.on('data', function(chunk){
  console.log('new chunk received.');
  myWriteStream.write(chunk);
})
*/

/*
// --- PIPES --- //
//Pipes are a node feature for getting data from a readstream and sending it to a writeStream, leaving out the manual work.
myReadStream.pipe(myWriteStream);
*/




// --- CREATING A SERVER -- //
var server = http.createServer(function(req, res){ //Create a server using method from http module. Take request and response as perams
  console.log('A request was made: ' + req.url); //log the request url, eg:127.0.0.1/api
  res.writeHead(200, {'Content-Type': 'text/plain'}); //respond with status code 200 (OK) and response header as plain text
  var myReadStream = fs.createReadStream(__dirname + '/example.txt', 'utf8');  //create a ReadStream(read location, character code)
  myReadStream.pipe(res); //pipe ReadStream to client
})

server.listen(3000, '192.168.0.11');
console.log('Listening to port 3000');
