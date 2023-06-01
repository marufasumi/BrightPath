/* Devmountain Foundations

Balanced Parenthesis

« Back to Homepage

Balanced Parenthesis
Difficulty
Medium

Concepts
Loops, Conditionals


Given a string, return true or false depending on whether that string has balanced parentheses.

For the purposes of this problem, you only need to worry about parentheses ( and ), not other opening-and-closing marks, like curly brackets, square brackets, or angle brackets.

For example:

>>> has_balanced_parens("()")
// true

>>> has_balanced_parens("(Oh Noes!)(")
// false

>>> has_balanced_parens("((There's a bonus open paren here.)")
// false

>>> has_balanced_parens(")")
// false

>>> has_balanced_parens("(")
// false

>>> has_balanced_parens("(This has (too many closes.) ) )")
// false
You may consider a string with no parentheses balanced:

>>> has_balanced_parens("Hey...there are no parens here!")
// true
© 2021 Devmountain*/

function balanceParenthesis(str) {
    let openPar =0;
    let closePar =0;

    for (let i = 0; i < str.length; i++) {
        for (let j =i+1 ; j< str.length ;j++) {
            if(str[i]==='('&& str[j]===')'){

                openPar+=1
                closePar+=1
                return true;

            }else{
                return false;
            }
          


        
            
        }
       
        
    }
    
}


console.log(balanceParenthesis("(Oh Noes!)("));