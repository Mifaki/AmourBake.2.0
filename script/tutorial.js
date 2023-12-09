recipeData = [
  {
    id: 1,
    thumbnail: "./assets/recipe-1",
    title: "Croissant Coklat Praktis 4 Bahan",
    category: "Pastry",
    isRecomended: false,
  },
  {
    id: 2,
    thumbnail: "./assets/recipe-2",
    title: "Brownies Vegan, Tanpa Telur dan...",
    category: "Brownies",
    isRecomended: false,
  },
  {
    id: 3,
    thumbnail: "./assets/recipe-3",
    title: "Macaroons Strawberry Isian",
    category: "Cookies",
    isRecomended: false,
  },
  {
    id: 4,
    thumbnail: "./assets/recipe-4",
    title: "Strawberry Cake Tanpa Oven",
    category: "Cake",
    isRecomended: true,
  },
  {
    id: 5,
    thumbnail: "./assets/recipe-5",
    title: "French Lemon Tart Simpel & Mudah",
    category: "Cake",
    isRecomended: true,
  },
  {
    id: 6,
    thumbnail: "./assets/recipe-6",
    title: "Mexican Coffee Bun Empuk",
    category: "Bread",
    isRecomended: true,
  },
  {
    id: 7,
    thumbnail: "./assets/recipe-7",
    title: "Classic Chocolate Eclair",
    category: "Pastry",
    isRecomended: true,
  },
  {
    id: 8,
    thumbnail: "./assets/recipe-8",
    title: "Fudgy Walnut Brownies",
    category: "Brownies",
    isRecomended: true,
  },
  {
    id: 9,
    thumbnail: "./assets/recipe-9",
    title: "Almond Butter Cookies",
    category: "Cookies",
    isRecomended: true,
  },
  {
    id: 10,
    thumbnail: "./assets/recipe-24",
    title: "Red Velvet Cake",
    category: "Cake",
    isRecomended: true,
  },
  {
    id: 11,
    thumbnail: "./assets/recipe-25",
    title: "Sourdough Bread",
    category: "Bread",
    isRecomended: true,
  },
  {
    id: 12,
    thumbnail: "./assets/recipe-26",
    title: "Pumpkin Spice Muffins",
    category: "Pastry",
    isRecomended: true,
  },
  {
    id: 13,
    thumbnail: "./assets/recipe-27",
    title: "Hazelnut Swirl Brownies",
    category: "Brownies",
    isRecomended: true,
  },
  {
    id: 14,
    thumbnail: "./assets/recipe-28",
    title: "Oatmeal Raisin Cookies",
    category: "Cookies",
    isRecomended: true,
  },
  {
    id: 15,
    thumbnail: "./assets/recipe-29",
    title: "Lemon Blueberry Cake",
    category: "Cake",
    isRecomended: true,
  },
  {
    id: 16,
    thumbnail: "./assets/recipe-23",
    title: "Raspberry Danish",
    category: "Pastry",
    isRecomended: false,
  },
  {
    id: 17,
    thumbnail: "./assets/recipe-3",
    title: "Macaroons Strawberry Isian",
    category: "Cookies",
    isRecomended: false,
  },
  {
    id: 18,
    thumbnail: "./assets/recipe-22",
    title: "Peanut Butter Swirl Brownies",
    category: "Brownies",
    isRecomended: false,
  },
];

