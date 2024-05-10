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
console.log(finalresult);
