let url="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
//let url ="https://image.tmdb.org/t/p/w1280"
fetch(url)
.then(response => response.json())
.then(response => {
    response.results.forEach(element => {
        console.log(element)
    });
    
})
