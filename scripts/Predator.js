(function(){
	"use strict";
})();//needed on all JS files to run Grunt Watch

// Predator should expose two public functions to load each JSON files and stores the array of animals in the appropriate private array. Each of those functions should accept one argument that will store the callback function to be executed.

var Predator = (function () {
  var carnivores = [];

  return {
    loadCarnivores: function (callbackToInvoke) {
      var loader = new XMLHttpRequest();//creates the variable "loader" and makes a new request
      	loader.open("GET", "carnivores.json");//tells "loader where to go and to get the file from carnivores.JSON"
      	loader.send();//sends the request out

      loader.addEventListener("load", function () {
       carnivores = JSON.parse(this.responseText).carnivores;// Set the value of carnivores to the function's result .carnivores accesses the property within the object, whos value is an array
        callbackToInvoke(carnivores);//passes the date from carnivores function into the primary argument
       });
    }
  };
})();

var Prey = (function () {
  var herbivores = [];

  return {
    loadHerbivores: function (callbackToInvoke) {
      var loader = new XMLHttpRequest();//creates the variable "loader" and makes a new request
      	loader.open("GET", "herbivores.json");//tells "loader where to go and to get the file from herbivores.JSON"
      	loader.send();//sends the request out

      loader.addEventListener("load", function () {
       herbivores = JSON.parse(this.responseText).herbivores;// Set the value of herbivores to the function's result
        callbackToInvoke(herbivores);//passes the date from herbivores function into the primary argument
       });
    }
  };
})();


// var Monkeys = (function() {

//   return {
//     getTheMonkeys: function(callbackFn) {
//       var monkeyCall = new XMLHttpRequest();
//       monkeyCall.open("GET", "monkeys.JSON");
//       monkeyCall.send();

//       monkeyCall.addEventListener("load", function() {
//         var monkeyStuff = JSON.parse(this.responseText).monkeys;
//         callbackFn(monkeyStuff);
//       });
//     }
//   }

// })();