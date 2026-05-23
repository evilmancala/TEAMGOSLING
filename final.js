 let startButton = document.getElementById("startBtn");
let genreSection = document.getElementById("genreSection");

startButton.onclick = function () {
    genreSection.style.display = "block";
    startButton.style.display = "none";
}

let genreSelect = document.getElementById("genres");
let popup = document.getElementById("popupBox");
let popupText = document.getElementById("popupText");

genreSelect.addEventListener("change", function () {
    let value = genreSelect.value;

    popupText.textContent = "You picked: " + value;

    popup.style.display = "block";
});

popup.onclick = function () {
    popup.style.display = "none";
};