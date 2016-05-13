
var bio = {
	"welcomeMessage": "Welcome on my page!",
	"name": "Georgi Tsertsvadze",
	"contacts": {
		"address1": "Louisenstr. 70",
		"address2": "61348 Bad Homburg",
		"mobile": "0162-2630085",
		"email": "georgits@yahoo.de"
		},
	"age": 41,
	"role": "Data Scientist",
	"skills": [
		"awesomennes", "programming", "js"
		],
	"location": "Bad Homburg",
	"bioPic": "C:/Users/Georgi/Desktop/Georgi.JPG"
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(formattedName);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(formattedRole);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedBioPic);


var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#header").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#header").append(formattedEmail);

var formattedLocation = HTMLlocation.replace("%data%", bio.location);
$("#header").append(formattedLocation);



if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
$("#skills").append(formattedSkill);
	
var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
$("#skills").append(formattedSkill);

var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
$("#skills").append(formattedSkill);

var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
$("#skills").append(formattedSkill);
}


//var formattedLocation = HTMLlocation.replace("%data%", bio.location);
//$("#location").append(formattedLocation);

var education = {
	"schools": [
		{
			"name": "State University of Tbilisi, Georgia",
			"location": "Tbilisi",
			"degree": "BA Economics",
			"dates": "1992-1994",
			"major": ["Macroeconomics", "International Economics"]
		},
		{
			"name": "Leibniz University of Hanover, Germany",
			"location": "Hanover",
			"degree": "Diplom-Oekonom",
			"dates": "1995-2000",
			"major": ["Econometrics", "labor Economics"]
		}
	],
	"onlineCourses": [
		{
			"title": "Online Course 1",
			"school": "Online Course schooo 1",
			"dates": "Online Course dates 1",
			"url": "http://www.onlinecourse1.com"
		},
		{
			"title": "Online Course 2",
			"school": "Online Course schooo 2",
			"dates": "Online Course dates 2",
			"url": "http://www.onlinecourse2.com"
		}	
	]
}


var work = {
	"jobs": [
	{
		"employer": "FERI EuroRating Services AG",
		"title": "Senior Analyst",
		"location": "Bad Homburg",
		"dates": "2006-2015",
		"description": "Analyzed economics trends"
	},
	{
		"employer": "d-fine",
		"title": "Senior Consultant",
		"location": "Frankfurt",
		"dates": "2015-2016",
		"description": "Analyzed Health Care sector"
	}
	],
	"projects": [
	{
		"employer": "FERI EuroRating Services AG",
		"title": "Senior Analyst",
		"location": "Bad Homburg",
		"dates": "2006-2015",
		"description": "Analyzed economics trends"
	},
	{
		"employer": "d-fine",
		"title": "Senior Consultant",
		"location": "Frankfurt",
		"dates": "2015-2016",
		"description": "Analyzed Health Care sector"
	}
	]

}

function displayWork() {
	for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer+formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
	
	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	$(".work-entry:last").append(formattedLocation);
	
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);

	
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
	
	}
}

displayWork();

var projects = {
	"projects": [
	{
		"title": "Project 1",
		"dates": "XXXX-XXXX",
		"description": "description of project 1",
	"images": [
		"C:/Users/Georgi/Desktop/Ekaterine.JPG", "C:/Users/Georgi/Desktop/Alexander.JPG"
		]
	},
	{
		"title": "Project 2",
		"dates": "YYYY-YYYY",
		"description": "description of project 2",
	"images": [
		"C:/Users/Georgi/Desktop/Sophie.JPG", "C:/Users/Georgi/Desktop/Nathalie.JPG"
		]
	}
	]
}

projects.display = function () {
	for ( project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
	
	var formattedTitle=HTMLprojectTitle.replace("%data%", projects.projects[project].title);
	$(".project-entry:last").append(formattedTitle);
	
	var formattedDates=HTMLprojectDates.replace("%data%", projects.projects[project].dates);
	$(".project-entry:last").append(formattedDates);
	
	var formattedDescription=HTMLprojectDescription.replace("%data%", projects.projects[project].description);
	$(".project-entry:last").append(formattedDescription);

	if (projects.projects[project].images.length>0) {
		for (image in projects.projects[project].images) {
			var formattedImage=HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
			$(".project-entry:last").append(formattedImage);
		}
	}
	}
}

projects.display();



$("#mapDiv").append(googleMap);


/*
funtion locationizer(work_obj) {
	var locationArray = [];
	
	for (job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}
	return locationArray;
}
*/
/*
function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase()+ name[0].slice(1).toLowerCase();
	
	return name[0] + " " + name[1];
}
$("#main").append(internationalizeButton);
*/




/*
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	
	logClicks(x,y);
});

*/







/*
$("#main").append("My name is Georgi Tsertsvadze");

var awesomeThougths=" and I am awesome!";
var funThougths=awesomeThougths.replace("awesome", "fun");
console.log(awesomeThougths);
console.log(funThougths);
$("#main").append(funThougths);

*/

/*var formattedName=HTMLheaderName.replace("%data%", "Georgi Tsertsvadze");

var role = "Data Scientist";
var formattedRole=HTMLheaderRole.replace("%data%", role);
*/

/*var work = {};
work.position = "Senior Consultant";
work.employer = "d-fine";
work.years = 1;


var education = {};
education["name"] = "Leibniz University of Hanover";
education["years"] = "1995-2005";
education["city"] = "Hanover, Lower Saxony, Germany";
$("#main").append(education.name);


$("#header").prepend(formattedName);
$("#header").prepend(formattedRole);
$("#main").append(bio.contacts.address1);
$("#main").append(work["position"]);
*/


/*
Exception: TypeError: $(...).append is not a function
@Scratchpad/3:1:1
*/