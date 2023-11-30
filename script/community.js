forumData = [
  {
    id: 1,
    photo: "./assets/community-1.png",
    name: "SOFTCAKE COMMUNITY",
  },
  {
    id: 2,
    photo: "./assets/community-2.png",
    name: "PASTRY COMMUNITY",
  },
  {
    id: 3,
    photo: "./assets/community-3.png",
    name: "COOKIES COMMUNITY",
  },
  {
    id: 4,
    photo: "./assets/community-4.png",
    name: "CUPCAKE COMMUNITY",
  },
  {
    id: 1,
    photo: "./assets/community-5.png",
    name: "WIRAUSAHA COMMUNITY",
  },
];

function generateCommunityCards() {
  const communityCardContainer = document.getElementById(
    "communityCardContainer"
  );
  communityCardContainer.innerHTML = "";

  forumData.forEach((community) => {
    const communityCardHtml = `
        <div class="community-card">
          <div class="community-title">
            <img src="${community.photo}" alt="Community Photo">
            <h3>${community.name}</h3>
          </div>
          <a href="community-detail.html" class="join-btn text-b">Join</a>
        </div>
      `;

    communityCardContainer.insertAdjacentHTML("beforeend", communityCardHtml);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const imageGridSection = document.getElementById("imageGridSection");
  const imageBtn = document.querySelector(".image-btn");

  const imageFilenames = Array.from(
    { length: 21 },
    (_, index) => `./assets/galery-${index + 1}.jpg`
  );
  const imagesToShow = imageFilenames.slice(0, 9);

  function generateImages(images) {
    imageGridSection.innerHTML = "";
    images.forEach((image) => {
      const imgElement = document.createElement("img");
      imgElement.src = image;
      imgElement.alt = "Gallery Image";
      imageGridSection.appendChild(imgElement);
    });
  }

  imageBtn.addEventListener("click", function () {
    generateImages(imageFilenames);
    imageBtn.style.display = "none";
  });

  console.log(imagesToShow);
  generateImages(imagesToShow);
});

document.addEventListener("DOMContentLoaded", function () {
  const communityFilter = document.getElementById("communityFilter");
  const galerySection = document.getElementById("galerySection");
  const forumSection = document.getElementById("forumSection");

  communityFilter.addEventListener("change", function () {
    let selectedValue = communityFilter.value;
    if (selectedValue === "galery") {
      console.log('p');
      galerySection.style.display = "block";
      forumSection.style.display = "none";
    } else if (selectedValue === "forum") {
      galerySection.style.display = "none";
      forumSection.style.display = "flex";
      generateCommunityCards();
    }
  });
});
