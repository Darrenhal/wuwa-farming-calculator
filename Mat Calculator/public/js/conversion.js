function validateUL(value) {
  if(value < 1 && value !== "") {
    value = 1;
  } else if(value > 60) {
    value = 60;
  } else {
    return;
  }
  document.getElementById("ul-input").value = value;
}

function validateRessourceAmount(value, id) {
  if(value < 0) {
    value = 0;
    document.getElementById(id).value = value;
  }
}

function loadRessources() {
  fetch('/ressources')
    .then(response => response.json())
    .then(ressources => {
      let keys = Object.keys(ressources);


      console.log(Object.keys(ressources)[0]);
    });
}