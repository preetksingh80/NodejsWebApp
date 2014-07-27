(function (data) {
    
    var seedData = require("./seedData");
    var database = require("./database");
    
    data.getNoteCategories = function (next) {
        database.getDb(function (err, db) {
            if (err) {
                next(err, null);
            } else {
                db.notes.find().toArray(function(errors, results) {
                   if (errors) {
                       next(errors, null);
                   } else {
                       next(null, results);
                   }
                });
            }
        });
    };
    
    function seedDatabase() {
        database.getDb(function (err, db) {
            if (err) {
                console.log("Failed to seed data: " + err);
            } else {
                // test to see if data exists
                db.notes.count(function (err, count) {
                    if (err) {
                        console.log("Failed to retrieve notes count from database");
                    } else {
                        if (count === 0) {
                            console.log("seeding the database");
                            seedData.initialNotes.forEach(function (item) {
                                db.notes.insert(item, function (err) {
                                    if (err) {
                                        console.log("Failed to insert note to database");
                                    }
                                });
                            });
                        }
                    }
                });
            }
        });
    }
    
    seedDatabase();
})(module.exports);