// Profile updater and theme changer
let profileName = document.getElementById("profileName");
let profileBio = document.getElementById("profileBio");
let updateBtn = document.getElementById("updateProfile");
let themeBtn = document.getElementById("changeTheme");
let card = document.querySelector(".card");

updateBtn.onclick = function() {
    let newName = prompt("Enter your name:");
    let newBio = prompt("Enter your bio:");
    
    if (newName) profileName.innerHTML = newName;
    if (newBio) profileBio.innerHTML = newBio;
};

themeBtn.onclick = function() {
    let themes = ["bg-primary", "bg-success", "bg-warning", "bg-info", "bg-danger", "bg-dark"];
    let randomTheme = themes[Math.floor(Math.random() * themes.length)];
    
    // Remove old theme classes
    card.className = "card " + randomTheme + " text-white";
};