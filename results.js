var z = "";
var filtertitle = "";
var filterdescription = "";
var filterimage = "";

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
var popuppresent = 0;
var countforsign = 0;



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
  AboutComingSoon();
}
function updateSignInNav() {
  document.getElementById("About").classList.remove("active");
  document.getElementById("About").classList.add("notactive");
  document.getElementById("SignIn").classList.add("active");
  document.getElementById("SignIn").classList.remove("notactive");
  document.getElementById("Home").classList.add("notactive");
  document.getElementById("Home").classList.remove('active');
  SignInComingSoon();
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
  document.getElementById("bb").classList.add("stop-scrolling");
  var x = document.getElementById("loading-bar");
  var y = document.getElementById("loading-blank");
  x.style.display = "inline-block";
  y.style.display = "inline-block";
  updateTags();
  if (popuppresent == 0){
  setTimeout(function(){ x.style.display = "none" }, 3000);
  setTimeout(function(){ y.style.display = "none" }, 3000);
  setTimeout(function(){document.getElementById("bb").classList.remove("stop-scrolling");}, 3000);
}
  document.getElementById("UpdateButton").classList.add("UpdateResultsGrey")
  document.getElementById("UpdateButton").classList.remove("UpdateResults")
}

function changeButton() {
  document.getElementById("UpdateButton").classList.remove("UpdateResultsGrey")
  document.getElementById("UpdateButton").classList.add("UpdateResults")
}
var eventtitles = ["Volunteer at Evanston Hospital", "Primary School Homework Club", "Housing Drive", "Coffee Visits", "Teaching Assistant", "Patient Care Volunteer", "Kids in Action", "Food Drive", "Friend in Need", "Teach Kids STEM"];
var eventdescriptions = ["We are looking for five passionate and hardworking individuals to assist our doctors twice a week with various medical tasks.", "Evanston Primary School is looking for volunteers to lead a homework club once a week from 3 until 5pm after school.", "We are looking for volunteers to help work in the homeless housing office in Chicago", "Evanston residents are looking for you - to give up 30 mins and have a chat!", "Evanston Public School is looking for a math teaching assistant.", "We are looking for able bodies to spend time to build up the confidence of our patients.", "Looking for volunteers committed to mentoring children and activites they are able to engage in.", "Need Volunteers to help organize food for the homeless.", "Searching for people to give company to a wonderful group of elders.", "Looking for people to regularly teach STEM to kids with less priveliges"];
var datetitles = ["Date: Starting tomorrow!!", "Date: This Thursday from 3pm - 5pm", "Date: Wednesday, 6pm", "Date: Next Tuesday, 3pm", "Date: Mondays at 2pm", "Date: Sundays at 12pm", "Date: Saturdays at 2pm", "Date: Wednesday at 5pm", "Date: Sundays at 10am", "Date: Mondays at 6pm"];
var tagtitles = ["Health and Medicine", "Children and Youth", "Homeless and Housing", "Seniors", "Education and Literacy", "Health and Medicine", "Children and Youth", "Homeless and Housing", "Seniors", "Education and Literacy"];
var imglink = ["images/rawpixel-760103-unsplash.jpg", "images/thomas-young-634092-unsplash.jpg", "images/matt-collamer-555626-unsplash.jpg", "images/ap-x-90-395258-unsplash.jpg", "images/nikhita-s-615116-unsplash.jpg", "images/rawpixel-760103-unsplash.jpg", "images/thomas-young-634092-unsplash.jpg", "images/matt-collamer-555626-unsplash.jpg", "images/ap-x-90-395258-unsplash.jpg", "images/nikhita-s-615116-unsplash.jpg"];
var remaining = ["4", "12", "2", "3", "5","4", "12", "2", "3", "5" ]

