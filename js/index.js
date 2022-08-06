// @ts-check

import { getMovieDetails, genres } from "./api/api-movie";
import { signup } from "./popups/sign-up-in";

// GENRES IMAGES
import ImgAction from "../assets/genres-icons/Action.png";
import ImgAdventure from "../assets/genres-icons/Adventure.png";
import ImgAnimation from "../assets/genres-icons/Animation.png";
import ImgComedy from "../assets/genres-icons/Comedy.png";
import ImgCrime from "../assets/genres-icons/Crime.png";
import ImgDocumentary from "../assets/genres-icons/Documentary.png";
import ImgDrama from "../assets/genres-icons/Drama.png";
import ImgFamily from "../assets/genres-icons/Family.png";
import ImgFantasy from "../assets/genres-icons/Fantasy.png";
import ImgHistory from "../assets/genres-icons/History.png";
import ImgHorror from "../assets/genres-icons/Horror.png";
import ImgMusic from "../assets/genres-icons/Music.png";
import ImgMystery from "../assets/genres-icons/Mystery.png";
import ImgRomance from "../assets/genres-icons/Romance.png";
import ImgScienceFiction from "../assets/genres-icons/Science Fiction.png";
import ImgTVMovie from "../assets/genres-icons/TV Movie.png";
import ImgThriller from "../assets/genres-icons/Thriller.png";
import ImgWar from "../assets/genres-icons/War.png";
import ImgWestern from "../assets/genres-icons/Western.png";

const baseImgUrl = 'https://image.tmdb.org/t/p/';
const poster_baseurl = baseImgUrl + 'w780';
const backdrop_baseurl = baseImgUrl + 'w1280';

const ids = ['261392', '616037', '438148', '507086', '361743', '725201', '718789', '453395', '756999', '854467', '919355', '634649', '759175', '728366', '924482', '961484', '629015', '836225', '675353', '626735', '894169'];
const id = ids[Math.floor(Math.random() * ids.length)];

getMovieDetails(id).then(data => {
    try {
        console.log(data);

        // Set Backdrop
        const hero = document.querySelector('.hero');
        hero.style.backgroundImage = `url(${backdrop_baseurl + data.backdrop_path})`;

        // Set Tagline
        const tagline = document.querySelector('.tagline__text') as HTMLElement;
        tagline.textContent = data.tagline ? data.tagline : data.title;

        // Set Poster
        const poster = document.querySelector('.poster');
        poster.src = poster_baseurl + data.poster_path;

        // Set Title
        const title = document.querySelector('.movie-title');
        title.textContent = data.title;

        // Set Rating
        const rating = document.querySelector('.rating');
        rating.textContent = data.vote_average.toFixed(1);

        // Set Language
        const language = document.querySelector('.language');
        language.textContent = data.original_language.toUpperCase();

        // Set Status
        const status = document.querySelector('.status');
        status.textContent = `${data.status} ${data.release_date}`;

        // Set Runtime
        const runtime = document.querySelector('.runtime');
        runtime.textContent = data.runtime + (data.runtime ? ' MINS' : '');

        // Set Genres
        const genres = document.querySelector('.genres__content--items');
        data.genres.forEach(element => {
            let genreImg;
            switch (element.name) {
                case "Action":
                    genreImg = ImgAction;
                    break;
                case "Adventure":
                    genreImg = ImgAdventure;
                    break;
                case "Animation":
                    genreImg = ImgAnimation;
                    break;
                case "Comedy":
                    genreImg = ImgComedy;
                    break;
                case "Crime":
                    genreImg = ImgCrime;
                    break;
                case "Documentary":
                    genreImg = ImgDocumentary;
                    break;
                case "Drama":
                    genreImg = ImgDrama;
                    break;
                case "Family":
                    genreImg = ImgFamily;
                    break;
                case "Fantasy":
                    genreImg = ImgFantasy;
                    break;
                case "History":
                    genreImg = ImgHistory;
                    break;
                case "Horror":
                    genreImg = ImgHorror;
                    break;
                case "Music":
                    genreImg = ImgMusic;
                    break;
                case "Mystery":
                    genreImg = ImgMystery;
                    break;
                case "Romance":
                    genreImg = ImgRomance;
                    break;
                case "Science Fiction":
                    genreImg = ImgScienceFiction;
                    break;
                case "TV Movie":
                    genreImg = ImgTVMovie;
                    break;
                case "Thriller":
                    genreImg = ImgThriller;
                    break;
                case "War":
                    genreImg = ImgWar;
                    break;
                case "Western":
                    genreImg = ImgWestern;
                    break;

                default:
                    break;
            }

            const chip = `  <div class="genre">
                                <img class="genre__icon" src="${genreImg}" alt="${element.name}">
                                <h4 class="genre__text"> ${element.name} </h4>
                            </div>`;
            genres.insertAdjacentHTML('beforeend', chip);
        });
    } catch (error) {
        console.error(error);
    }
});