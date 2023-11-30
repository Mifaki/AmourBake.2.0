recBakingSeminarData = [
  {
    id: 1,
    thumbnail: "./assets/seminar-baking-1.png",
    title: "Menaklukkan Dunia Bakery: Teknik Terbaru dan Inovasi",
    speaker: "Aiugo Adhinata",
    place: "Online",
    fee: "Gratis",
  },
  {
    id: 2,
    thumbnail: "./assets/seminar-baking-2.png",
    title: "Seni Membuat Croissant: Seminar Praktis Langsung dari Ahlinya",
    speaker: "Aiugo Adhinata",
    place: "Online",
    fee: "Gratis",
  },
  {
    id: 3,
    thumbnail: "./assets/seminar-baking-1.png",
    title: "Menaklukkan Dunia Bakery: Teknik Terbaru dan Inovasi",
    speaker: "Aiugo Adhinata",
    place: "Online",
    fee: "Gratis",
  },
  {
    id: 4,
    thumbnail: "./assets/seminar-baking-2.png",
    title: "Seni Membuat Croissant: Seminar Praktis Langsung dari Ahlinya",
    speaker: "Aiugo Adhinata",
    place: "Online",
    fee: "Gratis",
  },
];

recBusinessSeminarData = [
  {
    id: 1,
    thumbnail: "./assets/seminar-business-1.png",
    title: "Kupas Tuntas Tren Bisnis Bakery 2023: Strategi Adaptasi ...",
    speaker: "Aiugo Adhinata",
    place: "Online",
    fee: "Gratis",
  },
  {
    id: 2,
    thumbnail: "./assets/seminar-business-2.png",
    title: "Membangun Jaringan: Strategi Networking untuk Pemilik Bakery",
    speaker: "Aiugo Adhinata",
    place: "Online",
    fee: "Gratis",
  },
  {
    id: 3,
    thumbnail: "./assets/seminar-business-1.png",
    title: "Kupas Tuntas Tren Bisnis Bakery 2023: Strategi Adaptasi ...",
    speaker: "Aiugo Adhinata",
    place: "Online",
    fee: "Gratis",
  },
  {
    id: 4,
    thumbnail: "./assets/seminar-business-2.png",
    title: "Membangun Jaringan: Strategi Networking untuk Pemilik Bakery",
    speaker: "Aiugo Adhinata",
    place: "Online",
    fee: "Gratis",
  },
];

bakingCourseData = [
  {
    id: 1,
    thumbnail: "./assets/bake-course-1.png",
    title: "4 Minggu untuk Mahir dalam Ilmu Pemanggangan Modern",
    speaker: "Rinrin Marinka",
    date: "10 Desember 2023 - 08 Januari 2024",
    fee: 400.0,
  },
  {
    id: 2,
    thumbnail: "./assets/bake-course-2.png",
    title: "Membuat Cookies dan Pastry Sehat Rendah Gula",
    speaker: "Deden Putra",
    date: "17 Desember 2023 - 15 Januari 2024",
    fee: 450.0,
  },
  {
    id: 3,
    thumbnail: "./assets/bake-course-3.png",
    title:
      "Adventures in Cupcakes: Eksplorasi Berbagai Varian dan Hiasan Kreatif",
    speaker: "Farah Quinn",
    date: "26 Desember 2023 - 24 Januari 2024",
    fee: 400.0,
  },
  {
    id: 4,
    thumbnail: "./assets/bake-course-4.png",
    title: "Kue Artistik: Kreativitas Visual dan Rasa dalam Pembuatan Kue",
    speaker: "Chandra Yudasswara",
    date: "26 Desember 2023 - 24 Januari 2024",
    fee: 400.0,
  },
  {
    id: 5,
    thumbnail: "./assets/bake-course-5.png",
    title: "Inovasi Baru Membuat Berbagai Macam Cake dengan Rasa yang Unik",
    speaker: "Arnold Poernomo",
    date: "27 Desember 2023 - 25 Januari 2024",
    fee: 400.0,
  },
];

