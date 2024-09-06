const mapContainer = document.getElementById("map-container");
const infoBox = document.getElementById("info-box");

const oceanInfo = {
  pacific:
    "O Oceano Pacífico é o maior e mais profundo oceano do mundo. Ele é vital para a biodiversidade marinha.",
  atlantic:
    "O Oceano Atlântico é o segundo maior oceano do mundo. Ele é essencial para o clima global.",
  indian:
    "O Oceano Índico é o terceiro maior oceano do mundo. Ele é conhecido por sua biodiversidade única.",
  arctic:
    "O Oceano Ártico é o menor e mais raso oceano. Ele está enfrentando derretimento acelerado devido às mudanças climáticas.",
  southern:
    "O Oceano Austral circunda a Antártida e desempenha um papel crucial na circulação oceânica global.",
};

mapContainer.addEventListener("click", function (event) {
  const x = event.offsetX;
  const y = event.offsetY;
  let ocean;

  if (x > 100 && x < 200 && y > 50 && y < 150) {
    ocean = "pacific";
  } else if (x > 250 && x < 350 && y > 100 && y < 200) {
    ocean = "atlantic";
  } else if (x > 400 && x < 500 && y > 150 && y < 250) {
    ocean = "indian";
  } else if (x > 50 && x < 150 && y > 200 && y < 300) {
    ocean = "arctic";
  } else if (x > 300 && x < 400 && y > 250 && y < 350) {
    ocean = "southern";
  }

  if (ocean) {
    infoBox.innerHTML = oceanInfo[ocean];
    infoBox.style.top = `${y}px`;
    infoBox.style.left = `${x}px`;
    infoBox.classList.add("visible");
  } else {
    infoBox.classList.remove("visible");
  }
});
