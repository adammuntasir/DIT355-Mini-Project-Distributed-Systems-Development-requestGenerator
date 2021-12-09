var publisher = require("./src/publisher.js");
var reqGenerator = require("./src/generator.js");
let engine = new reqGenerator();

var access = require("../global_values.js");

publisher.start(); //starts the publisher.js module

var reqId = 0;

console.log(engine.generate(reqId));

setInterval(function () {
  var generate = engine.generate(reqId);
  publisher.publish(access.sendToCircuitBreaker, generate);
  //console.log(generate);
  reqId++;
}, 500);
