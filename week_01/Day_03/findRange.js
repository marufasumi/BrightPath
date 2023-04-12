/*Find The Range
Difficulty
Easy

Concepts
Loops, General


Given an array of numbers, write some code to loop through the array, 
and print out the smallest and largest numbers in the array.

For example, if given the array [1, 4, 11, 2, 37, -4], your code should print out -4, 37.*/

// Starting array
let array = [28, 43, -12, 30, 4, 0, -36]

// Write your solution below:
var largest = 0;
var smallest =array[0];
let len = array.length;
    
for (let i = 0; i < len; i++) {
    if (largest<i) {
        largest = array[i];
        
    }
    if (smallest>array[i]) {
        smallest =array[i];
   
}
smallest;
largest;    
     
}

console.log("The largest number is : ",largest);
console.log("The smallest number is : ", smallest);
var largest = array[0];
var smallest =array[0];
let len2 = array.length;
 
for (let i = 0; i < len2; i++) {
    if (largest<array[i]) {
        largest = array[i];
        
    }
    if (smallest>array[i]) {
        smallest =array[i];
   
}
smallest;
largest;    
     
}

console.log("The largest number is : ",largest);
console.log("The smallest number is : ", smallest);
/*Find The Range
Difficulty
Easy

Concepts
Loops, General


Given an array of numbers, write some code to loop through the array, 
and print out the smallest and largest numbers in the array.

For example, if given the array [1, 4, 11, 2, 37, -4], your code should print out -4, 37.*/

// Starting array
let array1 = [28, 43, -12, 30, 4, 0, -36]

// Write your solution below:
/*var largest = 0;
var smallest =array[0];
let len = array.length;
    
for (let i = 0; i < len; i++) {
    if (largest<i) {
        largest = array[i];
        
    }
    if (smallest>array[i]) {
        smallest =array[i];
   
}
smallest;
largest;    
     
}

console.log("The largest number is : ",largest);
console.log("The smallest number is : ", smallest);*/
var largest = array[0];
var smallest =array[0];
let len1 = array.length;
 
for (let i = 0; i < len1; i++) {
    if (largest<array[i]) {
        largest = array[i];
        
    }
    if (smallest>array[i]) {
        smallest =array[i];
   
}
smallest;
largest;    
     
}

console.log("The largest number is : ",largest);
console.log("The smallest number is : ", smallest);
