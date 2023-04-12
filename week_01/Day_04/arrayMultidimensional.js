//Create a Multidimensional Array
let student1 = ['Jack', 24];
let student2 = ['Sara', 23];
let student3 = ['Peter', 24];

// multidimensional array
let studentsData = [student1, student2, student3];
//Access Elements of an Array

// access the first item 
console.log(x[0]);
// access the first item of the first inner array
console.log(x[0][0]);

// access the second item of the third inner array
console.log(x[2][1]);


//Adding Element to the Outer Array
let studentsData1 = [['Jack', 24], ['Sara', 23],];
studentsData1.push(['Peter', 24]);

console.log(studentsData1); //[["Jack", 24], ["Sara", 23], ["Peter", 24]


//Adding Element to the Inner Array
// using index notation
let studentsData2 = [['Jack', 24], ['Sara', 23],];
studentsData2[1][2] = 'hello';

console.log(studentsData2); // [["Jack", 24], ["Sara", 23, "hello"]]

// using push()
let studentsData3 = [['Jack', 24], ['Sara', 23],];
studentsData3[1].push('hello');

console.log(studentsData3); // [["Jack", 24], ["Sara", 23, "hello"]]

//You can also use the Array's splice() method to add an element at a specified index. For example,
let studentsData4 = [['Jack', 24], ['Sara', 23],];

// adding element at 1 index
studentsData4.splice(1, 0, ['Peter', 24]);

console.log(studentsData4); // [["Jack", 24], ["Peter", 24], ["Sara", 23]]

//Remove an Element from a Multidimensional Array
// remove the array element from outer array
studentsData = [['Jack', 24], ['Sara', 23],];
studentsData.pop();

console.log(studentsData); // [["Jack", 24]]

//Remove Element from Inner Array
studentsData = [['Jack', 24], ['Sara', 23]];
studentsData[1].pop();

console.log(studentsData); // [["Jack", 24], ["Sara"]]

//You can also use the splice() method to remove an element at a specified index. For example,
studentsData = [['Jack', 24], ['Sara', 23],];

// removing 1 index array item
studentsData.splice(1,1);
console.log(studentsData); // [["Jack", 24]]

//Iterating over Multidimensional Array
//You can iterate over a multidimensional array using the Array's forEach() method to iterate over the multidimensional array. For example
studentsData = [['Jack', 24], ['Sara', 23],];

// iterating over the studentsData
studentsData.forEach((student) => {
    student.forEach((data) => {
        console.log(data);
    });
});

//The first forEach() method is used to iterate over the outer array elements and the second forEach() is used to iterate over the inner array elements.

//You can also use the for...of loop to iterate over the multidimensional array

studentsData = [['Jack', 24], ['Sara', 23],];

for (let i of studentsData) {
  for (let j of i) {
    console.log(j);
  }
}

//You can also use the for loop to iterate over a multidimensional array. 
 studentsData = [['Jack', 24], ['Sara', 23],];

// looping outer array elements
for(let i = 0; i < studentsData.length; i++){

    // get the length of the inner array elements
    let innerArrayLength = studentsData[i].length;
    
    // looping inner array elements
    for(let j = 0; j < innerArrayLength; j++) {
        console.log(studentsData[i][j]);
    }
}