articleData = [
  {
    id: 1,
    thumbnail: "./assets/article-1",
    title:
      "Menggali Potensi Pasar: Strategi Menentukan Target Pasar yang Efektif",
    isRecomended: false,
  },
  {
    id: 2,
    thumbnail: "./assets/article-2",
    title: "Dari Dapur ke Dunia: Tips Membuat Brand Bakery yang Instagramable",
    isRecomended: false,
  },
  {
    id: 3,
    thumbnail: "./assets/article-3",
    title:
      "Kisah Sukses Pemuda Milenial dalam Industri Bakery: Inspirasi dan Tips",
    isRecomended: false,
  },
  {
    id: 4,
    thumbnail: "./assets/article-4",
    title:
      "Panduan Memulai Bisnis: Langkah-Langkah Kunci yang Harus Diperhatikan",
    isRecomended: true,
  },
  {
    id: 5,
    thumbnail: "./assets/article-5",
    title: "Mengelola Stok dengan Bijak: Tips untuk Pemilik Usaha Bakery",
    isRecomended: true,
  },
  {
    id: 6,
    thumbnail: "./assets/article-6",
    title: "Pentingnya Menyusun Menu yang Menggoda dalam Bisnis Bakery",
    isRecomended: true,
  },
  {
    id: 7,
    thumbnail: "./assets/article-7",
    title: "Strategi Pemasaran Bakery di Era Digital",
    isRecomended: false,
  },
  {
    id: 8,
    thumbnail: "./assets/article-8",
    title: "Menumbuhkan Komunitas Pelanggan dalam Bisnis Bakery",
    isRecomended: false,
  },
  {
    id: 9,
    thumbnail: "./assets/article-9",
    title: "Inovasi Rasa dalam Produk Bakery: Cara Meningkatkan Penjualan",
    isRecomended: false,
  },
  {
    id: 10,
    thumbnail: "./assets/article-10",
    title: "Manajemen Keuangan untuk Pemilik Usaha Bakery Pemula",
    isRecomended: true,
  },
  {
    id: 11,
    thumbnail: "./assets/article-11",
    title: "Mengoptimalkan Kualitas Produk dalam Usaha Bakery",
    isRecomended: true,
  },
  {
    id: 12,
    thumbnail: "./assets/article-12",
    title: "Strategi Pricing yang Tepat dalam Bisnis Bakery",
    isRecomended: true,
  },
];

const recipeRadio = document.getElementById("recipe");
const articleRadio = document.getElementById("article");
const cardContainer = document.getElementById("cardContainer");
const recomendedCardContainer = document.getElementById(
  "recomendedCardContainer"
);
const recomendedCarousel = document.getElementById("recomendedCarousel");
let cardsInViewport = 3;
const recInViewPort = 3;
let initialPos = 0;
let recInitialPos = 0;
const cardRight = document.getElementById("cardRight");
const cardLeft = document.getElementById("cardLeft");
const recRight = document.getElementById("recRight");
const recLeft = document.getElementById("recLeft");

function redirectToDetail() {
  window.location.href = `tutorial-detail.html`;
}

function generateCards(data) {
  cardContainer.innerHTML = "";
  const visibleData = data.slice(initialPos, initialPos + cardsInViewport);
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

function generateRecomendedCard(data) {
  recomendedCardContainer.innerHTML = "";
  const visibleData = data.slice(
    recInitialPos,
    recInitialPos + cardsInViewport
  );
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
    recomendedCardContainer.insertAdjacentHTML("beforeend", cardHtml);
  });
}

function moveCardsRight() {
  if (recipeRadio.checked) {
    const filteredData = recipeData.filter((item) => !item.isRecomended);
    initialPos = (initialPos + cardsInViewport) % filteredData.length;
    generateCards(filteredData);
  } else if (articleRadio.checked) {
    const filteredData = articleData.filter((item) => !item.isRecomended);
    initialPos = (initialPos + cardsInViewport) % filteredData.length;
    generateCards(filteredData);
  }
}

function moveCardsLeft() {
  if (recipeRadio.checked) {
    const filteredData = recipeData.filter((item) => !item.isRecomended);
    initialPos =
      (initialPos - cardsInViewport + filteredData.length) %
      filteredData.length;
    generateCards(filteredData);
  } else if (articleRadio.checked) {
    const filteredData = articleData.filter((item) => !item.isRecomended);
    initialPos =
      (initialPos - cardsInViewport + filteredData.length) %
      filteredData.length;
    generateCards(filteredData);
  }
}

