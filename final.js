const genreData = {
    action: {
        title: "The Fall Guy", 
        year: "2024", 
        rating: "PG-13",
        imdb: "7.0/10", 
        rotten: "82%", 
        letterboxd: "3.5/5",
        text: "'A stuntman, fresh off an almost career-ending accident, has to track down a missing movie star, solve a conspiracy and try to win back the love of his life while still doing his day job.' - IMDb",
        image: "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/img_6616.jpeg",
        trailer: "https://youtu.be/j7jPnwVGdZ8?si=N8gx3l1EgQYeV4PC"
    },
    barbie: {
        title: "Barbie",
        year: "2023",
        rating: "PG-13",
        imdb: "6.8/10",
        rotten: "88%",
        letterboxd: "3.9/5",
        text: "'Barbie and Ken are having the time of their lives in the seemingly perfect world of Barbie Land. However, when they get a chance to go to the outside world, they soon discover the joys and perils of living among regular humans.' - IMDb",
        image: "https://i.ebayimg.com/images/g/F4UAAOSwjHJktzer/s-l1600.webp",
        trailer: "https://youtu.be/pBk4NYhWNMM?si=EXeceQN98B_LePMN"
    },
    comedy: {
        title: "Lars and the Real Girl",
        year: "2007",
        rating: "PG-13",
        imdb: "7.3/10",
        rotten: "81%",
        letterboxd: "3.7/5",
        text: "'A delusional young man strikes up an unconventional relationship with a doll he finds on the Internet.' - IMDb",
        image: "https://m.media-amazon.com/images/M/MV5BZThiOTA4N2UtNzJiYS00MDI0LWI3OWItYzYxYzU3M2YwM2M4XkEyXkFqcGc@._V1_.jpg",
        trailer: "https://youtu.be/XNcs9DrKYRU?si=X3LsWIyBPhzYpSXb"
   
    },
    crime: {
        title: "Drive",
        year: "2011",
        rating: "R",
        imdb: "7.8/10",
        rotten: "93%",
        letterboxd: "3.9/5",
        text: "'A mysterious Hollywood action film stuntman gets in trouble with gangsters when he helps his neighbor's husband rob a pawn shop.' - IMDb",
        image: "https://upload.wikimedia.org/wikipedia/en/1/13/Drive2011Poster.jpg",
        trailer: "https://youtu.be/KBiOF3y1W0Y?si=jiz9EBUVdLLDzqDq"
    },
    musical: {
    title: "La La Land",
    year: "2016",
    rating: "PG-13",
    imdb: "8.0/10",
    rotten: "91%",
    letterboxd: "4.1/5",
    text: "'When Sebastian, a pianist, and Mia, an actress, follow their passion and achieve success in their respective fields, they find themselves torn between their love for each other and their careers.' - IMDb",
    image: "https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_.jpg",
    trailer: "https://youtu.be/0pdqf4P9MB8?si=hcWRyV4UWYDjoeRd"
    },
    mystery: {
        title: "The Nice Guys",
        year: "2016",
        rating: "R",
        imdb: "7.4/10",
        rotten: "91%",
        letterboxd: "3.8/5",
        text: "'In 1970s Los Angeles, a mismatched pair of private eyes investigate a missing girl and the mysterious death of a porn star.' - IMDb",
        image: "https://upload.wikimedia.org/wikipedia/en/e/e9/The_Nice_Guys_poster.png",
        trailer: "https://youtu.be/GQR5zsLHbYw?si=mw6-1wNTbJVG19Jb"
    },
    romance: {
        title: "The Notebook",
        year: "2004",
        rating: "PG-13",
        imdb: "7.8/10",
        rotten: "54%",
        letterboxd: "3.9/5",
        text: "'An elderly man reads to a woman with dementia the story of two young lovers whose romance is threatened by the difference in their respective social classes.' - IMDb",
        image: "https://i.ebayimg.com/images/g/proAAOxy-1lRIBE9/s-l1600.webp",
        trailer: "https://youtu.be/BjJcYdEOI0k?si=GNo6FCAuHuU7DNXS"
    },
    scifi: {
        title: "Blade Runner 2049",
        year: "2017",
        rating: "R",
        imdb: "8.0/10",
        rotten: "88%",
        letterboxd: "4.1/5",
        text: "'Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard.' - IMDb",
        image: "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_FMjpg_UX1000_.jpg",
        trailer: "https://youtu.be/gCcx85zbxz4?si=P4yPEYLCXfDKCydF"
     },
    thriller: {
        title: "The Gray Man",
        year: "2022",
        rating: "R",
        imdb: "6.5/10",
        rotten: "45%",
        letterboxd: "2.8/5",
        text: "'When the CIA's most skilled operative accidentally uncovers dark agency secrets, a psychopathic former colleague puts a bounty on his head, setting off a global manhunt.' - IMDb",
        image: "https://m.media-amazon.com/images/M/MV5BZmFhZTNlNzctZGQzZi00MTA3LThiNjMtYWQzNjUzMjNjZjA3XkEyXkFqcGc@._V1_.jpg",
        trailer: "https://youtu.be/BmllggGO4pM?si=CleiVw1LyfqX0mYd"
    }
};


