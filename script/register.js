document.addEventListener("DOMContentLoaded", function () {
  const signUpForm = document.getElementById("signUpForm");

  signUpForm.addEventListener("submit", function (event) {
    console.log("p");
    event.preventDefault();
    console.log("p");
    const fullName = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const userData = {
      fullName,
      email,
      password,
    };

    localStorage.setItem("userData", JSON.stringify(userData));
    window.location.href = "./login.html";
  });
});