function moveRecsRight() {
  if (recipeRadio.checked) {
    const filteredData = recipeData.filter((item) => item.isRecomended);
    recInitialPos = (recInitialPos + recInViewPort) % filteredData.length;
    generateRecomendedCard(filteredData);
  } else if (articleRadio.checked) {
    const filteredData = articleData.filter((item) => item.isRecomended);
    recInitialPos = (recInitialPos + recInViewPort) % filteredData.length;
    generateRecomendedCard(filteredData);
  }
}

function moveRecsLeft() {
  if (recipeRadio.checked) {
    const filteredData = recipeData.filter((item) => item.isRecomended);
    recInitialPos =
      (recInitialPos - recInViewPort + filteredData.length) %
      filteredData.length;
    generateRecomendedCard(filteredData);
  } else if (articleRadio.checked) {
    const filteredData = articleData.filter((item) => item.isRecomended);
    recInitialPos =
      (recInitialPos - recInViewPort + filteredData.length) %
      filteredData.length;
    generateRecomendedCard(filteredData);
  }
}

function updateCardVisibility() {
  if (recipeRadio.checked) {
    generateCards(recipeData.filter((item) => !item.isRecomended));
    generateRecomendedCard(recipeData.filter((item) => item.isRecomended));
  } else if (articleRadio.checked) {
    generateCards(articleData.filter((item) => !item.isRecomended));
    generateRecomendedCard(articleData.filter((item) => item.isRecomended));
  }
}

function filterBy(option) {
  if (option === "all") {
    cardsInViewport = 3;
    cardContainer.style.display = "flex";
    cardContainer.style.overflow = "hidden";
    cardRight.style.display = "block";
    cardLeft.style.display = "block";
    recomendedCarousel.style.display = "block";

    updateCardVisibility();
  } else {
    const filteredRecipeData = recipeData.filter(
      (item) => item.category === option
    );
    cardsInViewport = filteredRecipeData.length;
    generateCards(filteredRecipeData);
    generateRecomendedCard([]);

    cardContainer.style.display = "flex";
    cardContainer.style.overflow = "auto";
    cardRight.style.display = "none";
    cardLeft.style.display = "none";
    recomendedCarousel.style.display = "none";
  }

  document.getElementById("filterDropdown").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  // VISBILITY LOGIC
  const bestRecipeSection = document.querySelector(".best-recipe");
  const bestArticleSection = document.querySelector(".best-article");

  function updateBestVisibility() {
    const recipeRadio = document.getElementById("recipe");
    const articleRadio = document.getElementById("article");

    if (recipeRadio.checked) {
      bestRecipeSection.style.display = "flex";
      bestArticleSection.style.display = "none";
    } else if (articleRadio.checked) {
      bestRecipeSection.style.display = "none";
      bestArticleSection.style.display = "flex";
    }
  }

  updateBestVisibility();
  updateCardVisibility();

  // FILTER LOGIC
  const radioButtons = document.querySelectorAll('input[name="filter"]');
  radioButtons.forEach(function (radio) {
    radio.addEventListener("change", updateBestVisibility);
  });
  radioButtons.forEach(function (radio) {
    radio.addEventListener("change", updateCardVisibility);
  });

  const filterBtn = document.getElementById("filterBtn");
  const filterDropdown = document.getElementById("filterDropdown");

  filterBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    filterDropdown.style.display =
      filterDropdown.style.display === "block" ? "none" : "block";
  });

  document.body.addEventListener("click", function () {
    filterDropdown.style.display = "none";
  });

  cardRight.addEventListener("click", moveCardsRight);
  cardLeft.addEventListener("click", moveCardsLeft);
  recRight.addEventListener("click", moveRecsRight);
  recLeft.addEventListener("click", moveRecsLeft);
});
