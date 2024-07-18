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
    .then(images => {
      const gridContainer = document.getElementById('inventory-grid-container');

      images.forEach(image => {
        const categories = image.split("\\").slice(3);
        let category;
        if(categories[0] === 'talent_weapon') {
          category = 'weapon-mats talent-mats';
        } else {
          category = categories[0] + '-mats';
        }

        let path = "../images/ressources";
        for(const c in categories) {
          path += `/${categories[c]}`;
        }

        gridContainer.innerHTML += `
        <div class="item ${category}">
          <div class="img-container rarity-1-grad">
            <img src="${path}" alt="" class="res-img">
          </div>
          <div class="rarity-bar rarity-1"></div>
          <input type="number" placeholder="Quantity" min="0">
        </div>
        `
      });
    });


}