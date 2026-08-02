const users = {
  Howard: {
    password: "finance123",
    page: "dashboard.html"
  },
  Lut: {
    password: "leader123",
    page: "dashboard.html"
  },
  Kuvi: {
    password: "finance123",
    page: "dashboard.html"
  }
};

function login() {
  const username = document.getElementById("user").value;
  const password = document.getElementById("pass").value;

  if (users[username] && users[username].password === password) {
    window.location.href = users[username].page;
  } else {
    document.getElementById("msg").innerHTML =
      "❌ Invalid username or password";
  }
}
