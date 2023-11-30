recipeData = [
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
    thumbnail: "./assets/recipe-10",
    title: "Mudah! Éclair dengan Varian Rasa",
    category: "Cookies",
  },
  {
    id: 5,
    thumbnail: "./assets/recipe-11",
    title: "Pain Au Chocolat ala Prancis!",
    category: "Pastry",
  },
  {
    id: 6,
    thumbnail: "./assets/recipe-12",
    title: "Madeleine Coklat, Nagih Banget!",
    category: "Cookies",
  },
];

function redirectToDetail() {
  window.location.href = `/tutorial-detail.html`;
}

document.addEventListener("DOMContentLoaded", function () {
  const cardContainer = document.getElementById("cardContainer");

  function generateCards(data) {
    cardContainer.innerHTML = "";

    data.forEach((item) => {
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

  generateCards(recipeData);
});
