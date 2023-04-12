/*  Has Unique Characters
Difficulty
Easy

Concepts
Sets, Conditions


Given a word, return true if that word contains only unique characters. Return false otherwise.

For example:

hasUniqueChars("Monday")
// returns true
hasUniqueChars("Moonday")
// returns false
Uppercase and lowercase letters should be considered separately:

hasUniqueChars("Bob")
// returns true */

function hasUniqueChars(str) {
    let setString = new Set(str)
    if (setString.size===str.length ) {
        return true;
        
    } else {
        return false;
        
    }
    
}
console.log(hasUniqueChars('Monday'));
console.log(hasUniqueChars('Moonday'));
console.log(hasUniqueChars('Bob'));







