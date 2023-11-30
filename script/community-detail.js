replyData = [
  {
    id: 1,
    photo: "../assets/community-1.png",
    name: "SOFTCAKE COMMUNITY / Rizki",
    comment:
      "Nih buat yang punya bisnis bakery, gimana sih caranya promosiin produk di dunia digital? Sharing yuk!",
    replies: 13,
  },
  {
    id: 2,
    photo: "../assets/community-1.png",
    name: "SOFTCAKE COMMUNITY / Diego",
    comment:
      "Suka bingung pilih antara jadi pebisnis atau tetap jadi baker full-time? Menurut kalian gimana?",
    replies: 19,
  },
  {
    id: 3,
    photo: "../assets/community-1.png",
    name: "SOFTCAKE COMMUNITY / Tito",
    comment:
      "Kalo lagi jenuh atau kelelahan, apa yang kalian lakuin buat refreshing sebelum mulai baking lagi?",
    replies: 11,
  },
  {
    id: 4,
    photo: "../assets/community-1.png",
    name: "SOFTCAKE COMMUNITY / Chelsea",
    comment:
      "Kalo lagi jenuh atau kelelahan, apa yang kalian lakuin buat refreshing sebelum mulai baking lagi?",
    replies: 16,
  },
  {
    id: 5,
    photo: "../assets/community-1.png",
    name: "SOFTCAKE COMMUNITY / Arummi",
    comment:
      "Nih, curhat dikit. Ada yang pernah alami oven rusak pas lagi sibuk banget persiapan pesanan gede? Gimana cara handle-nya biar gak stress?",
    replies: 12,
  },
];

document.addEventListener("DOMContentLoaded", function () {
  function generateTopics() {
    const topicsContainer = document.querySelector(".topics-container");

    replyData.forEach((topic) => {
      const topicHtml = `
          <div class="topic-container">
            <div class="topic-header">
              <img src="${topic.photo}" alt="Community Photo" />
              <h3>${topic.name}</h3>
            </div>
            <div class="topic-body">
              <div class="short-topic-content">
                <p class="text-sb">${topic.comment}</p>
                <div class="action-container">
                    <div class="topic-action">
                        <img src="./assets/like-icon.png" alt="Like" />
                        <p>Like</p>
                    </div>
                    <div class="topic-action">
                        <img src="./assets/comment-icon.png" alt="Comment" />
                        <p>Comment</p>
                    </div>
                    <div class="topic-action">
                        <img src="./assets/share-iconn.png" alt="Share" />
                        <p>Share</p>
                    </div>
                    <div class="topic-action">
                        <img src="./assets/report-icon.png" alt="Report" />
                        <p>Report</p>
                    </div>
                </div>
                <div class="arrow-container">
                  <img src="./assets/arrow-down.png" alt="Arrow Down" />
                  <p class="text-b">Lihat ${topic.replies} Balasan</p>
                </div>
              </div>
            </div>
          </div>
        `;

      topicsContainer.insertAdjacentHTML("beforeend", topicHtml);
    });
  }

  function generateSeeAllButton() {
    const topicsContainer = document.querySelector(".topics-container");
    const seeAllButtonHtml = `
          <button class="see-all">Lihat Semua</button>
        `;

    topicsContainer.insertAdjacentHTML("beforeend", seeAllButtonHtml);

    const seeAllButton = document.querySelector(".see-all");
    seeAllButton.addEventListener("click", function () {
      seeAllButton.style.display = "none";
      generateTopics();
    });
  }
  generateTopics();
  generateSeeAllButton();
});
