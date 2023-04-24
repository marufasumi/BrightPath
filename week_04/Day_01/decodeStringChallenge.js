/*Decode String
Difficulty
Medium

Concepts
Loops


In this challenge, you’ll write a decoder.

Write a function that takes in a string and returns a string. A valid argument is a number followed 
by a sequence of letters. Ex. 2fcjjm

The number in the string represents how many characters each letter should shift. For example:

>>> "1a" // "b"
>>> "3ce" // "fh"
>>> "2fcjjm" // "hell */

// Write your code below this line

function decodeString(code) {
  // Capture the number to decode the string
  let decipher = Number(code[0])
  // Create a solution string to add letters to one-by-one
  let solution = ""
  // Start iterating through the string, starting at index 1 to avoid the decipher
  for (let i = 1; i < code.length; i++) {
    // Capture the ascii code for the given letter, plus the value of the decipher
    let strValue = code[i].charCodeAt() + decipher
    // Add the letter the belongs to the updated ascii value to the solution string
    solution += String.fromCharCode(strValue)
  }
  // return the solution string
  return solution
}


function decodeString2(str){
  //capture the number of the input string
  let num= Number(str[0])
let newStr=""
for (let i = 0; i < str.length; i++) {
  let strVal=str[i].charCodeAt()+num
  newStr +=String.fromCharCode(strVal)
  
  
}

return newStr
}

console.log(decodeString2("1a"))

/* 
Examples
Get the Unicode of the first character in a string:

let text = "HELLO WORLD";
let code = text.charCodeAt(0);
Get the Unicode of the second:

let text = "HELLO WORLD";
let code = text.charCodeAt(1);

Definition and Usage
The charCodeAt() method returns the Unicode of the character at a specified index (position) in a string.

The index of the first character is 0, the second is 1, ....

The index of the last character is string length - 1 (See Examples below).


//string.fromCharCode
Examples
How to convert Unicode values to characters:

let char = String.fromCharCode(65);
let text = String.fromCharCode(72, 69, 76, 76, 79);
Definition and Usage
The String.fromCharCode() method converts Unicode values to characters.

The String.fromCharCode() is a static method of the String object.

The syntax is always String.fromCharCode().

You cannot use myString.fromCharCode().

Syntax
String.fromCharCode(n1, n2, ..., nX)*/


