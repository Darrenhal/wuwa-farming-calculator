function openNav() {
  document.getElementById("navSidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.getElementById("nav-img").style.height = "0px";
  document.getElementById("nav-img").style.marginRight = "0px";
  document.getElementById("nav-img").style.transform = "rotate(45deg)";
}

function closeNav() {
  document.getElementById("navSidebar").style.width = "0px";
  document.getElementById("main").style.marginLeft = "0px"
  document.getElementById("nav-img").style.height = "50px";
  document.getElementById("nav-img").style.marginRight = "20px";
  document.getElementById("nav-img").style.transform = "rotate(0deg)";
}

function openInventoryNav() {
  openNav();
  document.getElementById("mat-selector").style.marginLeft = "250px";
}

function closeInventoryNav() {
  closeNav();
  document.getElementById("mat-selector").style.marginLeft = "0px";
}