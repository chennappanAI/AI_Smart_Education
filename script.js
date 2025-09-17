function login() {
    let role = document.getElementById("role").value;
    if(role === "") {
        alert("Please select a role!");
        return;
    }

    document.querySelector(".login-container").style.display = "none";
    document.getElementById("dashboard").style.display = "block";

    let title = document.getElementById("dashboard-title");
    let content = document.getElementById("dashboard-content");

    if(role === "school") {
        title.innerText = "School Student Dashboard";
        content.innerHTML = "<button onclick='alert(\"View Courses\")'>My Courses</button> <button onclick='alert(\"Take Quiz\")'>Quizzes</button>";
    } else if(role === "college") {
        title.innerText = "College Student Dashboard";
        content.innerHTML = "<button onclick='alert(\"View Courses\")'>My Courses</button> <button onclick='alert(\"Take Quiz\")'>Quizzes</button>";
    } else if(role === "teacher") {
        title.innerText = "Teacher Dashboard";
        content.innerHTML = "<button onclick='alert(\"Add Course\")'>Add Course</button> <button onclick='alert(\"View Students\")'>View Students</button>";
    }
}

function logout() {
    document.getElementById("dashboard").style.display = "none";
    document.querySelector(".login-container").style.display = "block";
    document.getElementById("role").value = "";
}
