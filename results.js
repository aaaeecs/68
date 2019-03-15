var z = "";
//For updating tags - project_7
var advocacytag = "Advocacy and Human Rights";
var animalstag = "Animals";
var childrentag = "Children and Youth";
var disastertag = "Disaster Relief";
var educationtag = "Education and Literacy";
var healthtag = "Health and Medicine";
var homelessnesstag = "Homelesness and Housing";
var seniorstag = "Seniors";
var veteranstag = "Veterans";

var advocacybool = false;
var animalsbool = false;
var childrenbool = false;
var disasterbool = false;
var educationbool = false;
var healthbool = false;
var homelessnessbool = false;
var seniorsbool = false;
var veteransbool = false;


function openBurgerMenu() {
  var topnavbar = document.getElementById("TopNav");
  if (topnavbar.className === "navbar") {
    topnavbar.className += " responsive";
  } else {
    topnavbar.className = "navbar";
  }
}
function updateAboutNav() {
  document.getElementById("About").classList.add("active");
  document.getElementById("About").classList.remove("notactive");
  document.getElementById("SignIn").classList.remove("active");
  document.getElementById("SignIn").classList.add("notactive");
  document.getElementById("Home").classList.add("notactive");
  document.getElementById("Home").classList.remove('active');
}
function updateSignInNav() {
  document.getElementById("About").classList.remove("active");
  document.getElementById("About").classList.add("notactive");
  document.getElementById("SignIn").classList.add("active");
  document.getElementById("SignIn").classList.remove("notactive");
  document.getElementById("Home").classList.add("notactive");
  document.getElementById("Home").classList.remove('active');
}

function updateHomeNav() {
  document.getElementById("About").classList.remove("active");
  document.getElementById("About").classList.add("notactive");
  document.getElementById("SignIn").classList.remove("active");
  document.getElementById("SignIn").classList.add("notactive");
  document.getElementById("Home").classList.add('active');
  document.getElementById("Home").classList.remove('notactive');
}

function updateDistance() {
  document.getElementById("UpdateButton").classList.remove("UpdateResultsGrey")
  document.getElementById("UpdateButton").classList.add("UpdateResults")
  var x = document.getElementById("distance-bar").value;
  document.getElementById("distance-miles").innerHTML = "Up to " + x + " " + "miles";
}


function updateResults() {
  var x = document.getElementById("loading-bar");
  var y = document.getElementById("loading-blank");
  x.style.display = "inline-block";
  y.style.display = "inline-block";
  updateTags();
  setTimeout(function(){ x.style.display = "none" }, 3000);
  setTimeout(function(){ y.style.display = "none" }, 3000);
  document.getElementById("UpdateButton").classList.add("UpdateResultsGrey")
  document.getElementById("UpdateButton").classList.remove("UpdateResults")
}

function changeButton() {
  document.getElementById("UpdateButton").classList.remove("UpdateResultsGrey")
  document.getElementById("UpdateButton").classList.add("UpdateResults")
}

function advocacy() {
  advocacybool = true;
  z = advocacytag;
  changeButton();
}

function animals() {
  animalsbool = true;
  z = animalstag;
  changeButton();
}

function childrenfunc() {
  childrenbool = true;
  z = childrentag;
  changeButton();
}

function disaster() {
  disasterbool = true;
  z = disastertag;
  changeButton();
}

function education() {
  educationbool = true;
  z = educationtag;
  changeButton();
}

function health() {
  healthbool = true;
  z = healthtag;
  changeButton();
}

function homelessness() {
  homelessnessbool = true;
  z = homelessnesstag;
  changeButton();
}

function seniors() {
  seniorsbool = true;
  z = seniorstag;
  changeButton();
}

function veterans() {
  veteransbool = true;
  z = veteranstag;
  changeButton();
}

function updateTags() {
  document.getElementById("tag1").innerHTML = z;
  document.getElementById("tag2").innerHTML = z;
  document.getElementById("tag3").innerHTML = z;
  document.getElementById("tag4").innerHTML = z;
  document.getElementById("tag5").innerHTML = z;
  document.getElementById("tag6").innerHTML = z;
  document.getElementById("tag7").innerHTML = z;
  document.getElementById("tag8").innerHTML = z;
  document.getElementById("tag9").innerHTML = z;
  document.getElementById("tag10").innerHTML = z;
}

function searchUpdateTags() {
  z = document.getElementById("search-bar-filter").value;
  updateResults();
}

function updateButton1Text() {
  document.getElementById("button1").style.transition = "all 2s";
  document.getElementById("button1").innerHTML = "There are still 5 spots available. Register your interest today!";
}

function returnButton1Text() {
  document.getElementById("button1").innerHTML = "Find out more...";
}

var Thisweekactive = 0;
var Thismonthactive = 0;
var Nextmonthactive = 0;

function updateThisweek() {


  if (Thisweekactive == 0) {
  document.getElementById("Thisweek").classList.remove("time-button")
  document.getElementById("Thisweek").classList.add("time-button-active")
  Thisweekactive = 1;
} else {
  document.getElementById("Thisweek").classList.add("time-button")
  document.getElementById("Thisweek").classList.remove("time-button-active")
  Thisweekactive = 0;
}
  changeButton();
}

