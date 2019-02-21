function openBurgerMenu() {
  var topnavbar = document.getElementById("TopNav");
  if (topnavbar.className === "navbar") {
    topnavbar.className += " responsive";
  } else {
    topnavbar.className = "navbar";
  }
}

function updateSignInNav() {
  document.getElementById("SignIn").classList.add("active");
  document.getElementById("SignIn").classList.remove("notactive");
  document.getElementById("Home").classList.add("notactive");
  document.getElementById("Home").classList.remove('active');
}

function updateHomeNav() {
  document.getElementById("SignIn").classList.remove("active");
  document.getElementById("SignIn").classList.add("notactive");
  document.getElementById("Home").classList.add('active');
  document.getElementById("Home").classList.remove('notactive');
}

function updateDistance() {
  var x = document.getElementById("distance-bar").value;
  document.getElementById("distance-miles").innerHTML = " " + x + " " + "miles";
}

function updateResults() {
  var x = document.getElementById("loading-bar");
  x.style.display = "inline-block";
  setTimeout(function(){ x.style.display = "none" }, 3000);
}