businessCourseData = [
  {
    id: 1,
    thumbnail: "./assets/business-course-1.png",
    title: "Membimbing Bisnis Bakery Menuju Kestabilan dan Pertumbuhan",
    speaker: "Rinrin Marinka",
    date: "20 Desember 2024 - 15 Januari 2024",
    fee: 400.0,
  },
  {
    id: 2,
    thumbnail: "./assets/business-course-2.png",
    title: "Membangun Brand dan Pemasaran Online yang Efisien",
    speaker: "Deden Putra",
    date: "18 Januari 2024 - 16 Februari 2024",
    fee: 450.0,
  },
  {
    id: 3,
    thumbnail: "./assets/business-course-3.png",
    title: "Memahami dan Mengimplementasikan Konsep Green Bakery",
    speaker: "Farah Quinn",
    date: "20 Januari 2024 - 18 Februari 2024",
    fee: 400.0,
  },
  {
    id: 4,
    thumbnail: "./assets/business-course-4.png",
    title: "Tips Sukses Finansial dengan Mengelola Keuangan Bisnis Bakery",
    speaker: "Chandra Yudasswara",
    date: "30 Januari 2024 - 28 Februari 2024",
    fee: 400.0,
  },
  {
    id: 5,
    thumbnail: "./assets/business-course-5.png",
    title:
      "Tren Aplikasi Pemesanan Online: Meningkatkan Penjualan di Dunia Bakery",
    speaker: "Arnold Poernomo",
    date: "5 Februari 2024 - 3 Maret 2024",
    fee: 400.0,
  },
];

function generateSeminarCards(data) {
  const seminarCardContainer = document.getElementById("seminarCardContainer");
  seminarCardContainer.innerHTML = "";

  data.forEach((seminar) => {
    const seminarCard = document.createElement("div");
    seminarCard.classList.add("seminar-card");
    seminarCard.style.backgroundImage = `url('${seminar.thumbnail}')`;

    seminarCard.innerHTML = `
      <div class="card-place text-sb">
        <p>${seminar.place}</p>
      </div>
      <div class="card-bottom">
        <div class="card-detail">
          <h3>${seminar.title}</h3>
          <p class="text-sb">bersama ${seminar.speaker}</p>
          <p>${seminar.fee}</p>
        </div>
        <a href="course-detail.html" class="text-b">Daftar</a>
      </div>
    `;

    seminarCard.addEventListener("click", function () {
      window.location.href = "course-detail.html"; // Redirect to course-detail.html
    });

    seminarCardContainer.appendChild(seminarCard);
  });
}

function generateCourseCards(data) {
  const courseCardContainer = document.getElementById("courseCardContainer");
  courseCardContainer.innerHTML = "";

  data.forEach((course) => {
    const courseCardHtml = `
        <div class="course-card">
          <img src="${course.thumbnail}" alt="Bake Course">
          <div class="course-card-body">
            <div class="course-card-text">
              <div>
                <h3>${course.title}</h3>
                <h4>${course.speaker}</h4>
              </div>
              <div>
                <p>Waktu Pelaksanaan</p>
                <p>${course.date}</p>
              </div>
            </div>
            <div>
              <h3>Rp. ${course.fee.toFixed(3)}</h3>
              <a href="course-detail.html" class="card-btn">Daftar</a>
            </div>
          </div>
        </div>
      `;

    courseCardContainer.insertAdjacentHTML("beforeend", courseCardHtml);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  generateSeminarCards(recBakingSeminarData);
  generateCourseCards(bakingCourseData);
});

document.addEventListener("DOMContentLoaded", function () {
  const bakingOption = document.getElementById("bakingOption");
  const businessOption = document.getElementById("businessOption");
  const recBakingContainer = document.getElementById("recBakingContainer");
  const recBusinessContainer = document.getElementById("recBusinessContainer");

  bakingOption.addEventListener("click", function () {
    recBusinessContainer.style.display = "none";
    recBakingContainer.style.display = "flex";

    generateSeminarCards(recBakingSeminarData);
    generateCourseCards(bakingCourseData);

    bakingOption.src = "./assets/baking-active.png";
    businessOption.src = "./assets/business-inactive.png";
  });

  businessOption.addEventListener("click", function () {
    recBakingContainer.style.display = "none";
    recBusinessContainer.style.display = "flex";

    generateSeminarCards(recBusinessSeminarData);
    generateCourseCards(businessCourseData);

    bakingOption.src = "./assets/baking-inactive.png";
    businessOption.src = "./assets/business-active.png";
  });
});