function validateForm() {
  var a = document.forms["myForm"]["first-name-entry"].value;
  var b = document.forms["myForm"]["last-name-entry"].value;
  var c = document.forms["myForm"]["email-entry"].value;
  var d = document.forms["myForm"]["phone-number"].value;
  if (a == "") {
    alert("First Name must be filled out");
    document.forms["myForm"]["first-name-entry"].value = "";
    return false;
  }
  if (Number.isInteger(parseInt(a))) {
    alert("First name cannot be a number");
    document.forms["myForm"]["first-name-entry"].value = "";
    return false;
  }
  if (b == "") {
    alert("Last name must be filled out");
    document.forms["myForm"]["last-name-entry"].value = "";
    return false;
  }
  if (Number.isInteger(parseInt(b))) {
    alert("Last name cannot be a number");
    document.forms["myForm"]["last-name-entry"].value = "";
    return false;
  }
  if (c == "") {
    alert("Email must be filled out");
    document.forms["myForm"]["email-entry"].value = "";
    return false;
  }
  if (Number.isInteger(parseInt(c))) {
    alert("Email field cannot be a number");
    document.forms["myForm"]["email-entry"].value = "";
    return false;
  }
  if (d == "") {
    alert("Phone number must be filled out");
    document.forms["myForm"]["phone-number"].value = "";
    return false;
  }
  var x = parseInt(d);
  if (isNaN(x)) {
    alert("Phone number must be a number");
    document.forms["myForm"]["phone-number"].value = "";
    return false;
  }
  if (d.length != 10) {
    alert("Phone number must be 10 digits");
    document.forms["myForm"]["phone-number"].value = "";
    return false;
  }

  success();
  document.forms["myForm"]["first-name-entry"].value = "";
  document.forms["myForm"]["last-name-entry"].value = "";
  document.forms["myForm"]["email-entry"].value = "";
  document.forms["myForm"]["phone-number"].value = "";
  return false;
}



function advocacy() {
  advocacybool = true;
  z = advocacytag;
  filtertitle = eventtitles[9];
  filterdescription = eventdescriptions[9];
  filterimage = imglink[9];

  changeButton();
}

function animals() {
  animalsbool = true;
  z = animalstag;
  filtertitle = eventtitles[2];
  filterdescription = eventdescriptions[2];
  filterimage = imglink[2];
  changeButton();
}

function childrenfunc() {
  childrenbool = true;
  z = childrentag;
  filtertitle = eventtitles[6];
  filterdescription = eventdescriptions[6];
  filterimage = imglink[6];

  changeButton();
}

function disaster() {
  disasterbool = true;
  z = disastertag;
  filtertitle = eventtitles[2];
  filterdescription = eventdescriptions[2];
  filterimage = imglink[2];

  changeButton();
}

function education() {
  educationbool = true;
  z = educationtag;
  filtertitle = eventtitles[4];
  filterdescription = eventdescriptions[4];
  filterimage = imglink[4];
  changeButton();
}

function health() {
  healthbool = true;
  z = healthtag;
  filtertitle = eventtitles[5];
  filterdescription = eventdescriptions[5];
  filterimage = imglink[5];
  changeButton();
}

function homelessness() {
  homelessnessbool = true;
  z = homelessnesstag;
  filtertitle = eventtitles[2];
  filterdescription = eventdescriptions[2];
  filterimage = imglink[2];
  changeButton();
}

function seniors() {
  seniorsbool = true;
  filtertitle = eventtitles[3];
  filterdescription = eventdescriptions[3];
  filterimage = imglink[3];
  z = seniorstag;
  changeButton();
}

function veterans() {
  veteransbool = true;
  filtertitle = eventtitles[3];
  filterdescription = eventdescriptions[3];
  filterimage = imglink[3];
  z = veteranstag;
  changeButton();
}

