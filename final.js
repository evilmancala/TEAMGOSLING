const genreData = {
    action: {
        title: "The Fall Guy", 
        year: "2024", 
        rating: "PG-13",
        imdb: "7.0/10", 
        rotten: "82%", 
        letterboxd: "3.5/5",
        text: "'A stuntman, fresh off an almost career-ending accident...' - IMDb",
        image: "https://www.movieposters.com/cdn/shop/files/scan_35b6fe4a-0c3d-4d2d-9d22-ddb7a4ad576c_1024x1024.jpg?v=1762974488"
    },
    barbie: {
        title: "Barbie",
        year: "2023",
        rating: "PG-13",
        imdb: "6.8/10",
        rotten: "88%",
        letterboxd: "3.9/5",
        text: "'Barbie and Ken are having the time of their lives in the seemingly perfect world of Barbie Land. However, when they get a chance to go to the outside world, they soon discover the joys and perils of living among regular humans.' - IMDb",
        image: "https://i.ebayimg.com/images/g/F4UAAOSwjHJktzer/s-l1600.webp"
    },

    comedy: {
        title: "Lars and the Real Girl",
        year: "2007",
        rating: "PG-13",
        imdb: "7.3/10",
        rotten: "81%",
        letterboxd: "3.7/5",
        text: "‘A delusional young man strikes up an unconventional relationship with a doll he finds on the Internet.’ - IMDb",
        image: "https://m.media-amazon.com/images/M/MV5BZThiOTA4N2UtNzJiYS00MDI0LWI3OWItYzYxYzU3M2YwM2M4XkEyXkFqcGc@._V1_.jpg"
    },

    thriller: {
        title: "The Gray Man",
        year: "2022",
        rating: "PG-13",
        imdb: "6.5/10",
        rotten: "45%",
        letterboxd: "2.9/5",
        text: "'When the CIA's most skilled operative accidentally uncovers dark agency secrets, a psychopathic former colleague puts a bounty on his head.' - IMDb",
        image: "https://m.media-amazon.com/images/M/MV5BZmFhZTNlNzctZGQzZi00MTA3LThiNjMtYWQzNjUzMjNjZjA3XkEyXkFqcGc@._V1_.jpg"
    },

    crime: {
        title: "Drive",
        year: "2011",
        rating: "R",
        imdb: "7.8/10",
        rotten: "93%",
        letterboxd: "3.9/5",
        text: "‘A mysterious Hollywood action film stuntman gets in trouble with gangsters when he helps his neighbor's husband rob a pawn shop.’ - IMDb",
        image: "https://upload.wikimedia.org/wikipedia/en/1/13/Drive2011Poster.jpg"
    },

    musical: {
        title: "La La Land",
        year: "2016",
        rating: "PG-13",
        imdb: "8.0/10",
        rotten: "91%",
        letterboxd: "4.1/5",
        text: "‘When Sebastian, a pianist, and Mia, an actress, follow their passion and achieve success in their respective fields, they find themselves torn between their love for each other and their careers.’ - IMDb",
        image: "https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_.jpg"
    },

    mystery: {
        title: "The Nice Guys",
        year: "2016",
        rating: "R",
        imdb: "7.4/10",
        rotten: "91%",
        letterboxd: "3.8/5",
        text: "‘In 1970s Los Angeles, a mismatched pair of private eyes investigate a missing girl and the mysterious death of a porn star.’ - IMDb",
        image: "https://upload.wikimedia.org/wikipedia/en/e/e9/The_Nice_Guys_poster.png"
    },

    romance: {
        title: "The Notebook",
        year: "2004",
        rating: "PG-13",
        imdb: "7.8/10",
        rotten: "54%",
        letterboxd: "3.9/5",
        text: "‘An elderly man reads to a woman with dementia the story of two young lovers whose romance is threatened by the difference in their respective social classes.’ - IMDb",
        image: "https://m.media-amazon.com/images/M/MV5BZjE0ZjgzMzYtMTAxYi00NGMzLThmZDktNzFlMzA2MWRmYWQ0XkEyXkFqcGc@._V1_.jpg"
    },

    scifi: {
        title: "Blade Runner 2049",
        year: "2017",
        rating: "R",
        imdb: "8.0/10",
        rotten: "88%",
        letterboxd: "4.1/5",
        text: "‘Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard.’ - IMDb",
        image: "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_FMjpg_UX1000_.jpg"
    }
};


const elements = {
  startButton: document.getElementById("startBtn"),
  genreSection: document.getElementById("genreSection"),
  genreSelect: document.getElementById("genres"),
  popup: document.getElementById("popupBox"),
  popupText: document.getElementById("popupText"),
  popupImage: document.getElementById("popupImage"),
  movieTitle: document.getElementById("movieTitle"),
  movieYear: document.getElementById("movieYear"),
  movieRating: document.getElementById("movieRating"),
  imdbRating: document.getElementById("imdbRating"),
  rottenRating: document.getElementById("rottenRating"),
  letterboxdRating: document.getElementById("letterboxdRating"),
  closeBtn: document.getElementById("closePopup"),
};


function showPopup() { elements.popup.style.display = "block"; }
function hidePopup()  { elements.popup.style.display = "none"; }

function updateMovieInfo(data) {
  elements.movieTitle.textContent = data.title;
  elements.movieYear.textContent = data.year;
  elements.movieRating.textContent = data.rating;
  elements.imdbRating.innerHTML = `<strong>IMDb:</strong> ${data.imdb}`;
  elements.rottenRating.innerHTML = `<strong>Rotten Tomatoes:</strong> ${data.rotten}`;
  elements.letterboxdRating.innerHTML = `<strong>Letterboxd:</strong> ${data.letterboxd}`;
  elements.popupText.textContent = data.text;
  elements.popupImage.src = data.image;
}


elements.startButton.addEventListener("click", () => {
  elements.genreSection.style.display = "block";
  elements.startButton.style.display  = "none";
});

elements.genreSelect.addEventListener("change", () => {
  const data = genreData[elements.genreSelect.value];
  if (!data) return; // guard against empty/invalid selection
  updateMovieInfo(data);
  showPopup();
});

elements.popup.addEventListener("click", hidePopup);
elements.closeBtn.addEventListener("click", hidePopup);
