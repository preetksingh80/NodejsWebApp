(function (homeController) {
    
    var data = require("../data");
    homeController.init = function (app) {
        
        data.getNoteCategories(function (errors, results) {
            app.get("/", function (request, response) {
                response.render("index", {title:"Notes", error: errors, categories: results });
            });
        });
       
    };
})(module.exports);