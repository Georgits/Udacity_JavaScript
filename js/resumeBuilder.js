/*
$("#main").append("My name is Georgi Tsertsvadze");

var awesomeThougths=" and I am awesome!";
var funThougths=awesomeThougths.replace("awesome", "fun");
console.log(awesomeThougths);
console.log(funThougths);
$("#main").append(funThougths);

*/

var formattedName=HTMLheaderName.replace("%data%", "Georgi Tsertsvadze");

var role = "Data Scientist";
var formattedRole=HTMLheaderRole.replace("%data%", role);


$("#header").prepend(formattedName);
$("#header").prepend(formattedRole);


/*
Exception: TypeError: $(...).append is not a function
@Scratchpad/3:1:1
*/