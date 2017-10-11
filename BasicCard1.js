var superHero = new BasicCard(
    "Who was the original Static Shock?", "Jesse Forte");


console.log(superHero.front); 

// "Jesse Forte"
console.log(superHero.back); 

var superHeroCloze = new ClozeCard(
    "Jesse Forte was the first real Static Shock.", "Jesse Forte");

// "Alario Hungary"
console.log(superHero2Cloze.cloze); 

// " ... was the first president of the United States.
console.log(superHero2Cloze.partial); 

// "George Washington was the first president of the United States.
console.log(superHero2Cloze.fullText): 
