// this code calculates percentages for 6 subjects.
//subjects: math, english, physics, accounting, economics.
var name1 = "Ali bakhsh";
// total marks
var totalmarks = 850;
var math = 60;
var english = 70;
var phisics = 65;
var accounting = 50;
var economics = 85;
//final result
var resultstatment = ((math + english + phisics + accounting + economics) / totalmarks) * 100;
var finalresult = ("student name is:".concat(name1, " obtain this percentage:  ").concat(resultstatment, " % "));
var grade1 = resultstatment > 90;
console.log("grade1:", grade1);
var grade2 = resultstatment > 80;
console.log("grade2", grade2);
var grade3 = resultstatment > 70;
console.log("grade3", grade3);
var grade4 = resultstatment > 60;
console.log("grade4", grade4);
console.log(finalresult);
