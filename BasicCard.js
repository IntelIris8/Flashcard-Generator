// var superHero = require("BasicCard.js");
// // This will print everything in exports.
// console.log("superHero");
// console.log("This is your dude");
// console.log(superHero);
// console.log("your man is winning the fight");
// // These will print correctly because we imported them
// console.log("superShero");
// console.log(superHero.abilities2);
// console.log("-----");
// console.log("She got this");
// console.log(superShero.);


function superHero( first, last, age, eyecolor) {
	this.firstName = first;
	this.lastName = last;
	this.age = age;
	this.eyecolor = eyecolor;
}

var hero = new superHero('Jesse', 'Forte', 24, 'brown');

console.log(hero);

function superHero2(first, last, age, eyecolor) {
	this.first = first;
	this.last = last;
	this.age = age;
	this.eyecolor = eyecolor;
}

var otherHero = new superHero2('Alario', 'Hungary', 20, 'brown');

console.log(otherHero);
