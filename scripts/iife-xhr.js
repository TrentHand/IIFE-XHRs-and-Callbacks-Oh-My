// In the iife-xhr.js file, define two functions that will be executed after each type of animal is loaded to then display those animals in your DOM. Example given below.
var dinosaurs = document.getElementById("dinosaurs");


function showCarnivores (carnivores) {
	carnivores.forEach(function(dino) {
		dinosaurs.innerHTML += `<li>${dino}</li>`;
	});
}

function showHerbivores (herbivores) {
	herbivores.forEach(function(dino) {
		dinosaurs.innerHTML += `<li>${dino}</li>`;
	});
}
//Predator is a variable that holds the object
//.loadCarnivores accesses the property of loadCarnivals
//(showCarnivores)
Predator.loadCarnivores(showCarnivores);
Prey.loadHerbivores(showHerbivores);

// Passing a function to another function as an event callback

// function outputMonkeys(monkeyData) {
//   monkeyData.forEach( function(monkey) {
//     console.log("monkey name: ", monkey );
//   });
// }

// Monkeys.getTheMonkeys(outputMonkeys);