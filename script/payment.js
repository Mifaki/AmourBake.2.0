function populateMonths() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthSelect = document.getElementById("monthSelect");

  months.forEach((month, index) => {
    const option = document.createElement("option");
    option.value = index + 1; 
    option.text = month;
    monthSelect.appendChild(option);
  });
}

function populateYears(startYear, endYear) {
    const yearSelect = document.getElementById('yearSelect');

    for (let year = startYear; year <= endYear; year++) {
      const option = document.createElement('option');
      option.value = year;
      option.text = year;
      yearSelect.appendChild(option);
    }
  }

window.addEventListener("load", function() {
    populateMonths();
    populateYears(1960, 2023)
});
