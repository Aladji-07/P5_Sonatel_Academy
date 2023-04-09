const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const movieContainer = document.querySelector(".movie-container");
const searchInput = document.querySelector("#search");
const overlay = document.querySelector(".overlay");
const searchTerm = document.getElementById("search")


searchTerm.addEventListener('input',(e) => {
  const query = e.target.value;
  if (query === ""){
    getMovies(APIURL);
  }
  else{
    const NvURL= SEARCHAPI + query
    getMovies(NvURL)
  }
})

// Afficher le catalogue de films
getMovies(APIURL);

async function getMovies(url) {
  const response = await fetch(url);
  const data = await response.json();

  movieContainer.innerHTML = "";

  data.results.forEach((movie) => {
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
      <img src="${IMGPATH + movie.poster_path}" alt="${movie.title}">
      <div class="movie-info">
        <h3>${movie.title}</h3>
        <p>${movie.release_date}</p>
        <p>${movie.overview}</p>
      </div>
      <div class="info-fix">
        <h3>${movie.title}</h3>
        <div class="vote">${movie.vote_average}
        </div>
      </div>
    `;
    movieContainer.appendChild(movieEl);
  });
}

// Au survol d'un film on aura la description du film
const movies = document.querySelectorAll(".movie");

movies.forEach((movie) => {
  movie.addEventListener("mouseover", () => {
    movie.querySelector(".movie-info").style.opacity = "1";
  });
  movie.addEventListener("mouseout", () => {
    movie.querySelector(".movie-info").style.opacity = "0";
  });
});
const vote= document.getElementsByClassName("vote");
console.log(vote.innerText)

//couleur
// function  getColor ( voter )  {
//   if (vote >=  8 ) {
//     return  'vert'
//   } else  if (vote  >=  5 ) {
//       return  "orange"
//   } else {
//     return  'rouge'
//   }
// }