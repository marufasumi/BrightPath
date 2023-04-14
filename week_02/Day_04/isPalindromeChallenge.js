/*Is Palindrome
Difficulty
Easy

Concepts
Loops, General


Return true if this word is a palindrome. false if it is not. 
A palindrome is a word that is spelled the same backwards and forwards.

For example:

isPalindrom("a")
// returns true

isPalindrom("noon")
// returns true

isPalindrom("hello")
// returns false
Treat spaces and uppercase letters normally—so “Racecar” wouldn’t be a palindrome since “R” and “r” aren’t the same letter:

isPalindrom("Racecar")
// returns false

isPalindrom("racecar")
// returns true */

function isPalindrom(str) {
    let len = str.length;
    

    for (let i = 0; i< len/2; i++) {
        
            if (str[i]!=str[len-1-i]) {
                return false 
            } else {
                return true
            }
            
            
        }
        
        
    }

    function isPalindrom2(str) {
        let len = str.length;
        
    
        for (let i = 0; i< len/2; i++) {
            
                if (str[i]===str[len-1-i]) {
                    return false 
                } else {
                    return true
                }
                
                
            }
            
            
        }
    


console.log(isPalindrom("noon"));
console.log(isPalindrom("Racecar"));
console.log(isPalindrom("racecar"));