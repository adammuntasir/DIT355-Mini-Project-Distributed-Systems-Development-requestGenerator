class generator {
    constructor() {}
    generate(requestId) {

        var emptyObj = {
            userId: "",
            requestId: "",
            dentistID: "",
            issuance: "",
            date: "",
            clientCoordinates: ""
        };

        var idFilled = this.idGenerate(emptyObj, requestId);
        var issuanceFilled = this.issuanceGenerate(idFilled)
        var completedStringified = JSON.stringify(issuanceFilled);
        return completedStringified;
    }


    idGenerate(emptyVar, requestId) {

        emptyVar.userId = parseInt(Math.random() * (500000 - 1) + 1); // already random

        emptyVar.requestId = requestId + parseInt(Math.random() * ((requestId * 153) / 2 - 1) + 1);; // already random

        emptyVar.dentistID = 3; // make random

        emptyVar.date = 2022 + "-" + 6 + "-" + 31 + " " + 10 + ":" + 30; // make random

        emptyVar.clientCoordinates = [22.942625, 33.685255] // keep this 
        return emptyVar;

    }

    issuanceGenerate(emptyVar) {
        var currentTime = Date.now();
        emptyVar.issuance = currentTime; // create issuance variable for client object
        return emptyVar;
    }
}

module.exports = generator;