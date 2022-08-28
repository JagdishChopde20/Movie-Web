// @ts-check

import { getPopularMovies, getSearchMovies, poster_baseurl } from "./api";

// DEFAULT POSTER IMAGE
import ImgDefaultPoster from "../assets/no-poster.png";

let query = '';

const windowOnload = () => {
    const urlParams = new URLSearchParams(location.search);

    if (urlParams.has('query') && urlParams.get('query') != '') {
        query = urlParams.get('query');
        getSearchMovies(query).then(data => {
            console.log(data);
            if (data?.success === false) {
                alert(data.status_message);
                return;
            }
            loadMovies(data);
        });
        document.querySelector('.searchbox__input').value = query;

        // document.getElementById('search-heading')?.textContent = `Search results for "${query}"`;
    } else {
        // Get Popular Movies
        getPopularMovies().then(data => {
            console.log(data);
            if (data?.success === false) {
                alert(data.status_message);
                return;
            }
            loadMovies(data);
        });
    }

}

window.onload = windowOnload;

const performSearch = () => {
    const query = document.querySelector('.searchbox__input').value;
    if (query) {
        window.open('index.html?query=' + query, '_self');
    }
}

// Search Movies
document.querySelector('.searchbox__button')?.addEventListener('click', performSearch);
document.querySelector('.searchbox__input')?.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        performSearch();
    }
});

// Load Movies
const loadMovies = (movies) => {
    if (movies && movies?.results && movies?.results?.length > 0) {
        let moviesToShow = movies?.results;

        const searchMovies = document.querySelector('.search-movies');
        moviesToShow.forEach(element => {
            const posterUrl = poster_baseurl + element.poster_path;
            const itemHTML = `  <a class="a-movie" href="movie.html?id=${element.id}" rel="noopener noreferrer">
                        <figure class="movie">
                            <img class="movie__poster" src="${posterUrl}" alt="Poster of ${element.title}">
                            <figcaption class="movie__text">
                                <h4 class="movie-name">${element.title}</h4>
                                <p class="text-as">${element.release_date}</p>
                                <div class="rating-chip">
                                    <i class="fas fa-star"></i>
                                    <span class="rating">${element.vote_average.toFixed(1)}</span>
                                </div>
                            </figcaption>
                        </figure>
                    </a>`;
            searchMovies?.insertAdjacentHTML('beforeend', itemHTML);
        });


        // Set default poster img if real img failed to load
        document.querySelectorAll('.movie__poster, .poster__photo, .cast__photo, .poster, .b2collection-poster').forEach(e => {
            e.onerror = (img) => {
                img.target.src = ImgDefaultPoster;
            }
        });

    } else {
        // Hide Section
        const similar_movies_section = document.querySelector('.search-movies-section');
        similar_movies_section.style.display = 'none';
    }
}