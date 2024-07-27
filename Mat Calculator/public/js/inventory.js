function filterItems(category) {

  let items = document.getElementsByClassName("item");

  if(category === "all-mats") {
    for (var i = 0; i < items.length; i++) {
      items[i].style.display = "inline";
    }
    return;
  }

  for (var i = 0; i < items.length; i++) {
    if(!items[i].className.includes(category)) {
      items[i].style.display = "none";
    } else {
      items[i].style.display = "inline";
    }
  }
}

function applyScale(scale) {
  let inputs = document.getElementsByTagName("input");
  let imgs = document.getElementsByClassName("res-img");
  let divs = document.getElementsByClassName("img-container");
  let raritybars = document.getElementsByClassName("rarity-bar");

  console.log(inputs);
  for (var i = 0; i < inputs.length; i++) {
    let width = (162 / 3) * scale;
    inputs[i].style.width = width + "px";
  }

  for (var i = 0; i < imgs.length; i++) {
    let width = 60 * scale;
    imgs[i].style.width = width + "px";
  }

  for (var i = 0; i < divs.length; i++) {
    let width = (200 / 3) * scale;
    let height = (200 / 3) * scale;
    divs[i].style.width = width + "px";
    divs[i].style.height = height + "px";
  }

  for (var i = 0; i < raritybars.length; i++) {
    let width = (200 / 3) * scale;
    raritybars[i].style.width = width + "px";
  }
}

function loadItems() {
  fetch('/ressources')
    .then(response => response.json())
    .then(ressources => {
      const gridContainer = document.getElementById('inventory-grid-container');

      const rootPath = "";

      let ressourceImgSource = [];
      let ressourceCategories = [];
      let ressourceRarity = [];

      ressources['domain-drops'].forEach(ressource => {
        ressourceImgSource.push(rootPath + ressource['img-src']);
        let categoryString = "";
        ressource['categories'].forEach(category => {
          categoryString += category + " ";
        });
        ressourceCategories.push(categoryString);
        ressourceRarity.push(ressource['rarity']);
      });

      ressources['mob-drops'].forEach(ressource => {
        ressourceImgSource.push(rootPath + ressource['img-src']);
        let categoryString = "";
        ressource['categories'].forEach(category => {
          categoryString += category + " ";
        });
        ressourceCategories.push(categoryString);
        ressourceRarity.push(ressource['rarity']);
      });

      ressources['weekly-boss-drops'].forEach(ressource => {
        ressourceImgSource.push(rootPath + ressource['img-src']);
        let categoryString = "";
        ressource['categories'].forEach(category => {
          categoryString += category + " ";
        });
        ressourceCategories.push(categoryString);
        ressourceRarity.push(ressource['rarity']);
      });

      ressources['boss-drops'].forEach(ressource => {
        ressourceImgSource.push(rootPath + ressource['img-src']);
        let categoryString = "";
        ressource['categories'].forEach(category => {
          categoryString += category + " ";
        });
        ressourceCategories.push(categoryString);
        ressourceRarity.push(ressource['rarity']);
      });

      ressources['xp-mats'].forEach(ressource => {
        ressourceImgSource.push(rootPath + ressource['img-src']);
        let categoryString = "";
        ressource['categories'].forEach(category => {
          categoryString += category + " ";
        });
        ressourceCategories.push(categoryString);
        ressourceRarity.push(ressource['rarity']);
      });

      ressources['currencies'].forEach(ressource => {
        ressourceImgSource.push(rootPath + ressource['img-src']);
        let categoryString = "";
        ressource['categories'].forEach(category => {
          categoryString += category + " ";
        });
        ressourceCategories.push(categoryString);
        ressourceRarity.push(ressource['rarity']);
      });

      const resLength = ressourceCategories.length;

      for(let i = 0; i < resLength; i++) {
        gridContainer.innerHTML += `
        <div class="${ressourceCategories[i]}">
          <div class="img-container rarity-${ressourceRarity[i]}-grad">
            <img src="${ressourceImgSource[i]}" alt="" class="res-img">
          </div>
          <div class="rarity-bar rarity-${ressourceRarity[i]}"></div>
          <input type="number" placeholder="Quantity" min="0">
        </div>
        `
      }
    });


}