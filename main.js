/* START CODE UNDER THIS LINE */
//q2 
const orderedPlanets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter"];
console.log(orderedPlanets[3])
const unorderedPlanets = ["Mars", "Earth", "Mercury", "Jupiter", "Venus"];
console.log(unorderedPlanets[0])
const animals = ["Cat", "Dog", "Dolphin", "Squirrel", "Koala"];
console.log(animals[animals.length-1])
console.clear

//q3
// a- use the `length` property
const orderedPlanets1 = ["Mercury", "Venus", "Earth", "Jupiter"];
orderedPlanets1[orderedPlanets1.length]="mars"
console.log(orderedPlanets1)
// b- don't use the `length` property (use the index)
const unorderedPlanets1 = ["Neptune", "Earth", "Mercury"];
unorderedPlanets1.push('mars')
console.log(unorderedPlanets1)
//q4
const reptiles = ["Snake", "Lizard", "Turtle"];
reptiles.push('dinasor')
console.log(reptiles)