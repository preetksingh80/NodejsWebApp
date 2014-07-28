(function (homeController) {
    
    var data = require("../data");
    homeController.init = function (app) {
        data.getNoteCategories(function (errors, results) {
            app.get("/", function (request, response) {
                response.render("index", {title:"Notes", error: errors, categories: results });
            });
        });

        

        var handlePostData = function (request, response) {
            var categoryName = request.body.categoryName;
            data.createNewCategory(categoryName, function(errors, results) {
                if (errors) {
                    console.log("Error in creating category");
                    console.log(errors);
                    response.redirect("/");
                } else {
                    response.redirect("/notes/" + categoryName);
                }
            });
        };

        app.post("/newCategory", handlePostData);

        

    };
})(module.exports);