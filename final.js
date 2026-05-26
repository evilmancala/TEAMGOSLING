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
        title: "The Fall Guy",
        year: "2024",
        rating: "PG-13",
        text: "'A stuntman, fresh off an almost career-ending accident, has to track down a missing movie star, solve a conspiracy and try to win back the love of his life while still doing his day job.' - IMDb",
        image: "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/img_6616.jpeg"
    
    }
};

let genreData2 = {
    barbie: {
        title: "Barbie",
        year: "2023",
        rating: "PG-13",
        text: "'Barbie and Ken are having the time of their lives in the seemingly perfect world of Barbie Land. However, when they get a chance to go to the outside world, they soon discover the joys and perils of living among regular humans.'” - IMDb",
        image: "https://i.ebayimg.com/images/g/F4UAAOSwjHJktzer/s-l1600.webp"
    
    }
};
let movieTitle = document.getElementById("movieTitle");
let movieYear = document.getElementById("movieYear");
let movieRating = document.getElementById("movieRating");
genreSelect.addEventListener("change", function () {

    let value = genreSelect.value;
    let data = genreData[value];

    movieTitle.textContent = data.title;
    movieYear.textContent = data.year;
    movieRating.textContent = data.rating;

    popupText.textContent = data.text;
    popupImage.src = data.image;

    popup.style.display = "block";

 let value = genreSelect.value;

    let data2 = genreData2[value];

    movieTitle.textContent = data2.title;
    movieYear.textContent = data2.year;
    movieRating.textContent = data2.rating;

    popupText.textContent = data2.text;
    popupImage.src = data2.image;

    popup.style.display = "block";
});


    
