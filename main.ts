// this code calculates percentages for 6 subjects.
//subjects: math, english, physics, accounting, economics.

let name1 = "Ali bakhsh"
// total marks
let totalmarks = 850;

let math = 60;
let english = 70;
let phisics = 65;
let accounting = 50;
let economics = 85;

//final result
let resultstatment = ((math + english + phisics + accounting + economics)/totalmarks)*100;
let finalresult = (`student name is:${name1} obtain this percentage:  ${resultstatment} % `);


console.log(finalresult)