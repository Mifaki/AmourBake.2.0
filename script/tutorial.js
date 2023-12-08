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
    thumbnail: "./assets/recipe-1",
    title: "Croissant Coklat Praktis 4 Bahan",
    category: "Pastry",
    isRecomended: false,
  },
  {
    id: 5,
    thumbnail: "./assets/recipe-2",
    title: "Brownies Vegan, Tanpa Telur dan...",
    category: "Brownies",
    isRecomended: false,
  },
  {
    id: 6,
    thumbnail: "./assets/recipe-3",
    title: "Macaroons Strawberry Isian",
    category: "Cookies",
    isRecomended: false,
  },
  {
    id: 7,
    thumbnail: "./assets/recipe-4",
    title: "Strawberry Cake Tanpa Oven",
    category: "Cake",
    isRecomended: true,
  },
  {
    id: 8,
    thumbnail: "./assets/recipe-5",
    title: "French Lemon Tart Simpel & Mudah",
    category: "Cake",
    isRecomended: true,
  },
  {
    id: 9,
    thumbnail: "./assets/recipe-6",
    title: "Mexican Coffee Bun Empuk",
    category: "Bread",
    isRecomended: true,
  },
  {
    id: 10,
    thumbnail: "./assets/recipe-4",
    title: "Strawberry Cake Tanpa Oven",
    category: "Cake",
    isRecomended: true,
  },
  {
    id: 11,
    thumbnail: "./assets/recipe-5",
    title: "French Lemon Tart Simpel & Mudah",
    category: "Cake",
    isRecomended: true,
  },
  {
    id: 12,
    thumbnail: "./assets/recipe-6",
    title: "Mexican Coffee Bun Empuk",
    category: "Bread",
    isRecomended: true,
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
    thumbnail: "./assets/article-1",
    title:
      "Menggali Potensi Pasar: Strategi Menentukan Target Pasar yang Efektif",
    isRecomended: false,
  },
  {
    id: 5,
    thumbnail: "./assets/article-2",
    title: "Dari Dapur ke Dunia: Tips Membuat Brand Bakery yang Instagramable",
    isRecomended: false,
  },
  {
    id: 6,
    thumbnail: "./assets/article-3",
    title:
      "Kisah Sukses Pemuda Milenial dalam Industri Bakery: Inspirasi dan Tips",
    isRecomended: false,
  },
  {
    id: 7,
    thumbnail: "./assets/article-4",
    title:
      "Panduan Memulai Bisnis: Langkah-Langkah Kunci yang Harus Diperhatikan",
    isRecomended: true,
  },
  {
    id: 8,
    thumbnail: "./assets/article-5",
    title: "Mengelola Stok dengan Bijak: Tips untuk Pemilik Usaha Bakery",
    isRecomended: true,
  },
  {
    id: 9,
    thumbnail: "./assets/article-6",
    title: "Pentingnya Menyusun Menu yang Menggoda dalam Bisnis Bakery",
    isRecomended: true,
  },
  {
    id: 10,
    thumbnail: "./assets/article-4",
    title:
      "Panduan Memulai Bisnis: Langkah-Langkah Kunci yang Harus Diperhatikan",
    isRecomended: true,
  },
  {
    id: 11,
    thumbnail: "./assets/article-5",
    title: "Mengelola Stok dengan Bijak: Tips untuk Pemilik Usaha Bakery",
    isRecomended: true,
  },
  {
    id: 12,
    thumbnail: "./assets/article-6",
    title: "Pentingnya Menyusun Menu yang Menggoda dalam Bisnis Bakery",
    isRecomended: true,
  },
];

function redirectToDetail() {
  window.location.href = `tutorial-detail.html`;
}

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

function generateRecomendedCard(data) {
  recomendedCardContainer.innerHTML = "";

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
    recomendedCardContainer.insertAdjacentHTML("beforeend", cardHtml);
  });
}

function updateCardVisibility() {
  const recipeRadio = document.getElementById("recipe");
  const articleRadio = document.getElementById("article");

  if (recipeRadio.checked) {
    generateCards(recipeData.filter((item) => !item.isRecomended));
    generateRecomendedCard(recipeData.filter((item) => item.isRecomended));
  } else if (articleRadio.checked) {
    generateCards(articleData.filter((item) => !item.isRecomended));
    generateRecomendedCard(articleData.filter((item) => item.isRecomended));
  }
}

function filterBy(option) {
  console.log("Filtering by:", option);

  const cardContainer = document.getElementById("cardContainer");
  const recomendedCardContainer = document.getElementById("recomended");

  if (option === "all") {
    cardContainer.style.display = "flex";
    recomendedCardContainer.style.display = "block";
    updateCardVisibility();
  } else {
    const filteredRecipeData = recipeData.filter((item) => item.category === option);
    generateCards(filteredRecipeData);
    generateRecomendedCard([]); 

    cardContainer.style.display = "flex";
    recomendedCardContainer.style.display = "none";
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
});