document.addEventListener("DOMContentLoaded", function () {

    const logoutBtn = document.getElementById("logoutBtn");

    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            localStorage.removeItem("userData");
            localStorage.removeItem("isLoggedIn");

            window.location.href = "./index.html";
        });
    }
});
