// Main JS should go here!
// Include scripts using Browserify by doing:
// var $ = require("jquery");


/* Listen for a transition! */
var navElement = document.getElementsByTagName("nav")[0];
navElement.addEventListener("transitionend", function(e) {
	if(e.propertyName == "top")
        navElement.classList.toggle("nav-open");
});
