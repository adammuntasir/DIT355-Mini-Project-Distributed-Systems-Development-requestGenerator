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
      
  }
  generateCoordinates(dateFilled) {}
}

module.exports = generator;