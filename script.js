function login() {
  let role = document.getElementById("role").value;
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let subject = document.getElementById("subject").value;

  if(name === "" || email === "" || subject === "") {
    alert("Please fill all fields!");
    return;
  }

  // Save user data temporarily (localStorage)
  localStorage.setItem("role", role);
  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("subject", subject);

  // Redirect to dashboard
  window.location.href = "dashboard.html";
}
