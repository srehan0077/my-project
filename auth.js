function signup() {
  const user = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value
  };

  if (!user.name || !user.email || !user.password) {
    alert("All fields required");
    return;
  }

  localStorage.setItem("user", JSON.stringify(user));
  alert("Signup successful");
  window.location.href = "index.html";
}

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user || email !== user.email || password !== user.password) {
    alert("Invalid credentials");
    return;
  }

  localStorage.setItem("loggedIn", "true");
  window.location.href = "main.html";
}