const quizData = [
  {
    question: "What year was Ryan Gosling born?",
    choices: ["1978", "1980", "1982", "1975"],
    answer: "1980"
  },
  {
    question: "Which Canadian city is Ryan Gosling from?",
    choices: ["Toronto", "Vancouver", "London", "Ottawa"],
    answer: "London"
  },
  {
    question: "What Disney program was Ryan Gosling a cast member of as a child?",
    choices: ["Disney Channel Games", "All That", "The Mickey Mouse Club", "Kids Incorporated"],
    answer: "The Mickey Mouse Club"
  },
  {
    question: "Which movie earned Ryan Gosling his first Oscar nomination?",
    choices: ["La La Land", "Half Nelson", "Blue Valentine", "Drive"],
    answer: "Half Nelson"
  },
  {
    question: "What instrument does Ryan Gosling play in La La Land?",
    choices: ["Guitar", "Violin", "Drums", "Piano"],
    answer: "Piano"
  },
  {
    question: "In Barbie, what is Ken's catchphrase obsession?",
    choices: ["Surfing", "Horses", "Cars", "Chess"],
    answer: "Horses"
  },
  {
    question: "Which film features Ryan Gosling as a stuntman?",
    choices: ["The Gray Man", "The Nice Guys", "The Fall Guy", "Drive"],
    answer: "The Fall Guy"
  },
  {
    question: "Who did Ryan Gosling co-star with in The Notebook?",
    choices: ["Scarlett Johansson", "Rachel McAdams", "Emma Stone", "Eva Mendes"],
    answer: "Rachel McAdams"
  },
];

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
  trailerLink: document.getElementById("trailerLink"),
  closeBtn: document.getElementById("closePopup"),
  tadaSound: document.getElementById("tadaSound"),
  fallSong: document.getElementById("fallSong"),
  barbieSong: document.getElementById("barbieSong"),
  larsSong: document.getElementById("larsSong"),
  driveSong: document.getElementById("driveSong"),
  lalaSong: document.getElementById("lalaSong"),
  niceguySong: document.getElementById("niceguySong"),
  notebookSong: document.getElementById("notebookSong"),
  bladeSong": document.getElementById("bladeSong"),

};


function showPopup() { elements.popup.style.display = "block"; }
function hidePopup()  { elements.popup.style.display = "none"; }

function updateTrailerLink(trailerUrl) {
  if (trailerUrl) {
    elements.trailerLink.href = trailerUrl;
    elements.trailerLink.style.display = "inline-block";
  } else {
    elements.trailerLink.style.display = "none";
  }
}

