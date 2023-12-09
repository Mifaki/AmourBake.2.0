const recipeData = [
  {
    id: 1,
    thumbnail: "./assets/recipe-10",
    title: "Mudah! Éclair dengan Varian Rasa",
    category: "Cookies",
  },
  {
    id: 2,
    thumbnail: "./assets/recipe-11",
    title: "Pain Au Chocolat ala Prancis!",
    category: "Pastry",
  },
  {
    id: 3,
    thumbnail: "./assets/recipe-12",
    title: "Madeleine Coklat, Nagih Banget!",
    category: "Cookies",
  },
  {
    id: 4,
    thumbnail: "./assets/recipe-13",
    title: "Cherry Almond Scones",
    category: "Pastry",
  },
  {
    id: 5,
    thumbnail: "./assets/recipe-14",
    title: "Classic Chocolate Chip Cookies",
    category: "Cookies",
  },
  {
    id: 6,
    thumbnail: "./assets/recipe-15",
    title: "Croissant Perfection",
    category: "Pastry",
  },
  {
    id: 7,
    thumbnail: "./assets/recipe-16",
    title: "Lemon Shortbread Cookies",
    category: "Cookies",
  },
  {
    id: 8,
    thumbnail: "./assets/recipe-17",
    title: "Apple Cinnamon Danish",
    category: "Pastry",
  },
  {
    id: 9,
    thumbnail: "./assets/recipe-18",
    title: "Peanut Butter Blossoms",
    category: "Cookies",
  },
  {
    id: 10,
    thumbnail: "./assets/recipe-19",
    title: "Strawberry Cream Puffs",
    category: "Pastry",
  },
  {
    id: 11,
    thumbnail: "./assets/recipe-20",
    title: "Oatmeal Raisin Cookies",
    category: "Cookies",
  },
  {
    id: 12,
    thumbnail: "./assets/recipe-21",
    title: "Blueberry Turnovers",
    category: "Pastry",
  },
];



function redirectToDetail() {
  window.location.href = `/tutorial-detail.html`;
}

document.addEventListener("DOMContentLoaded", function () {
  const cardContainer = document.getElementById("cardContainer");

  const recipeDataClone = [...recipeData, ...recipeData, ...recipeData];
  const cardsInViewport = 3;
  let initialPos = 0;

  function generateCards(data, startPos) {
    cardContainer.innerHTML = "";
    const visibleData = data.slice(startPos, startPos + cardsInViewport);
    visibleData.forEach((item) => {
      const cardHtml = `
        <div class="card" data-id="${item.id}" onclick="redirectToDetail()">
          <img src="${item.thumbnail}.jpg" alt="${item.title}">
          <div class="card-text-container">
            <h1>${item.title}</h1>
            <p>${item.category ? `Kategori: ${item.category}` : ""}</p>
          </div>
        </div>
      `;
      cardContainer.insertAdjacentHTML("beforeend", cardHtml);
    });
  }

  function moveCardsRight() {
    initialPos = (initialPos + cardsInViewport) % recipeDataClone.length;
    generateCards(recipeDataClone, initialPos);
  }

  function moveCardsLeft() {
    initialPos = (initialPos - cardsInViewport + recipeDataClone.length) % recipeDataClone.length;
    generateCards(recipeDataClone, initialPos);
  }

  generateCards(recipeDataClone, initialPos);

  const rightNav = document.querySelector(".nav-right");
  const leftNav = document.querySelector(".nav-left");

  rightNav.addEventListener("click", moveCardsRight);
  leftNav.addEventListener("click", moveCardsLeft);
});