function updateThismonth() {

  if (Thismonthactive == 0) {
  document.getElementById("Thismonth").classList.remove("time-button")
  document.getElementById("Thismonth").classList.add("time-button-active")
  Thismonthactive = 1;
} else {
  document.getElementById("Thismonth").classList.add("time-button")
  document.getElementById("Thismonth").classList.remove("time-button-active")
  Thismonthactive = 0;
}
  changeButton();
}

function updateNextmonth() {

  if (Nextmonthactive == 0) {
  document.getElementById("Nextmonth").classList.remove("time-button")
  document.getElementById("Nextmonth").classList.add("time-button-active")
  Nextmonthactive = 1;
} else {
  document.getElementById("Nextmonth").classList.add("time-button")
  document.getElementById("Nextmonth").classList.remove("time-button-active")
  Nextmonthactive = 0;
}
  changeButton();
}

function sticktothetop() {
    var window_top = $(window).scrollTop();
    var top = $('#stick-here').offset().top;
    if ((window_top+30) > top) {
        $('#MainFilter').addClass('stick');
        $('#stick-here').height($('#stickThis').outerHeight());
    } else {
        $('#MainFilter').removeClass('stick');
        $('#stick-here').height(0);
    }
}
$(function() {
    $(window).scroll(sticktothetop);
    sticktothetop();
});

function revealEvent() {
  //var x = document.getElementById("popUpEvent");
  //var y = document.getElementById("bb");
  var z = document.getElementById("bb");
  var x = document.getElementById("moremore");

  x.classList.add("animationpop");
  x.style.visibility = "visible";
  x.style.display = "inline-block";
  //window.location.hash = "#moremoremore";
  var elmnt = document.getElementById("MainResults");
  elmnt.style.height = "2000px";
  var y = document.getElementById("loading-blank");
  y.style.display = "inline-block";
  y.classList.add("animationpop");
  z.classList.add("stop-scrolling");
  //y.addEventListener('scroll', noscroll);

}

function revealAnything() {
  //var x = document.getElementById("popUpEvent");
  //var y = document.getElementById("bb");
  var z = document.getElementById("bb");
  var x = document.getElementById("anything");

  x.classList.add("animationpop");
  x.style.visibility = "visible";
  x.style.display = "inline-block";
  //window.location.hash = "#moremoremore";
  var elmnt = document.getElementById("MainResults");
  elmnt.style.height = "2000px";
  var y = document.getElementById("loading-blank");
  y.style.display = "inline-block";
  y.classList.add("animationpop");
  z.classList.add("stop-scrolling");
  //y.addEventListener('scroll', noscroll);

}

function disappearEvent() {
  var j = document.getElementById("bb");
  var x = document.getElementById("moremore");
  var z = document.getElementById("loading-blank");
  //x.classList.add("animationout");
  //z.classList.add("animationout");
  x.classList.remove("animationpop");
  j.classList.remove("stop-scrolling");
  z.classList.remove("animationpop");

  x.style.visibility = "hidden";
  x.style.display = "none";
  //window.location.hash = "bottomresults";
  var elmnt = document.getElementById("MainResults");
  elmnt.style.height = "2000px";
  var y = document.getElementById("sign-up");
  y.innerHTML = "Sign Up!"
  z.style.display = "none";
  //x.classList.remove("animationout");
  //z.classList.remove("animationout");


}

function disappearAnything() {
  var j = document.getElementById("bb");
  var x = document.getElementById("anything");
  var z = document.getElementById("loading-blank");
  //x.classList.add("animationout");
  //z.classList.add("animationout");
  x.classList.remove("animationpop");
  j.classList.remove("stop-scrolling");
  z.classList.remove("animationpop");

  x.style.visibility = "hidden";
  x.style.display = "none";
  //window.location.hash = "bottomresults";
  var elmnt = document.getElementById("MainResults");
  elmnt.style.height = "2000px";
  var y = document.getElementById("sign-up");
  y.innerHTML = "Sign Up!"
  z.style.display = "none";
  //x.classList.remove("animationout");
  //z.classList.remove("animationout");


}

function moveScreen() {
  var y = document.getElementById("search-bar-filter");
  var x = document.getElementById("search-bar-filter-origin");
  var elmnt = document.getElementById("MainResults");
  elmnt.scrollIntoView();
  y.value = x.value;

  //window.location = "#moremoremore";
}

var countforsign = 0;

function incrementCount() {
  var x = document.getElementById("sign-up");
  countforsign = countforsign + 1;
  if (countforsign == 3 ){
    x.style.background = "#07f29c";
    x.style.color = 'white';
  }
}

function hideGIF() {
  var x = document.getElementById("check");
  
  var y = document.getElementById("holdcheck");
  y.style.display = "inline-block";
  x.style.display = "none";
}

function success() {
    var x = document.getElementById("sign-up");
    x.innerHTML = "Success!"
    x.style.background = "#E0E0E0";
    x.style.color = '#757575';
    
    disappearEvent();
    revealAnything();
    setTimeout(hideGIF, 2000);
}