function updateMovieInfo(data) {
  elements.movieTitle.textContent = data.title;
  elements.movieYear.textContent = data.year;
  elements.movieRating.textContent = data.rating;
  elements.imdbRating.innerHTML = `<strong>IMDb:</strong> ${data.imdb}`;
  elements.rottenRating.innerHTML = `<strong>Rotten Tomatoes:</strong> ${data.rotten}`;
  elements.letterboxdRating.innerHTML = `<strong>Letterboxd:</strong> ${data.letterboxd}`;
  elements.popupText.textContent = data.text;
  elements.popupImage.src = data.image;
  updateTrailerLink(data.trailer);
}


elements.startButton.addEventListener("click", () => {
  elements.genreSection.style.display = "block";
  elements.startButton.style.display  = "none";
});

elements.genreSelect.addEventListener("change", () => {
  const data = genreData[elements.genreSelect.value];
  if (!data) return;
  updateMovieInfo(data);
  showPopup();

  elements.tadaSound.currentTime = 4;
  elements.tadaSound.play();
});

elements.popup.addEventListener("click", hidePopup);
elements.closeBtn.addEventListener("click", hidePopup);

let currentQuestion = 0;
let score = 0;

const quizElements = {
    section: document.getElementById("quizSection"),
    question: document.getElementById("quizQuestion"),
    choices: document.getElementById("quizChoices"),
    feedback: document.getElementById("quizFeedback"),
    score: document.getElementById("quizScore"),
    nextBtn: document.getElementById("nextBtn"),
    restartBtn: document.getElementById("restartBtn"),
    quizBtn: document.getElementById("quizBtn"),
};

function startQuiz() {
    currentQuestion = 0;
    score = 0;
    quizElements.section.style.display = "block";
    quizElements.restartBtn.style.display = "none";
    quizElements.score.textContent = "";
    quizElements.quizBtn.style.display = "none";
    loadQuestion();
}

function loadQuestion() {
    const q = quizData[currentQuestion];

    quizElements.feedback.textContent = "";
    quizElements.nextBtn.style.display = "none";
    quizElements.question.textContent = `Q${currentQuestion + 1}: ${q.question}`;
    quizElements.choices.innerHTML = "";

    q.choices.forEach(choice => {
        const btn = document.createElement("button");
        btn.textContent = choice;
        btn.addEventListener("click", () => handleAnswer(btn, choice, q.answer));
        quizElements.choices.appendChild(btn);
    });
}

function handleAnswer(btn, selected, correct) {
    // disable all buttons after answering
    quizElements.choices.querySelectorAll("button").forEach(b => b.disabled = true);

    if (selected === correct) {
        score++;
        btn.style.backgroundColor = "green";
        quizElements.feedback.textContent = "✅ Correct!";
    } else {
        btn.style.backgroundColor = "red";
        quizElements.feedback.textContent = `❌ Wrong! The answer was: ${correct}`;
        // highlight the correct answer
        quizElements.choices.querySelectorAll("button").forEach(b => {
        if (b.textContent === correct) b.style.backgroundColor = "green";
        });
    }

    if (currentQuestion + 1 < quizData.length) {
        quizElements.nextBtn.style.display = "inline-block";
    } else {
        // show feedback first, then reveal the results button
        const resultsBtn = document.createElement("button");
        resultsBtn.textContent = "See Your Results";
        resultsBtn.addEventListener("click", showResults);
        quizElements.feedback.appendChild(document.createElement("br"));
        quizElements.feedback.appendChild(resultsBtn);
    }
}

function showResults() {
    quizElements.question.textContent = "Quiz Complete!";
    quizElements.choices.innerHTML = "";
    quizElements.nextBtn.style.display = "none";
    quizElements.feedback.textContent = "";
    quizElements.score.textContent = `You scored ${score} out of ${quizData.length}!`;
    quizElements.restartBtn.style.display = "inline-block";
}


quizElements.quizBtn.addEventListener("click", startQuiz);
quizElements.nextBtn.addEventListener("click", () => {
    currentQuestion++;
    loadQuestion();
});
quizElements.restartBtn.addEventListener("click", startQuiz);
