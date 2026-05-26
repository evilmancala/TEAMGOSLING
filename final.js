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
    
    },
 barbie: {
        title: "Barbie",
        year: "2023",
        rating: "PG-13",
        text: "'Barbie and Ken are having the time of their lives in the seemingly perfect world of Barbie Land. However, when they get a chance to go to the outside world, they soon discover the joys and perils of living among regular humans.'” - IMDb",
        image: "https://i.ebayimg.com/images/g/F4UAAOSwjHJktzer/s-l1600.webp"
     },
	comedy: {
        title: "Lars and the Real Girl",
        year: "2007",
        rating: "PG-13",
        text: "‘A delusional young man strikes up an unconventional relationship with a doll he finds on the Internet.’ - IMDb",
        image: "https://m.media-amazon.com/images/M/MV5BZThiOTA4N2UtNzJiYS00MDI0LWI3OWItYzYxYzU3M2YwM2M4XkEyXkFqcGc@._V1_.jpg"
},
	thriller: {
        title: "The Gray Man",
        year: "2022",
        rating: "PG-13",
        text: "'When the CIA's most skilled operative, whose true identity is known to none, accidentally uncovers dark agency secrets, a psychopathic former colleague puts a bounty on his head, setting off a global manhunt by international assassins.’ - IMDb",
        image: "https://m.media-amazon.com/images/M/MV5BZmFhZTNlNzctZGQzZi00MTA3LThiNjMtYWQzNjUzMjNjZjA3XkEyXkFqcGc@._V1_.jpg"
},
	crime: {
        title: "Drive",
        year: "2011",
        rating: "R",
        text: "‘A mysterious Hollywood action film stuntman gets in trouble with gangsters when he tries to help his neighbor's husband rob a pawn shop while serving as his getaway driver.’ - IMDb",
        image: "https://upload.wikimedia.org/wikipedia/en/1/13/Drive2011Poster.jpg"
},
	musical: {
        title: "La La Land",
        year: "2016",
        rating: "PG-13",
        text: "‘When Sebastian, a pianist, and Mia, an actress, follow their passion and achieve success in their respective fields, they find themselves torn between their love for each other and their careers.’ - IMDb",
        image: "https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_.jpg"
},
  	mystery: {
        title: "The Nice Guys",
        year: "2016",
        rating: "R",
        text: "‘In 1970s Los Angeles, a mismatched pair of private eyes investigate a missing girl and the mysterious death of a porn star.’ - IMDb",
        image: "https://upload.wikimedia.org/wikipedia/en/e/e9/The_Nice_Guys_poster.png"
},
	romance: {
        title: "The Notebook",
        year: "2004",
        rating: "PG-13",
        text: "‘An elderly man reads to a woman with dementia the story of two young lovers whose romance is threatened by the difference in their respective social classes.’ - IMDb ",
        image: "https://m.media-amazon.com/images/M/MV5BZjE0ZjgzMzYtMTAxYi00NGMzLThmZDktNzFlMzA2MWRmYWQ0XkEyXkFqcGc@._V1_.jpg"
},
	scifi: {
        title: "Blade Runner 2049",
        year: "2024",
        rating: "PG-13",
        text: "'Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years.' - IMDb",
        image: "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_FMjpg_UX1000_.jpg"
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
});