function updateTags() {
  if (Thisweekactive == 1) {
    document.getElementById("date1").innerHTML = "This Thursday";
    document.getElementById("date2").innerHTML = "This Wednesday";
    document.getElementById("date1").style.color = "black";
    document.getElementById("date2").style.color = "black";
    document.getElementById("TomorrowEventCard").style.border = "none";
    document.getElementById("ThisWeekEventCard").style.border = "none";
    document.getElementById("date3").innerHTML = "Date: This Thursday";
    document.getElementById("date4").innerHTML = "Date: This Wednesday";
    document.getElementById("date5").innerHTML = "Date: This Friday";
    document.getElementById("date6").innerHTML = "Date: This Saturday";
    document.getElementById("date7").innerHTML = "Date: This Sunday";
    document.getElementById("date8").innerHTML = "Date: This Monday";
    document.getElementById("date9").innerHTML = "Date: This Tuesday";
    document.getElementById("date10").innerHTML = "Date: This Wednesday";
  }
  if (Thismonthactive == 1) {
    document.getElementById("date1").innerHTML = "Next Thursday";
    document.getElementById("date2").innerHTML = "This Wednesday";
    document.getElementById("date1").style.color = "black";
    document.getElementById("date2").style.color = "black";
    document.getElementById("TomorrowEventCard").style.border = "none";
    document.getElementById("ThisWeekEventCard").style.border = "none";
    document.getElementById("date3").innerHTML = "Date: Next Thursday";
    document.getElementById("date4").innerHTML = "Date: Next Wednesday";
    document.getElementById("date5").innerHTML = "Date: This Friday";
    document.getElementById("date6").innerHTML = "Date: This Saturday";
    document.getElementById("date7").innerHTML = "Date: Next Sunday";
    document.getElementById("date8").innerHTML = "Date: Next Monday";
    document.getElementById("date9").innerHTML = "Date: This Tuesday";
    document.getElementById("date10").innerHTML = "Date: This Wednesday";
  }

  if (Nextmonthactive == 1) {
    document.getElementById("date1").innerHTML = "April 12";
    document.getElementById("date2").innerHTML = "April 18";
    document.getElementById("date1").style.color = "black";
    document.getElementById("date2").style.color = "black";
    document.getElementById("TomorrowEventCard").style.border = "none";
    document.getElementById("ThisWeekEventCard").style.border = "none";
    document.getElementById("date3").innerHTML = "Date: April 12";
    document.getElementById("date4").innerHTML = "Date: April 14";
    document.getElementById("date5").innerHTML = "Date: May 3";
    document.getElementById("date6").innerHTML = "Date: April 22";
    document.getElementById("date7").innerHTML = "Date: April 28";
    document.getElementById("date8").innerHTML = "Date: May 1";
    document.getElementById("date9").innerHTML = "Date: May 18";
    document.getElementById("date10").innerHTML = "Date: April 13";
  }
  if (z != ""){
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
if (filterimage != ""){
document.getElementById("image1").src = filterimage;
document.getElementById("image2").src = filterimage;
document.getElementById("image3").src = filterimage;
document.getElementById("image4").src = filterimage;
document.getElementById("image5").src = filterimage;
document.getElementById("image6").src = filterimage;
document.getElementById("image7").src = filterimage;
document.getElementById("image8").src = filterimage;
document.getElementById("image9").src = filterimage;
document.getElementById("image10").src = filterimage;
}
if (filterdescription != ""){
document.getElementById("description1").innerHTML = filterdescription;
document.getElementById("description2").innerHTML = filterdescription;
document.getElementById("description3").innerHTML = filterdescription;
document.getElementById("description4").innerHTML = filterdescription;
document.getElementById("description5").innerHTML = filterdescription;
document.getElementById("description6").innerHTML = filterdescription;
document.getElementById("description7").innerHTML = filterdescription;
document.getElementById("description8").innerHTML = filterdescription;
document.getElementById("description9").innerHTML = filterdescription;
document.getElementById("description10").innerHTML = filterdescription;
}
if (filtertitle != ""){
document.getElementById("title1").innerHTML = filtertitle;
document.getElementById("title2").innerHTML = filtertitle;
document.getElementById("title3").innerHTML = filtertitle;
document.getElementById("title4").innerHTML = filtertitle;
document.getElementById("title5").innerHTML = filtertitle;
document.getElementById("title6").innerHTML = filtertitle;
document.getElementById("title7").innerHTML = filtertitle;
document.getElementById("title8").innerHTML = filtertitle;
document.getElementById("title9").innerHTML = filtertitle;
document.getElementById("title10").innerHTML = filtertitle;
}
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
  popuppresent = 1;
  //y.addEventListener('scroll', noscroll);

}

function revealEvent2() {
  //var x = document.getElementById("popUpEvent");
  //var y = document.getElementById("bb");
  var z = document.getElementById("bb");
  var x = document.getElementById("moremore2");

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
  popuppresent = 1;
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
  popuppresent = 1;
  //y.addEventListener('scroll', noscroll);

}

function disappearEvent() {
  var j = document.getElementById("bb");
  var x = document.getElementById("moremore");
  //var a = document.getElementById("moremore2");
  var z = document.getElementById("loading-blank");
  //x.classList.add("animationout");
  //z.classList.add("animationout");
  x.classList.remove("animationpop");
  j.classList.remove("stop-scrolling");
  z.classList.remove("animationpop");

  x.style.visibility = "hidden";
  x.style.display = "none";
  //a.style.visibility = "hidden";
  //a.style.display = "none";
  //window.location.hash = "bottomresults";
  var elmnt = document.getElementById("MainResults");
  elmnt.style.height = "2000px";
  var y = document.getElementById("sign-up");
  y.innerHTML = "Sign Up!"
  z.style.display = "none";
  popuppresent = 0;
  //document.getElementById("email-confirmation") = "You will receive an email confirmation shortly...";
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
  popuppresent = 0;
  //x.classList.remove("animationout");
  //z.classList.remove("animationout");
  countforsign = 0


}

function moveScreen() {
  var y = document.getElementById("search-bar-filter");
  var x = document.getElementById("search-bar-filter-origin");
  var elmnt = document.getElementById("MainResults");
  elmnt.scrollIntoView();
  y.value = x.value;

  //window.location = "#moremoremore";
}



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
    var y = document.getElementById("name-entry").value
    var z = document.getElementById("personalized")
    var email = document.getElementById("email-notif");
    z.innerHTML = y + ", you're signed up!!!";
    x.innerHTML = "Success!"
    x.style.background = "#E0E0E0";
    x.style.color = '#757575';
    if (email.checked == false){
      document.getElementById("email-confirmation").innerHTML = "You will NOT receive an email confirmation..."
    }
    if (email.checked == true){
      document.getElementById("email-confirmation").innerHTML = "You will receive an email confirmation shortly..."
    }
    disappearEvent();
    revealAnything();
    setTimeout(hideGIF, 2000);
}

