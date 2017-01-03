// Instructions for exercise

// Copy the code below into the JavaScript file, and follow the instructions in the comments.


//  1. Use the forEach method to add the name of each planet to a div element in your HTML
//    with an id of "planets".

//  2.  Use the map method to create a new array where the first letter of each planet is capitalized

//  3.  Use the filter method to create a new array that contains planets with the letter 'e'

//  4.  Use the reduce method to create a sentence from the words in the following array

var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the",

"cheese"];

var el = document.getElementById("planets");

// var el2 = document.getElementById("capPlanets");

//  1.

planets.forEach(function(planet) {
    var paragraph = document.createElement("p")
    paragraph.innerHTML = planet
    el.appendChild(paragraph)
});

//  2.

var capPlanets = planets.map(function(planet) {
    return planet.charAt(0).toUpperCase() + planet.substr(1)
});

console.log(capPlanets);


// Ask question about the below code:

// var paragraph2 = document.createElement("p")
// paragraph2.innerHTML = capPlanets
// el2.appendChild(paragraph2)

//  3.

// var planetsWithE = [];
// var planetsWithoutE = [];

//  Want to know how to turn the below code into an if-else if statement that adds appropriate
//  planets to  correct variable set to an empty array

var planetsWithE = planets.filter(function(planet) {
    if (planet.indexOf("e") !== -1) {
    return planet;
    // planetsWithE += planet;
    }
});

var planetsWithoutE = planets.filter(function(planet) {
    if (planet.indexOf("e") == -1) {
    return planet;
    }
});

console.log(planetsWithE);
console.log(planetsWithoutE);


//  4.  NEED HELP HERE

// var createSentence = words.reduce(function(totalWords, currentWord) {
//     if ()

// });








//  Sources Consulted:

//  1. Understanding the forEach method:

//  https://blog.udemy.com/javascript-foreach/

// About the forEach Method in JavaScript:

// If you’ve studied languages like C++ or Java before, the forEach method or the for each
// loop should be familiar to you. For each loops are generally used to perform a certain
// task for every item present in a collection. The forEach method (or loop) in JavaScript
// is no different.

// The forEach method is used to perform a task once for every element present in an array.
// The syntax of the method is as follows:

// name_of_array.forEach(call_back_fn[ , thisObj];

// The name_of_array parameter is the name of the array object the forEach method will traverse.
// You have to specify a valid array for the forEach method to work. The call_back_fn parameter
// will refer to a prewritten function which gets executed, which we will explain later.
// The call_back_fn is also a required parameter. The final parameter is the thisObj parameter.
// This is an optional parameter. If the call_back_fn has been defined inside an object, the this
// parameter is used to refer to the name of the object. If the this keyword is omitted,
// an undefined value is used.

//  2. https://www.discovermeteor.com/blog/understanding-javascript-map

// About the map() function in JavaScript:

// JavaScript’s map function is extremely useful, but it can also be a bit confusing when you’re just starting out with programming.

// So here’s a breakdown of what it does exactly, and how to use it.

// map() vs Map()
// Note that this article is about the Array.map() method, not the new Map object.

// The Definition

// First, let’s start with the Mozilla Developer Network’s own definition:

// The map() method creates a new array with the results of calling a provided function on every element in this array.
// There’s a lot to unpack here! Before we start trying to understand this sentence, let’s try and isolate the different characters in this little story:

// The map() method creates a new array with the results of calling a provided function on every element in this array.
// As you can see, we have five different types of objects:

// An array
// The elements contained within this array
// A function
// The results returned by this function
// A new array
// Looking at it this way, we can start to see what’s going on. map is a function that:

// Takes an array and a function
// Applies the function to every element in the array
// Keeps track of the results of each successive function call
// Returns a new array containing these results
// In the physical world, a map is a way of projecting a surface (terrain) onto another (paper). Similarly, the map function “projects” the original array into the new one.

// Calling map

// Now I’ve said that map takes two arguments, an array and a function. Usually, this is how you would call a function with two arguments:

// map(myArray, myFunction);
// But map is defined as an array method, meaning it’s an action that any JavaScript array can perform on itself. So instead, we call it like this:

// myArray.map(myFunction);
// This of course presupposes you’ve written a myFunction function somewhere else. Which brings us to the next topic.

// The map Callback

// The function taken as argument by map is known as the callback, because it’s called on every element in the original array.

// And you have to write it in a very specific manner. The callback has to:

// Take in the current element being processed as argument.
// Return the new element that’s going to take its place in the new array.
// Optionally, the function can also take in a second index argument corresponding to the index (i.e. place in the array) of the current element, and a third array argument pointing back to the original array.


//  3. https://danmartensen.svbtle.com/javascripts-map-reduce-and-filter

//  4. http://www.w3schools.com/jsref/jsref_reduce.asp
