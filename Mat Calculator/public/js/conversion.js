////////////////global variables////////////////

//1 = Ressource Source: Aquisition Method
//0 = Ressource Source: Usage
let ressourceSource = 0;


let ressourceMap;


///////////////////functions////////////////////

//limit Union Level to values between 1 and 60 in case of manual value insertion
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

//limit values for ressources to values >= 0
function validateRessourceAmount(value, id) {
  if(value < 0) {
    value = 0;
    document.getElementById(id).value = value;
  }
}

//toggle the source for the dropdown menus
//Source by Usage = 0 or by acquisition method 1
function toggleRessourceSource(value) {
  ressourceSource ^= 1;
  loadRessources();
}

//Populate dropdown selectors for ressources
//Selection by Usage (fixed usages, 0) or by acquisition method (JSON keys, 1)
function loadRessources() {
  fetch('/ressources')
    .then(response => response.json())
    .then(ressources => {

      let keys = Object.keys(ressources);
      const dropdown = document.getElementById("res-type-dropdown");
      dropdown.innerHTML = "";
      let value = "";

      if(ressourceSource === 1) {
        for(key of keys) {
          dropdown.innerHTML += `
          <option value="${key}">${key}</option>
          `;
        }
        value = keys[0];
      } else {
        dropdown.innerHTML = `
        <option value="character-mats">Character Material</option>
        <option value="weapon-mats">Weapon Material</option>
        <option value="talent-mats">Talent Material</option>
        <option value="echo-mats">Echo Material</option>
        <option value="gacha-mats">Gacha Currencies</option>
        `;
        value = "character-mats";
      }
      loadMaterialTypes(value);
    });
}

//When changing ressource selection, ressource categories change and subsequently material types for selected category.
//Loads Material Type for the specified Ressource Type
function loadMaterialTypes(value) {
  fetch('/ressources')
    .then(response => response.json())
    .then(ressources => {
      const dropdown = document.getElementById("mat-type-dropdown");
      dropdown.innerHTML = "";
    
      ressourceMap = new Map();

      //0: by usage
      //1: by acquisition method
      if(ressourceSource === 0) {
        const keys = Object.keys(ressources);
        for(key of keys) {
          ressources[key].forEach(ressource => {
            if(ressource['categories'].includes(value)) {
              
              let list = ressourceMap.get(ressource['type']);

              if(list) {
                list.push(ressource['rarity']);
              } else {
                list = [ressource['rarity']];
              }

              ressourceMap.set(ressource['type'], list);
            }
          });
        }
      } else {
        ressources[value].forEach(ressource => {
          let list = ressourceMap.get(ressource['type']);

          if(list) {
            list.push(ressource['rarity']);
          } else {
            list = [ressource['rarity']];
          }

          ressourceMap.set(ressource['type'], list);
        });
      }

      for(key of ressourceMap.keys()) {
        dropdown.innerHTML += `
          <option value="${key}">${key}</option>
        `;
      }
      
      toggleRarityFields(ressourceMap.keys().next().value);
      
    })
}

//Toggle on and off rarity fields depending on selected material
function toggleRarityFields(value) {
  for(let i = 1; i <= 4; i++) {
    if(ressourceMap.get(value).includes(i)) {
      document.getElementById(`r${i}`).disabled = false;
      document.getElementById(`r${i}`).readOnly = false;
    } else {
      document.getElementById(`r${i}`).value = "";
      document.getElementById(`r${i}`).disabled = true;
      document.getElementById(`r${i}`).readOnly = true;
    }
  }
}