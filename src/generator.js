let dateGenerator = require("random-date-generator");

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
  idGenerate(emptyObj, requestId) {}
  getDentistId(idFilled) {}
  issuanceGenerate(dentistIdFilled) {}
  generateDate(issuanceFilled) {}
  generateCoordinates(dateFilled) {}
}
