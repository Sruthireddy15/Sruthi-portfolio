let welcomeButton = document.getElementById("welcomeBtn");
let welcomeMessage = document.getElementById("welcomeMessage");

welcomeButton.addEventListener("click", function() {
    welcomeMessage.textContent = "Welcome to my portfolio!";
});


let profileCard = document.getElementById("profileCard");

profileCard.addEventListener("click", function() {
    profileCard.querySelector("p").textContent =
        "Thank you for visiting my portfolio!";
});


let year = document.getElementById("year");

year.textContent = new Date().getFullYear();