function AboutComingSoon() {
  var x = document.getElementById("About")
  x.innerHTML = "Coming Soon!"
  setTimeout(function again(){x.innerHTML = "About"}, 5000)
}

function SignInComingSoon() {
  var x = document.getElementById("SignIn")
  x.innerHTML = "Coming Soon!"
  setTimeout(function again2(){x.innerHTML = "Sign In"}, 5000)
}



var box1 = false;
var box2 = false;
var box3 = false;
var box4 = false;
var box5 = false;
var box6 = false;
var box7 = false;
var box8 = false;
var box9 = false;
var box10 = false;

function popbox1() {
  revealEvent();
  //var v = document.getElementById("tagpop");

  var w = document.getElementById("popimg");
  var x = document.getElementById("titlepop");
  var y = document.getElementById("datepop");
  var z = document.getElementById("descriptionpop");
  //v.innerHTML = tagtitles[1];
  var v = document.getElementById("remainingpop");
  v.innerHTML = "There are " + remaining[0] + " spots remaining for this event!";
  w.src = imglink[0];
  x.innerHTML = eventtitles[0];
  y.innerHTML = datetitles[0];
  z.innerHTML = eventdescriptions[0];
}

function popbox2() {
  revealEvent();
  //var v = document.getElementById("tagpop");
  var w = document.getElementById("popimg")
  var x = document.getElementById("titlepop");
  var y = document.getElementById("datepop");
  var z = document.getElementById("descriptionpop");
  var v = document.getElementById("remainingpop");
  v.innerHTML = "There are " + remaining[1] + " spots remaining for this event!";
  //v.innerHTML = tagtitles[1];
  w.src = imglink[1];
  x.innerHTML = eventtitles[1];
  y.innerHTML = datetitles[1];
  z.innerHTML = eventdescriptions[1];
}
function popbox3() {
  revealEvent();
  //var v = document.getElementById("tagpop");
  var w = document.getElementById("popimg")
  var x = document.getElementById("titlepop");
  var y = document.getElementById("datepop");
  var z = document.getElementById("descriptionpop");
  var v = document.getElementById("remainingpop");
  v.innerHTML = "There are " + remaining[2] + " spots remaining for this event!";
  //v.innerHTML = tagtitles[1];
  w.src = imglink[2];
  x.innerHTML = eventtitles[2];
  y.innerHTML = datetitles[2];
  z.innerHTML = eventdescriptions[2];
}
function popbox4() {
  revealEvent();
  //var v = document.getElementById("tagpop");
  var w = document.getElementById("popimg")
  var x = document.getElementById("titlepop");
  var y = document.getElementById("datepop");
  var z = document.getElementById("descriptionpop");
  var v = document.getElementById("remainingpop");
  v.innerHTML = "There are " + remaining[3] + " spots remaining for this event!";
  //v.innerHTML = tagtitles[1];
  w.src = imglink[3];
  x.innerHTML = eventtitles[3];
  y.innerHTML = datetitles[3];
  z.innerHTML = eventdescriptions[3];

}
function popbox5() {
  revealEvent();
  //var v = document.getElementById("tagpop");
  var w = document.getElementById("popimg")
  var x = document.getElementById("titlepop");
  var y = document.getElementById("datepop");
  var z = document.getElementById("descriptionpop");
  var v = document.getElementById("remainingpop");
  v.innerHTML = "There are " + remaining[4] + " spots remaining for this event!";
  //v.innerHTML = tagtitles[1];
  w.src = imglink[4];
  x.innerHTML = eventtitles[4];
  y.innerHTML = datetitles[4];
  z.innerHTML = eventdescriptions[4];
}
function popbox6() {
  revealEvent();
  //var v = document.getElementById("tagpop");
  var w = document.getElementById("popimg")
  var x = document.getElementById("titlepop");
  var y = document.getElementById("datepop");
  var z = document.getElementById("descriptionpop");
  var v = document.getElementById("remainingpop");
  v.innerHTML = "There are " + remaining[5] + " spots remaining for this event!";
  //v.innerHTML = tagtitles[1];
  w.src = imglink[5];
  x.innerHTML = eventtitles[5];
  y.innerHTML = datetitles[5];
  z.innerHTML = eventdescriptions[5];
}
function popbox7() {
  revealEvent();
  //var v = document.getElementById("tagpop");
  var w = document.getElementById("popimg")
  var x = document.getElementById("titlepop");
  var y = document.getElementById("datepop");
  var z = document.getElementById("descriptionpop");
  var v = document.getElementById("remainingpop");
  v.innerHTML = "There are " + remaining[6] + " spots remaining for this event!";
  //v.innerHTML = tagtitles[1];
  w.src = imglink[6];
  x.innerHTML = eventtitles[6];
  y.innerHTML = datetitles[6];
  z.innerHTML = eventdescriptions[6];
}
function popbox8() {
  revealEvent();
  //var v = document.getElementById("tagpop");
  var w = document.getElementById("popimg")
  var x = document.getElementById("titlepop");
  var y = document.getElementById("datepop");
  var z = document.getElementById("descriptionpop");
  var v = document.getElementById("remainingpop");
  v.innerHTML = "There are " + remaining[7] + " spots remaining for this event!";
  //v.innerHTML = tagtitles[1];
  w.src = imglink[7];
  x.innerHTML = eventtitles[7];
  y.innerHTML = datetitles[7];
  z.innerHTML = eventdescriptions[7];
}
function popbox9() {
  revealEvent();
  //var v = document.getElementById("tagpop");
  var w = document.getElementById("popimg")
  var x = document.getElementById("titlepop");
  var y = document.getElementById("datepop");
  var z = document.getElementById("descriptionpop");
  var v = document.getElementById("remainingpop");
  v.innerHTML = "There are " + remaining[8] + " spots remaining for this event!";
  //v.innerHTML = tagtitles[1];
  w.src = imglink[8];
  x.innerHTML = eventtitles[8];
  y.innerHTML = datetitles[8];
  z.innerHTML = eventdescriptions[8];
}
function popbox10() {
  revealEvent();
  //var v = document.getElementById("tagpop");
  var w = document.getElementById("popimg")
  var x = document.getElementById("titlepop");
  var y = document.getElementById("datepop");
  var z = document.getElementById("descriptionpop");
  var v = document.getElementById("remainingpop");
  v.innerHTML = "There are " + remaining[9] + " spots remaining for this event!";
  //v.innerHTML = tagtitles[1];
  w.src = imglink[9];
  x.innerHTML = eventtitles[9];
  y.innerHTML = datetitles[9];
  z.innerHTML = eventdescriptions[9];
}
