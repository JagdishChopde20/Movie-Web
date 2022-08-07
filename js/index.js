// @ts-check

import { themeColors, getFullLanguageName } from "./globals";

// Set Random Accent Color
const themeColor = themeColors[Math.floor(Math.random() * themeColors.length)];

// Get the root element
var r = document.querySelector(':root');

// Set the value of accent color css variables
r.style.setProperty('--color-accent', themeColor.color);
r.style.setProperty('--color-accent-rgb', themeColor.colorRgb);
r.style.setProperty('--color-accent-contrast', themeColor.colorContrast);
r.style.setProperty('--color-accent-shade', themeColor.colorShade);
r.style.setProperty('--color-accent-tint', themeColor.colorTint);


import { getMovieDetails, genres, getWatchProviders } from "./api";
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
const logo_baseurl = baseImgUrl + 'w300';

const ids = ['261392', '616037', '438148', '507086', '361743', '725201', '718789', '453395', '756999', '854467', '919355', '634649', '759175', '728366', '924482', '961484', '629015', '836225', '675353', '626735', '894169'];
const id = ids[Math.floor(Math.random() * ids.length)];

// Get Movie Details
getMovieDetails(id).then(data => {
    try {
        console.log(data);

        // Set Backdrop
        const hero = document.querySelector('.hero');
        hero.style.backgroundImage = `url(${backdrop_baseurl + data.backdrop_path})`;

        // Set Tagline
        const tagline = document.querySelector('.tagline__text') as HTMLElement;
        tagline.textContent = data.tagline;

        // Set Poster
        const poster = document.querySelector('.poster');
        poster.src = poster_baseurl + data.poster_path;

        // Set Movie Title Image
        if (data.images?.logos[0]?.file_path) {
            const imgTitle = document.querySelector('.img-movie-title');
            imgTitle.src = poster_baseurl + data.images.logos[0].file_path;
        }

        // Set Title
        const title = document.querySelector('.movie-title');
        title.textContent = data.title;

        // Set Rating
        const rating = document.querySelector('.rating');
        rating.textContent = data.vote_average.toFixed(1);

        // Set Language
        const language = document.querySelector('.language');
        language.textContent = getFullLanguageName(data.original_language).toUpperCase();

        // Set Status
        const status = document.querySelector('.status');
        status.textContent = `${data.status} ${data.release_date}`;

        // Set Runtime
        const runtime = document.querySelector('.runtime');
        runtime.textContent = data.runtime + (data.runtime ? ' MINS' : '');

        // Set Trailer
        if (data.videos?.results?.length > 0) {
            let trailer_key = data.videos?.results?.find(item => item.name === 'Official Trailer')?.key;
            trailer_key = trailer_key ? trailer_key : data.videos?.results[0]?.key;
            if (trailer_key) {
                const trailer_path = 'https://www.youtube.com/embed/' + trailer_key;
                const videoiframe = document.getElementById('iframe-video');
                videoiframe.src = trailer_path;
            } else {
                // Disable video button
                const playBtn = document.querySelector('.play-video-button') as HTMLElement;
                playBtn.disabled = true;
                // Set No Trailer Available
                const playBtnText = document.querySelector('.play-video-button__text');
                playBtnText.textContent = 'Trailer Not Available';
            }

        } else {
            // Disable video button
            const playBtn = document.querySelector('.play-video-button') as HTMLElement;
            playBtn.disabled = true;
            // Set No Trailer Available
            const playBtnText = document.querySelector('.play-video-button__text');
            playBtnText.textContent = 'Trailer Not Available';
        }

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

            const itemHTML = `  <figure class="genre">
                                <img class="genre__icon" src="${genreImg}" alt="${element.name}">
                                <figcaption class="genre__text"> ${element.name} </figcaption>
                            </figure>`;
            genres.insertAdjacentHTML('beforeend', itemHTML);
        });

        // Set Storyline Background
        const storyline_container = document.querySelector('.storyline');
        storyline_container.style.backgroundImage = `url(${backdrop_baseurl + data.images.backdrops[1].file_path})`;

        // Set Storyline
        const storyline = document.querySelector('.storyline__content--items');
        storyline.textContent = data.overview;


        // Set Cast 4
        if (data.credits && data.credits.cast && data.credits.cast.length > 0) {
            let castsToShow = [];
            if (data.credits.cast.length > 8) {
                castsToShow = data.credits.cast.slice(0, 7);
            } else {
                castsToShow = data.credits.cast.slice(0, 8);
            }

            const casts = document.querySelector('.casts__content--items');
            castsToShow.forEach(element => {
                const photoUrl = poster_baseurl + element.profile_path;
                const itemHTML = `  <figure class="cast">
                                        <img class="cast__photo" src="${photoUrl}" alt="Photo of ${element.name}">
                                        <figcaption class="cast__text">
                                            <h4 class="cast-name">${element.name}</h4>
                                            <p class="cast-as">${element.character}</p>
                                        </figcaption>
                                    </figure>`;
                casts.insertAdjacentHTML('beforeend', itemHTML);
            });

            if (data.credits.cast.length > 8) {
                const viewAllHTML = `<div class="view-all-casts">
                                        <i class="fas fa-chevron-right"></i>
                                    </div>`;
                casts.insertAdjacentHTML('beforeend', viewAllHTML);
            }
        } else {
            // Hide Casts Section
            const casts_section = document.querySelector('.casts') as HTMLElement;
            casts_section.style.display = 'none';
        }
    } catch (error) {
        console.error(error);
    }
});

