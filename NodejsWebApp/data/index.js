(function(data) {

    var dataService = require("./dataService");

    data.getData = function(callBackFunction) {
        callBackFunction(dataService.people);
    };

})(module.exports);