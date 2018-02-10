// Main JS should go here!
// Include scripts using Browserify by doing:
//import $ from "jquery";

let body = document.querySelector('body');
let heroContainer = document.querySelector(".hero-container");
let navBar = document.querySelector("nav");
let navControl = document.querySelector('#navControl');

/* Listen for a transition! */
navBar.addEventListener("transitionend", function(e) {
	if(e.propertyName == "top") {
        navBar.classList.toggle("nav-open");
        body.classList.toggle('nav-open');
    }
}, false);


window.addEventListener('scroll', function() {
    if(window.pageYOffset >= heroContainer.offsetHeight)
        navBar.classList.add('sticky');
    else
        navBar.classList.remove('sticky');
});

window.addEventListener('resize', function() {
    if(window.innerWidth > 768) {
        if(window.pageYOffset < heroContainer.offsetHeight)
            navBar.classList.remove('sticky');

        if(body.classList.contains('nav-open')) {
            body.classList.remove('nav-open');
            navBar.classList.remove("nav-open");
        }

        if(navControl.checked)
            navControl.checked = false;
    }
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

                //console.log(found);
            }
        }
    }
    rawFile.send(null);
}

readTextFile("schedule.html")
