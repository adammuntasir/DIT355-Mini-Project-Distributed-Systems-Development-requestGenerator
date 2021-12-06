var publisher = require("./src/publisher.js");
var Generator = require('./src/generator.js');
var access = require('../global_values.js')
let generate = new Generator();

var reqId = 0;

//Set pump settings



publisher.start(); //starts the publisher.js module

setInterval(function() {

    var generatedMsg = generate.generate(reqId);
    reqId++;
    try {
        console.log(generatedMsg)
        publisher.publish(access.sendToCircuitBreaker, generatedMsg);

    } catch (error) {
        console.log(error.message)

    }
}, 50);