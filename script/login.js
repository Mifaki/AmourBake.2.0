document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector(".auth-form");
  
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
  
      const storedUserData = localStorage.getItem("userData");
  
      if (storedUserData) {
        const userData = JSON.parse(storedUserData);
  
        if (email === userData.email && password === userData.password) {
          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem("name", userData.fullname);
          window.location.href = "./index.html";
        } else {
          alert("Invalid email or password. Please try again.");
          document.getElementById("email").value = "";
          document.getElementById("password").value = "";
        }
      } else {
        alert("User not found. Please sign up.");
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
      }
    });
  });
  