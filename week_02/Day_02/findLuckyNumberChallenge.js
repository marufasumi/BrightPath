/*Find Lucky Numbers
Difficulty
Easy

Concepts
Loops, General


Given a number, n, return an array containing n unique random numbers between 1-10, inclusive. 
(That is, do not repeat any numbers in the returned list.)

You can trust that this function will never be called with n < 0 or n > 10.

For example:

luckyNumbers(2)
// returns (3, 7)
luckyNumbers(6)
// returns (1, 7, 9, 6, 5, 2)*/

// Write your code below this line.
//console.log(Math.random()); 
// Expected output: a number from 0 to <1
//Math.floor(Math.random() =convert it 0 to 1=> *11 = 1 to 10
// multiply this with the number to get the number

function luckyNumbers(number) {
    let l =[]

    for (let i= 0; i<=number; i++) {
       
      
        let randomNumber =Math.floor(Math.random() *10 )+1;//it will generate number  1 to 10
            if(l.indexOf(randomNumber)==-1){

            l.push(randomNumber);
           


          } 
    
}
return l

}

console.log(luckyNumbers(5));


//indexOf() is an array method that returns the index of arr at which candidateInt can be found. 
//If it doesn’t find it at all, it returns -1. That’s just how indexOf() works.
// So we can use that to check to see if
// randomNumber is in the array; if it isn’t, arr.indexOf(random)will equal -1.

function luckyNumbers2(n) {
    let uniqueArray =[]

    for (let i= 0; i<n; i++) {
       
      
        let rand =Math.floor(Math.random() *10 )+1;//it will generate number  0 to 10
            if(!uniqueArray.includes(rand)){

            uniqueArray.push(rand);
           


          } else{
            i--
          }
    
}
return uniqueArray

}

console.log(luckyNumbers2(5));