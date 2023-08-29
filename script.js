let studentRecords = [ {name: 'John', id: 123, marks : 98 },
            {name: 'Baba', id: 101, marks : 23 },
            {name: 'yaga', id: 200, marks : 45 }, 
            {name: 'Wick', id: 115, marks : 75 } ] ;

// question-1 "We are interested in retrieving only the students' names; 
//  all the names should be in caps.

// ['JOHN', 'BABA', 'YAGA', 'WICK']"


var len=studentRecords.length;
let arr = [];

for(let i=0 ; i<len; i++){

     arr[i] = studentRecords[i].name;
 
}

console.log(arr.join(",").toUpperCase().split(","));








// for(let j of studentRecords){
//     //  arr[i]= [studentRecords.name];
//     console.log(j.name);
// }



// question-2
// "Suppose we have the same dataset as above but this time we want to get the details
//  of students who scored more than 50 marks.

// [{name: 'John', id: 123, marks: 98 },{name: 'Wick', id: 115, marks: 75 }]"

let arr2=[];
for (let i=0; i<studentRecords.length; i++){
    
     if(studentRecords[i].marks>50){
          arr2.push(studentRecords[i]);
     }
}

console.log(arr2);





// question -3  Retrieve the details of students who scored more than 50 marks and have IDs greater than 120.
let arr3=[];
for (let i=0; i<studentRecords.length; i++){
    
     if(studentRecords[i].marks>50 && studentRecords[i].id>120){
          arr3.push(studentRecords[i]);
     }
}

console.log(arr3);


// Question-4 Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students.

let ttl = 0;
for (let i=0; i<studentRecords.length; i++){
    
     if(studentRecords[i].marks>50 ){
          ttl = ttl + studentRecords[i].marks;
     }
}

console.log("Total is ", ttl);


// Question-5 

// This time we want to get only the names of the students who scored more than 50 marks from the same dataset used above.


let studentName=[];
for (let i=0; i<studentRecords.length; i++){
    
     if(studentRecords[i].marks>50 ){

          studentName.push(studentRecords[i].name);
          // console.log(studentRecords[i].name);
     }
}

console.log(studentName);


// Question-6 
// This time we are required to print the sum of marks of the students with id > 120.
let sum = 0;
for (let i=0; i<studentRecords.length; i++){
    
     if(studentRecords[i].id>120 ){

          sum = sum + studentRecords[i].marks;
          // console.log(studentRecords[i].name);
     }
}
console.log("The sum of marks of students having the id greater than 120 is ",sum);



// Question-7 
// This time we are required to print the total marks of the students with marks greater than 50 after a 
// grace of 15 marks has been added to those students who scored less than 50.
let tot = 0;
let tot2=0;
for (let i=0; i<studentRecords.length; i++){
    
     if(studentRecords[i].marks>50 ){

          tot = tot + studentRecords[i].marks;
          // console.log(studentRecords[i].name);
     }

     else {

          tot2=tot2 +15 + studentRecords[i].marks;
     }
}
console.log("The total marks of student greater than 50 is ", tot);
console.log("The total marks of student less than 50 is and adding 15 marks grace is ", tot2);


// Question-8

// Create 6 objects , each object will have name, class, roll no as properties. Store these objects in an array of objects. 

let arrs = new Array(6);
let ob1 = {
     name :"rushikesh",
     class: 1,
     roll_no:124
}

let ob2 = {
     name:"rathod",
     class:2,
     roll_no:199
}

let ob3 = {
     name:"Ganesh",
     class:1,
     roll_no:120
}

let ob4 = {
     name:"Vaishali",
     class:1,
     roll_no:221
}

let ob5 = {
     name:"Ayushman",
     class:2,
     roll_no:139
}

let ob6 ={
     name:"Avinash",
     class:1,
     roll_no:233
}
arrs=[ob1,ob2,ob3,ob4,ob5,ob6];
// console.log(arrs);

for(let ar of arrs){
     console.log(ar);
}