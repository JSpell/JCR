// Main JS should go here!
// Include scripts using Browserify by doing:
// var $ = require("jquery");


/* Listen for a transition! */
var navElement = document.getElementsByTagName("nav")[0];
navElement.addEventListener("transitionend", function(e) {
	if(e.propertyName == "top")
        navElement.classList.toggle("nav-open");
});

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                var found = allText.indexOf('data-schedule="next show"');

                console.log(found);
            }
        }
    }
    rawFile.send(null);
}

readTextFile("schedule.html")
