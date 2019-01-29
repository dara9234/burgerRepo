// Import the ORM to create functions that will interact with the database.
// here we setup a model for how to interface wit the database
var orm = require("../config/orm.js"); 

//all the sql code is in this file

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) { 
      //grabs all the burgers from the database
      cb(res); 
      //call back sending in to controller
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) { 
    //create a new burger in the database
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) { 
    //update a burger within our database
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  }
  
};

// Export the database functions for the controller burgers_controller.js).
module.exports = burger;
