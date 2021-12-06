let dateGenerator = require("random-date-generator");
let emptyVar;

class generator {
  constructor() {}

  //Methods:
  getFixedMinute(minute) {
    var fixedMinute = minute;
    if (fixedMinute >= 45 || fixedMinute <= 15) {
      fixedMinute = 0;
    } else {
      fixedMinute = 30;
    }
    return fixedMinute;
  }

  idGenerate(emptyObj, reqId) {
    emptyObj.userId = parseInt(Math.random() * (500000 - 1) + 1);
    emptyObj.requestId = reqId;
    return emptyObj;
  }
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  getDentistId(idFilled) {
    idFilled.dentistID = this.getRandomInt(1, 5);
    return idFilled;
  }
  issuanceGenerate(dentistIdFilled) {
    dentistIdFilled.issuance = Date.now();
    return dentistIdFilled;
  }
  generateDate(issuanceFilled) {
    var startDate = new Date(2021, 0, 1);
    var endDate = new Date(2022, 11, 31);
    var dateAndTime = dateGenerator.getRandomDateInRange(startDate, endDate);
    var time = "";
    var year = dateAndTime.getFullYear();
    var month = dateAndTime.getMonth() + 1;
    var day = dateAndTime.getDate();
    var hour = dateAndTime.getHours();
    var minute = dateAndTime.getMinutes();
    //minute = getFixedMinute(minute);
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
    //issuanceFilled.date = "2021-12-10 10:00";
    return issuanceFilled;
  }
  generateCoordinates(dateFilled) {
    /*var latitude = Math.random() * (58.077909 - 57.302823) + 57.302823;
    var longitude = Math.random() * (12.984824 - 11.424765) + 11.424765;
    dateFilled.clientCoordinates = [latitude, longitude];*/
    dateFilled.clientCoordinates = [22.942625, 33.685255];
    return dateFilled;
  }
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
    var completedStringified = JSON.stringify(clientCoordinatesFilled);
    return completedStringified;
  }
}

module.exports = generator;
