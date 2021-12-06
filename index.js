var publisher = require("./src/publisher.js");
var reqGenerator = require("./src/generator.js");
let engine = new reqGenerator();

var access = require("../global_values.js");

publisher.start(); //starts the publisher.js module

var reqId = 0;

setInterval(function () {
  publisher.publish(access.sendToCircuitBreaker, engine.generate(1));
  console.log(engine.generate(1));
}, 1000);
