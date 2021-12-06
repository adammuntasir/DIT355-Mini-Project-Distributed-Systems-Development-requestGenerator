// let dateGenerator = require("random-date-generator");
let emptyVar;

class generator {
  constructor() {}
  generate(requestId) {
    var emptyObj = {
      userId: "",
      requestId: "",
      dentistID: "",
      issuance: "",
      date: "",
      clientCoordinates: "",
    };
    var idFilled = this.idGenerate(emptyObj, requestId);
    var dentistIdFilled = this.getDentistId(idFilled);
    var issuanceFilled = this.issuanceGenerate(dentistIdFilled);
    var dateFilled = this.generateDate(issuanceFilled);
    var clientCoordinatesFilled = this.generateCoordinates(dateFilled);
    var completedStringified = JSON.stringify(issuanceFilled);
    return completedStringified;
  }

  //Methods:
  idGenerate(emptyObj, requestId) {
    emptyObj.userId = parseInt(Math.random() * (500000 - 1) + 1);
    emptyObj.requestId = requestId;
    return emptyObj;
  }
  getDentistId(idFilled) {
    idFilled.dentistID = 1;
    // TODO: change the 1 with readable dentist id from the registry
    return idFilled;
  }
  issuanceGenerate(dentistIdFilled) {
    //var currentTime = Date.now();
    dentistIdFilled.issuance = Date.now();
    console.log(dentistIdFilled.issuance);
    return dentistIdFilled;
  }
  generateDate(issuanceFilled) {
    var startDate = new Date(2021, 0, 1);
    var endDate = new Date(2022, 11, 31);
    var dateAndTime = DateGenerator.getRandomDateInRange(startDate, endDate);
    var time = "";
    var year = dateAndTime.getFullYear();
    var month = dateAndTime.getMonth() + 1;
    var day = dateAndTime.getDate();
    var hour = dateAndTime.getHours();
    var minute = dateAndTime.getMinutes();
    minute = getFixedMinute(minute);
    var newTime = time.concat(
      year,
      "-",
      month,
      "-",
      day,
      " ",
      hour,
      ":",
      minute
    );
    issuanceFilled.date = newTime;
    return issuanceFilled;
  }
  generateCoordinates(dateFilled) {
    var latitude = Math.random() * (58.077909 - 57.302823) + 57.302823;
    var longitude = Math.random() * (12.984824 - 11.424765) + 11.424765;
    dateFilled.clientCoordinates = [latitude, longitude];
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
}

module.exports = generator;
