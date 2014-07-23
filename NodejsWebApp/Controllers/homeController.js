(function (homeController) {
    
    var data = require("../data");
    homeController.init = function (app) {
        
        data.getData(function (people) {
            app.get("/", function (request, response) {
                response.send(people);
            });
        });
       
    };
})(module.exports);