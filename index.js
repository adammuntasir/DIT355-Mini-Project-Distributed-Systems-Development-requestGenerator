var publisher = require("./src/publisher.js");
//var reqGenerator = require("./src/generator.js");

var access = require("../global_values.js");

publisher.start(); //starts the publisher.js module
publisher.publish(access.FromClient, '[("2021", "12", "10", "10", "00")]');
publisher.publish(
  access.FromClient,
  JSON.stringify({
    userId: 178279,
    requestId: 37,
    dentistID: 2,
    issuance: 1638369312826,
    date: "2021-12-10 10:00",
    clientCoordinates: [11.942625, 57.685255],
  })
);

console.log("message sent");
