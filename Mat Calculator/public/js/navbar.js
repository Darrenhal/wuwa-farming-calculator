function openNav() {
  document.getElementById("navSidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.getElementById("nav-img").style.height = "0px";
  document.getElementById("nav-img").style.marginRight = "0px";
  document.getElementById("nav-img").style.transform = "rotate(180deg)";
  document.getElementById("nav-img").style.transitionDelay = "0s"
}

function closeNav() {
  document.getElementById("navSidebar").style.width = "0px";
  document.getElementById("main").style.marginLeft = "0px"
  document.getElementById("nav-img").style.height = "50px";
  document.getElementById("nav-img").style.marginRight = "20px";
  document.getElementById("nav-img").style.transform = "rotate(0deg)";
  document.getElementById("nav-img").style.transitionDelay = ".15s"
}

function openInventoryNav() {
  openNav();
  document.getElementById("mat-selector").style.marginLeft = "250px";
}

function closeInventoryNav() {
  closeNav();
  document.getElementById("mat-selector").style.marginLeft = "0px";
}

function promptLogin() {
  document.getElementById("login-section").style.height = "230px";
  document.getElementById("login-section").style.padding = "20px 1000px";
  document.getElementById("login-area").style.visibility = "visible";
  document.getElementById("login-area").style.height = "230px";
  document.getElementById("username-input").style.visibility = "visible";
  document.getElementById("pwd-input").style.visibility = "visible";
  document.getElementById("login-btn").style.visibility = "visible";

  document.getElementById("login-img").style.transform = "rotate(0deg)";
  document.getElementById("login-img").onclick = promptLogout;
}

function promptLogout() {
  document.getElementById("login-section").style.height = "0px";
  document.getElementById("login-section").style.padding = "0px 1000px";
  document.getElementById("login-area").style.visibility = "hidden";
  document.getElementById("login-area").style.height = "0px";
  document.getElementById("username-input").style.visibility = "hidden";
  document.getElementById("pwd-input").style.visibility = "hidden";
  document.getElementById("login-btn").style.visibility = "hidden";

  document.getElementById("login-img").style.transform = "rotate(180deg)";
  document.getElementById("login-img").onclick = promptLogin;
}