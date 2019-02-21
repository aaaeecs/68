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