// Get Watch Providers
getWatchProviders(id).then(data => {
    console.log(data, data?.results?.IN?.flatrate?.length > 0);
    if (data?.results?.IN?.flatrate?.length > 0) {
        console.log(data?.results?.IN?.flatrate);
        const dataWatchproviders = data?.results?.IN?.flatrate;
        // Set Genres
        const watchproviders = document.querySelector('.watchproviders--items') as HTMLElement;
        dataWatchproviders.forEach(element => {
            let watchproviderImg = logo_baseurl + element.logo_path;

            const itemHTML = `  <a href="${data?.results?.IN?.link}" target="_blank" class="watchprovider">
                                    <img class="watchprovider__icon" src="${watchproviderImg}" alt="${element.provider_name}">
                                    <figcaption class="watchprovider__text"> ${element.provider_name} </figcaption>
                                </a>`;
            watchproviders.insertAdjacentHTML('beforeend', itemHTML);
        });
    } else {
        // Hide Watch Providers section
        const watchproviders = document.querySelector('.watchproviders') as HTMLElement;
        watchproviders.style.display = 'none';
    }
});


// VIDEO POPUP OPEN / CLSOE LOGIC

document.querySelector('.play-video-button').addEventListener('click', openVideoPopup);

function openVideoPopup() {
    const videopopup = document.querySelector('.video-popup');
    videopopup.style.visibility = 'visible';
    videopopup.style.opacity = '.8';

    const videocontainer = document.querySelector('.video-container');
    videocontainer.style.visibility = 'visible';

    const body = document.querySelector('body');
    body.style.overflow = 'hidden';
}

document.querySelector('.video-container').addEventListener('click', closeVideoPopup);

function closeVideoPopup() {
    const videopopup = document.querySelector('.video-popup');
    videopopup.style.visibility = 'hidden';
    videopopup.style.opacity = '0';

    const videocontainer = document.querySelector('.video-container');
    videocontainer.style.visibility = 'hidden';

    const videoiframe = document.querySelector('.video-content iframe');
    var url = videoiframe.getAttribute('src');
    videoiframe.setAttribute('src', '');
    videoiframe.setAttribute('src', url);

    const body = document.querySelector('body');
    body.style.overflow = 'auto';
}