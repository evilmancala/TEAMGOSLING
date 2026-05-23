 let startButton = document.getElementById("startBtn");
let genreSection = document.getElementById("genreSection");

startButton.onclick = function () {
    genreSection.style.display = "block";
    startButton.style.display = "none";
}