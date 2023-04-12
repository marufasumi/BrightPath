////////// PROBLEM 1 //////////
/*
  Create a variable called 'lovesCode' and set it equal to true. 
  Check to see if 'lovesCode' is equal to true or false. 
  If it is true, console log "I love to code!"
  If it is not, console log "Coding has its challenges."
*/

//CODE HERE
console.log("problem 1");
let lovesCode =true;
if (lovesCode===true){
  console.log("I love to code");
}else{
  console.log("Coding has its challenges");
}

// For problems 2-3 use the following lines of code:
var amysAge = 29;
var brittanisAge = 34;
var amysBirthYear = 1991;
var brittanisBirthYear = 1986;
/*
    In this file, we'll be continuing our story
    with Jon being allowed to flee his fight with Jamie.
*/

// create a backpack
let backpack =[];
let belt =[];
backpack.push('sword');
backpack.push('torch');
backpack.push('food');
backpack.push('kleenex');
backpack.push('Shield');


console.log(backpack);
// Splice() method
//Definition and Usage
//The splice() method adds and/or removes array elements.

//The splice() method overwrites the original array.

//Syntax
//array.splice(index, howmany, item1, ....., itemX)

// At position 2, add 2 elements:
console.log("add 2 elements at position 2");
backpack.splice(2,0,"sweater","clorox");  
console.log(backpack);

//At position 2, remove 2 items:

console.log("At position 2, remove 2 items:");
backpack.splice(2,2);
console.log(backpack);

//At position 2, add new items, and remove 1 item:
console.log("At position 2, add new items, and remove 1 item:");
backpack.splice(2,1,'jacket','bomb');
console.log(backpack);

//Slice() method
//Definition and Usage
//The slice() method returns selected elements in an array, as a new array.

//The slice() method selects from a given start, up to a (not inclusive) given end.

//The slice() method does not change the original array.

//Syntax
//array.slice(start, end)

//Select elements:
console.log("Select elements:");
slicePart = backpack.slice(1,3);
console.log(slicePart);

//Select elements using negative values:


slicePart_1 = backpack.slice(-3,-1);
console.log(slicePart_1);

//shift () method
//The shift() method removes the first element from an array and returns that removed element.
// This method changes the length of the array

console.log(backpack);
backpack.shift();
console.log(backpack);


// unshift() Method
//The unshift() method adds the specified elements to the beginning of an array
// and returns the new length of the array.
console.log(backpack);
backpack.unshift(["Pen","Pencil"]);
console.log(backpack);


//push()
//The push() method adds the specified elements to the end of an array 
//and returns the new length of the array.

let l=backpack.length;
console.log(l);
backpack.push(" knife");
l=backpack.length;
console.log(l);


//pop() 
//The pop() method removes the last element from an array and returns that element.
// This method changes the length of the array.

let l1=backpack.length;
console.log(l);
backpack.pop();
l1=backpack.length;
console.log(l1);
////////// PROBLEM 2 //////////

/*
  Using an if statement and a comparison operator, create code that will check if Amy or Brittani is older,
   and then console.log '{name} is older'. 
   Hint: Consider what will happen if they are the same age. Handle this situation.
*/

//CODE HERE
console.log("problem 2");

if (amysAge>brittanisAge){
  console.log("Amy is older");
}else if (amysAge===brittanisAge){
  console.log("They are at same age")
}else{
  console.log("Brittani is older");
}

////////// PROBLEM 3 //////////

/*
  Using an if statement and a comparison operator, create code that will check 
  if Amy and Brittani were born in the same year. 
  If they were, console.log 'Amy & Brittani were born in the same year'. 
  If they were not, console.log 'Amy & Brittani were not born in the same year'
*/

//CODE HERE
console.log("problem 3");
if(amysAge===brittanisAge){
  console.log('Amy & Brittani were born in the same year');
}else{
  console.log("Amy & Brittani were not born in the same year");
}
////////// PROBLEM 4 //////////

let temperature = 55;
let rain = true;

/*
  Using an if statement and a comparison operator,
  create code that will log a suggestion on what type of clothes one should wear for the day, 
  based on the above temperature and rain.
  If it is 80 degrees or above, and raining, one should wear a t-shirt and take an umbrella. 
  If it is between 60 and 80 degrees, and raining, one should wear a rain-jacket. 
  If it is 60 degrees or below, one should wear a jacket and carry an umbrella. 
  Come up with your own clothing suggestions based on those temperature parameters when it is not raining.
*/

//CODE HERE
console.log("Problem 4")
if (temperature>=80 && rain){
  console.log("wear a t-shirt and take an umbrella");

}else if(temperature>=60 || temperature<80 && rain) {
  console.log("wear a jacket and carry an umbrella.")
}else{
  console.log("wear a jacket and carry an umbrella");
}

////////// PROBLEM 5 //////////

/*
  Create a for-loop that runs 10 times, and on each iteration logs the word 'hello'.
*/

//CODE HERE
console.log("Problem 5")
console.log("Problem 5");
for (let i = 1; i <=10; i++) {
  console.log("Hello")
  
}

////////// PROBLEM 6 //////////

/*
  Create a for-loop that runs 10 times, logging the numbers 1 through 10. Ex, 
  on the first iteration it would log 1, on the second iteration it would log 2.
*/

//CODE HERE
console.log("problem 6")
for (let i= 1; i<=10;i++) {
  
  console.log(i);
  
}

////////// PROBLEM 7 //////////

/*
  Create a for-loop that logs the numbers 0 through 10 backwards.
   Ex, on the first iteration it would log 10, on the second iteration it would log 9.
*/

//CODE HERE
console.log("Problem 7")
for (let i = 10; i >= 0; i--) {
  console.log(i);
  
}


////////// PROBLEM 8 //////////

let score = 0;
let passingScore = 7;

/*
  Create a while-loop that logs "Your score is not high enough"
  while the score variable above is below passingScore. 
  In each iteration of the loop, increase the score by one. 
  If your code is successful, you will see your logged statement 7 times.
*/

//CODE HERE
console.log("problem 8");
while(score <= passingScore){
  console.log("Your score is not high enough");
  score+=1


}

////////// INTERMEDIATE PROBLEMS //////////

////////// PROBLEM 9 //////////
/*
  Create a variable called 'changeMyMind' and set it equal to true. 
  Check to see if changeMyMind is set to true or false, 
  if it is true, change the status to false, if it is false, change the status to true.

*/

//CODE HERE
console.log("problem 9");
let changeMyMind = true;
if (changeMyMind===true){
  changeMyMind=false;
  console.log(changeMyMind);
}else{
  changeMyMind===true;
  console.log(changeMyMind);
}


////////// PROBLEM 10 //////////
// Using the "not" operator (!), change the current value of changeMyMind to true 
//(it should currently be set to false due to the if-else statement in Problem 9).
// After you change the value of changeMyMind, console.log it's new value (it should now read true).

//CODE HERE

changeMyMind!==false;
console.log(changeMyMind);
////////// ADVANCED PROBLEMS //////////

////////// PROBLEM 11 //////////

let z = 5;
// Create a while loop that continues to run while z is greater than 0. 
//Within the while loop, log a countdown from the value of z to 1. 
//Once you have logged the countdown, make sure you decrement z by 1. 
//If your code is running properly, you should see: 5,4,3,2,1,4,3,2,1,3,2,1,2,1,1.

//CODE HERE
while(z>0){
  for (let i =z ; i>0; i--) {
    console.log(i);  
  }
  z -=1;
}

// after changing to check version