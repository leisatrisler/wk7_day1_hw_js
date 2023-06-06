// Homework
// Complete the Following Coding Questions in JavaScript.

// Question #1
// Write a function that takes a string (sentence) and an array of strings (in this example dog_names) and check if one of the list members (dog names) is in the string (sentence). Return an array of the dog names found in the array

// hint: filter, includes

// for information on includes see:

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes


// var dogNames = ["Max","Fido","Gizmo","Nala"]

// //Test Cases
// var testString1 = "Hello, my dog is Max, and they have purple eyes!"
// //Expect ['Max']

// var testString2 = "My Dog is fast, her name is Tippi"
// //Expect []

// var testString3 = "Come here Fido and Gizmo come here"
// //Expect['Fido','Gizmo']
//this is the original code written, and then reduced using lambdas and filters using advice from google
var mySentence = "I love my puppies, Ladybird & pandabear , but not pennny she steals the food.";
var topDog = ["Ladybird", "PandaBear", "Penny"]
function compareNames(sentence, arrNames){
    var dogWars = []
    //spilt sentence into an array
    //iterate over ther array to find possible matches
    var dogWords = sentence.split(" ");
    for(var i = 0; i< dogWords.length; i++) {
        for(var j = 0; j< arrNames.length; j++) {
            if (dogWords[i].toLowerCase() === arrNames[j].toLowerCase()) {
               dogWars.push(dogWords[i]);
            }
        };
    };
    return dogWars;
};

var whosTheTopDog = compareNames(mySentence, topDog);
for(var i = 0; i< whosTheTopDog.length; i++){
    console.log(whosTheTopDog[i]);
}

// This is the reduced version down from 20 lintes of code to 10
function compareNames(sentence, arrNames) {
  var dogWords = sentence.split(" ");

  return dogWords.filter(word =>
    arrNames.some(name =>
      word.toLowerCase() === name.toLowerCase()
    )
  );
}
var whosTheTopDog = compareNames(mySentence, topDog);
whosTheTopDog.forEach(dog => console.log(dog));

// Question #2
// Write a Function using map to convert an array of number from inches to feet

// 1 foot = 12 inches

function inchToFeet(arr) {
    return arr.map(inches => inches / 12);

}
console.log(inchToFeet([66, 64, 60, 52, 72, 80, 51]));
// var heightsInInches = [66, 64, 60, 52, 72, 80, 51]


// Your test code using 'expect'


// // Expect
// // [
// //   5.5,
// //   5.333333333333333,
// //   5,
// //   4.333333333333333,
// //   6,
// //   6.666666666666667,
// //   4.25
// // ]

