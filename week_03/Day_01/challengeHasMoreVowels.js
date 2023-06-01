/* Has More Vowels
Difficulty
Easy

Concepts
Loops, Conditionals


Instructions
Write a function called hasMoreVowels that takes in one argument, word. When the function is called, return true if that word contains more vowels than non-vowels; otherwise, return false. The word will always be a single word, without any punctuation or spaces. It will contain only uppercase and/or lowercase letters.

If the phrase is over half vowels, it should return true:

hasMoreVowels('moose')
// true
If it’s half vowels (or less), it’s false:

hasMoreVowels('mice')
// false

hasMoreVowels('graph')
// false
Don’t consider “y” as a vowel:

hasMoreVowels('yay')
// false
Uppercase vowels are still vowels:

hasMoreVowels('Aal')
// true */

//count the total vowel and consonant using for loop
//check if greater or not
function hasMoreVowels(str) {
let v=0;
let c=0;
for (let i = 0; i < str.length; i++) {
    if(str[i]==="a" ||str[i]==="e"||str[i]==="i" ||str[i]==="o" ||str[i]==="u" ||
    str[i]==="A" ||str[i]==="E"||str[i]==="I" ||str[i]==="O" ||str[i]==="U" 

    ){
        v+=1
    }else{
        c+=1
    }  
}

if (v>c) {
    return true;
    
} else {
    return false;
}

    
}
console.log(hasMoreVowels("graph"))
console.log(hasMoreVowels("mice"))
console.log(hasMoreVowels("yay"))
console.log(hasMoreVowels("Aal"))