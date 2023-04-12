/*Add To Zero
Difficulty
Easy

Concepts
Loops, General


Given an array of numbers, console.log true if any two numbers in the array add to zero, otherwise log false.

For example:

[1, 4, 11, 2, 37, -4] should log true because 4 and -4 add to 0.

[0, 21, 33, 6, 0, -9] should log true because 0 and 0 add to 0.

[0, 1, 2, 3, 4, 5] should log false because no two numbers add to 0.*/

// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:

    
    
/*let value =false;
for (let i = 0; i < array.length; i++) {
    for (let j = 0; j< array.length; j++) {
        if (i != j) {
            if (array[i]+array[j]===0) {
                value = true;
                
            }
            
        }
        
    }
    
}
console.log(value);*/
// without using function
//we have to use to pointer approach and two four loop
//one loop move forward and another loop will move backward and add them to check the the is zero or not
//let v = false;

for (let i = 0; i< array.length; i++) {
    for (let j = -1; j< array.length; j++) {
        if (i !=j && array[i]+array[j]===0) {
           v= true;
        
    }
        
    }

}
       console.log(v) ;
        
    
    
  // by  using function  

/*function addZero(array){
  
    for (let i = 0; i< array.length; i++) {
        for (let j = -1; j< array.length; j++) {
            if ( i!=j && array[i]+array[j]===0) {
               return true ;
            
        }
            
        }
    
    }
}


let a = addZero([1, 4, 11, 2, 37, -4]);
console.log(a);*/