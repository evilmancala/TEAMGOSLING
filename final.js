 let startButton = document.getElementById("startBtn");
let genreSection = document.getElementById("genreSection");

startButton.onclick = function () {
    genreSection.style.display = "block";
    startButton.style.display = "none";
}

let genreSelect = document.getElementById("genres");
let popup = document.getElementById("popupBox");
let popupText = document.getElementById("popupText");
let popupImage = document.getElementById("popupImage");

genreSelect.addEventListener("change", function () {
    let value = genreSelect.value;
    let data = genreData[value];

    popupText.textContent = data.text;
    popupImage.src = data.image;

    popup.style.display = "block";
});

popup.onclick = function () {
    popup.style.display = "none";
};

let closeBtn = document.getElementById("closePopup");

closeBtn.onclick = function () {
    popup.style.display = "none";
};

let genreData = {
    action: {
        text: "'A stuntman, fresh off an almost career-ending accident, has to track down a missing movie star, solve a conspiracy and try to win back the love of his life while still doing his day job.' - IMDb",
        image: "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/img_6616.jpeg"
    }
};

let value = genreSelect.value;

popupText.textContent = genreData[value].text;
popupImage.src = genreData[value].image;