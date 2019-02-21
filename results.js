
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
  document.getElementById("distance-miles").innerHTML = " " + x + " " + "miles";
}


function updateResults() {
  var x = document.getElementById("loading-bar");
  var y = document.getElementById("loading-blank");
  x.style.display = "inline-block";
  y.style.display = "inline-block";
  setTimeout(function(){ x.style.display = "none" }, 3000);
  setTimeout(function(){ y.style.display = "none" }, 3000);
  document.getElementById("UpdateButton").classList.add("UpdateResultsGrey")
  document.getElementById("UpdateButton").classList.remove("UpdateResults")
}

function changeButton() {
  document.getElementById("UpdateButton").classList.remove("UpdateResultsGrey")
  document.getElementById("UpdateButton").classList.add("UpdateResults")
}
