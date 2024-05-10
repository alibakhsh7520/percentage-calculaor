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

let grade1 = resultstatment > 90;
console.log("grade1:",grade1);
let grade2 = resultstatment> 80;
console.log("grade2", grade2);
let grade3 = resultstatment > 70;
console.log("grade3", grade3);
let grade4 = resultstatment > 60;
console.log("grade4", grade4);
console.log(finalresult)



 
