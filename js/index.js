
import { themeColors, getFullLanguageName } from "./globals";

function setThemeColor(colorIndex) {
    const themeColor = themeColors[colorIndex]; // Math.floor(Math.random() * themeColors.length)// Get the root element

    var r = document.querySelector(':root');

    // Set the value of accent color css variables
    r.style.setProperty('--color-accent', themeColor.color);
    r.style.setProperty('--color-accent-rgb', themeColor.colorRgb);
    r.style.setProperty('--color-accent-contrast', themeColor.colorContrast);
    r.style.setProperty('--color-accent-shade', themeColor.colorShade);
    r.style.setProperty('--color-accent-tint', themeColor.colorTint);
}

let colorIndex = 0;

function setColorPalette() {
    // get theme color lastly saved into localStorage
    const themeColorIndex = localStorage.getItem('themeColorIndex');
    if (themeColorIndex) {
        colorIndex = themeColorIndex;
        setThemeColor(themeColorIndex);
    } else {
        setThemeColor(colorIndex);
    }

    const themeContainer = document.querySelector('.theme-palette-container');

    for (let index = 0; index < themeColors.length; index++) {
        const color = themeColors[index];
        const themeBtn = `  <button class="btn-theme-palette" data-index="${index}" style="background-color:${color.color}; color:${index == colorIndex ? '#fff' : color.color}">
                                <i class="fas fa-fill-drip"></i>
                            </button>`;
        themeContainer.insertAdjacentHTML('beforeend', themeBtn);
    }

    document.querySelectorAll('.btn-theme-palette').forEach((e) => {
        e.addEventListener('click', (btn) => {
            const prevBtn = document.querySelector(`button[data-index='${colorIndex}']`);
            prevBtn.style.color = prevBtn.style.backgroundColor;

            colorIndex = btn.target.dataset.index;
            btn.target.style.color = '#fff';

            setThemeColor(colorIndex);

            // set theme color lastly saved into localStorage
            localStorage.setItem('themeColorIndex', colorIndex);
        })
    });
}
setColorPalette();

document.querySelector('.btn-theme').addEventListener('click', (e) => {
    const palette = document.querySelector('.theme-palette-container');
    if (palette.style.visibility == 'visible') {
        palette.style.visibility = 'collapse';
    } else {
        palette.style.visibility = 'visible';
    }
});

import { getMovieDetails, genres, getWatchProviders, getPersonImages } from "./api";
import { signup } from "./popups/sign-up-in";

// DEFAULT POSTER IMAGE
import ImgDefaultPoster from "../assets/no-poster.png";
import ImgDefaultBackdrop from "../assets/no-poster-land.png";

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
let id = '';
let movie;

const windowOnload = () => {
    const urlParams = new URLSearchParams(location.search);
    if (urlParams.has('id')) {
        id = urlParams.get('id');
    } else {
        id = ids[Math.floor(Math.random() * ids.length)];
    }

    if (!id || id == '') {
        alert('Unable to get movie details.');
        return;
    }
    // Get Movie Details
    getMovieDetails(id).then(data => {
        //try {
        console.log(data);
        if (data?.success === false) {
            alert(data.status_message);
            return;
        }

        movie = data;

        // Set Backdrop
        const hero = document.querySelector('.hero');
        hero.style.backgroundImage = `url(${backdrop_baseurl + data.backdrop_path})`;

        // If Tagline and Movie Title Image both null then set Movie name in Hero section
        if ((!data.tagline || data.tagline == '') && (!data.images?.logos[0]?.file_path || data.images?.logos[0]?.file_path == '')) {
            // Set Movie name in Tagline
            const tagline = document.querySelector('.tagline__text');
            tagline.textContent = data.title;
        } else {
            // Set Tagline
            const tagline = document.querySelector('.tagline__text');
            tagline.textContent = data.tagline;

            // Set Movie Title Image
            if (data.images?.logos[0]?.file_path) {
                const imgTitle = document.querySelector('.img-movie-title');
                imgTitle.src = poster_baseurl + data.images.logos[0].file_path;
            }
        }

        // Set Poster
        const poster = document.querySelector('.poster');
        poster.src = poster_baseurl + data.poster_path;

        // Set Title
        const title = document.querySelector('.movie-title');
        title.textContent = data.title;

        // Set Rating
        const rating = document.querySelector('.rating');
        rating.textContent = data.vote_average.toFixed(1);

        // Set Rating Progress Bar Value & Color
        const ratingBar = document.querySelector('.rating-chip');
        ratingBar.style.width = data.vote_average.toFixed(1) * 10 + '%';

        let rateColor = '';
        if (data.vote_average > 8) {
            rateColor = '#23a456';
        } else if (data.vote_average > 7) {
            rateColor = '#28ba62';
        } else if (data.vote_average > 6) {
            rateColor = '#3ec172';
        } else if (data.vote_average > 5) {
            rateColor = '#ff7426';
        } else if (data.vote_average > 4) {
            rateColor = '#eb445a';
        } else {
            rateColor = '#cf3c4f';
        }
        ratingBar.style.backgroundColor = rateColor;

        // Set Language
        const language = document.querySelector('.language');
        language.textContent = getFullLanguageName(data.original_language).toUpperCase();

        // Set Status
        const status = document.querySelector('.status');
        status.textContent = `${data.status} ${data.release_date}`;

        // Set Runtime
        const runtime = document.querySelector('.runtime');
        runtime.textContent = data.runtime + (data.runtime ? ' MINS' : '');

        // Set Votes
        const votes = document.querySelector('.votes');
        votes.textContent = data.vote_count;

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
                const playBtn = document.querySelector('.play-video-button');
                playBtn.disabled = true;
                // Set No Trailer Available
                const playBtnText = document.querySelector('.play-video-button__text');
                playBtnText.textContent = 'Trailer Not Available';
            }

        } else {
            // Disable video button
            const playBtn = document.querySelector('.play-video-button');
            playBtn.disabled = true;
            // Set No Trailer Available
            const playBtnText = document.querySelector('.play-video-button__text');
            playBtnText.textContent = 'Trailer Not Available';
        }

        // Set Homepage
        const homepage = document.querySelector('.a-homepage');
        if (!data.homepage || data.homepage == '') {
            homepage.disabled = true;
        } else {
            homepage.addEventListener('click', () => window.open(data.homepage, '_blank'));
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
        if (data.overview) {
            if (data.images?.backdrops[1]?.file_path) {
                storyline_container.style.backgroundImage = `url(${backdrop_baseurl + data.images?.backdrops[1]?.file_path})`;
            }

            // Set Storyline
            const storyline = document.querySelector('.storyline__content--items');
            storyline.textContent = data.overview;
        } else {
            storyline_container.disabled = true;
        }



        // Set Casts
        if (data.credits && data.credits.cast && data.credits.cast.length > 0) {
            let castsToShow = [];
            if (data.credits.cast.length > 10) {
                castsToShow = data.credits.cast.slice(0, 9);
            } else {
                castsToShow = data.credits.cast.slice(0, 10);
            }

            const casts = document.querySelector('.casts__content--items');
            castsToShow.forEach((element, index) => {
                const photoUrl = poster_baseurl + element.profile_path;
                const itemHTML = `  <figure class="cast">
                                        <img class="cast__photo" src="${photoUrl}" data-id="${element.id}" alt="Photo of ${element.name}">
                                        <figcaption class="cast__text">
                                            <h4 class="cast-name">${element.name}</h4>
                                            <p class="cast-as">${element.character}</p>
                                        </figcaption>
                                    </figure>`;
                casts.insertAdjacentHTML('beforeend', itemHTML);
            });

            if (data.credits.cast.length > 10) {
                const viewAllHTML = `<div class="view-all-card">
                                        <i class="fas fa-chevron-right"></i>
                                    </div>`;
                casts.insertAdjacentHTML('beforeend', viewAllHTML);
            }

            // On click of cast show all his/her images in slideshow
            document.querySelectorAll('.cast__photo').forEach(ele => {
                ele.addEventListener('click', card => {
                    if (card.target.dataset.id) {
                        // Get Cast Images
                        getPersonImages(card.target.dataset.id).then(data => {
                            const currIndex = 0;
                            const imgBaseUrl = poster_baseurl;
                            openSlideshowPopup(data.profiles, currIndex, imgBaseUrl);
                        });
                    }
                });
            });

        } else {
            // Hide Casts Section
            const casts_section = document.querySelector('.casts');
            casts_section.style.display = 'none';
        }


        // Set Posters
        if (data.images && data.images.posters && data.images.posters.length > 0) {
            let postersToShow = [];
            if (data.images.posters.length > 10) {
                postersToShow = data.images.posters.slice(0, 9);
            } else {
                postersToShow = data.images.posters.slice(0, 10);
            }

            const posters = document.querySelector('.posters__content--items');
            postersToShow.forEach((element, i) => {
                const photoUrl = poster_baseurl + element.file_path;
                const itemHTML = `  <figure class="poster">
                                        <img class="poster__photo" src="${photoUrl}" data-imgindex="${i}" alt="Poster of Movie">
                                    </figure>`;
                posters.insertAdjacentHTML('beforeend', itemHTML);
            });

            if (data.images.posters.length > 10) {
                const viewAllHTML = `<div class="view-all-card view-all-posters">
                                        <i class="fas fa-chevron-right"></i>
                                    </div>`;
                posters.insertAdjacentHTML('beforeend', viewAllHTML);
            }

            // setup slideshow popup
            document.querySelectorAll('.poster__photo').forEach(element => {
                element.addEventListener('click', (e) => {
                    const currIndex = e.target.dataset.imgindex ? e.target.dataset.imgindex : 0;
                    const imgBaseUrl = poster_baseurl;
                    openSlideshowPopup(data.images.posters, currIndex, imgBaseUrl);
                });
            });
            // view all btn should show all images staring from next img
            document.querySelector('.view-all-posters')?.addEventListener('click', () => {
                const currIndex = 9;
                const imgBaseUrl = poster_baseurl;
                openSlideshowPopup(data.images.posters, currIndex, imgBaseUrl);
            });

        } else {
            // Hide Section
            const posters_section = document.querySelector('.posters');
            posters_section.style.display = 'none';
        }


        // Set Backdrops
        if (data.images && data.images.backdrops && data.images.backdrops.length > 0) {
            let backdropsToShow = [];
            if (data.images.backdrops.length > 9) {
                backdropsToShow = data.images.backdrops.slice(0, 8);
            } else {
                backdropsToShow = data.images.backdrops.slice(0, 9);
            }

            const backdrops = document.querySelector('.backdrops__content--items');
            backdropsToShow.forEach((element, i) => {
                const photoUrl = poster_baseurl + element.file_path;
                const itemHTML = `  <figure class="backdrop">
                                        <img class="backdrop__photo" src="${photoUrl}" data-imgindex="${i}" alt="Backdrop of Movie">
                                    </figure>`;
                backdrops.insertAdjacentHTML('beforeend', itemHTML);
            });

            if (data.images.backdrops.length > 9) {
                const viewAllHTML = `<div class="view-all-card view-all-backdrops">
                                        <i class="fas fa-chevron-right"></i>
                                    </div>`;
                backdrops.insertAdjacentHTML('beforeend', viewAllHTML);
            }

            // setup slideshow popup
            document.querySelectorAll('.backdrop__photo').forEach(element => {
                element.addEventListener('click', (e) => {
                    const currIndex = e.target.dataset.imgindex ? e.target.dataset.imgindex : 0;
                    const imgBaseUrl = backdrop_baseurl;
                    openSlideshowPopup(data.images.backdrops, currIndex, imgBaseUrl);
                });
            });
            // view all btn should show all images staring from next img
            document.querySelector('.view-all-backdrops')?.addEventListener('click', () => {
                const currIndex = 8;
                const imgBaseUrl = backdrop_baseurl;
                openSlideshowPopup(data.images.backdrops, currIndex, imgBaseUrl);
            });
        } else {
            // Hide Section
            const backdrops_section = document.querySelector('.backdrops');
            backdrops_section.style.display = 'none';
        }


        // Set Belongs to Collection
        const backdrops_section = document.querySelector('.b2collection');
        if (data.belongs_to_collection && data.belongs_to_collection?.poster_path) {
            // Set Name
            const b2collectionName = document.querySelector('.b2collection-name');
            b2collectionName.textContent = data.belongs_to_collection?.name;

            // Set Poster
            const poster = document.querySelector('.b2collection-poster');
            poster.src = poster_baseurl + data.belongs_to_collection?.poster_path;

            // Set Background
            backdrops_section.style.backgroundImage = `url(${backdrop_baseurl + data.belongs_to_collection.backdrop_path})`;
        } else {
            // Hide Section
            backdrops_section.style.display = 'none';
        }


        // Set Similar Movies
        if (data.similar && data.similar?.results && data.similar?.results?.length > 0) {
            let moviesToShow = [];
            if (data.similar.results.length > 10) {
                moviesToShow = data.similar.results.slice(0, 9);
            } else {
                moviesToShow = data.similar.results.slice(0, 10);
            }

            const similarMovies = document.querySelector('.similar-movies');
            moviesToShow.forEach(element => {
                const posterUrl = poster_baseurl + element.poster_path;
                const itemHTML = `  <a class="a-movie" href="?id=${element.id}">
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
                similarMovies.insertAdjacentHTML('beforeend', itemHTML);
            });

            if (data.similar.results.length > 10) {
                const viewAllHTML = `<div class="view-all-card">
                                        <i class="fas fa-chevron-right"></i>
                                    </div>`;
                similarMovies.insertAdjacentHTML('beforeend', viewAllHTML);
            }
        } else {
            // Hide Section
            const similar_movies_section = document.querySelector('.similar-movies-section');
            similar_movies_section.style.display = 'none';
        }

        // Set Recommendations Movies
        if (data.recommendations && data.recommendations?.results && data.recommendations?.results?.length > 0) {
            let moviesToShow = [];
            if (data.recommendations.results.length > 10) {
                moviesToShow = data.recommendations.results.slice(0, 9);
            } else {
                moviesToShow = data.recommendations.results.slice(0, 10);
            }

            const recommendationsMovies = document.querySelector('.recommendations-movies');
            moviesToShow.forEach(element => {
                const posterUrl = poster_baseurl + element.poster_path;
                const itemHTML = `  <a class="a-movie" href="?id=${element.id}">
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
                recommendationsMovies.insertAdjacentHTML('beforeend', itemHTML);
            });

            if (data.recommendations.results.length > 10) {
                const viewAllHTML = `<div class="view-all-card">
                                        <i class="fas fa-chevron-right"></i>
                                    </div>`;
                recommendationsMovies.insertAdjacentHTML('beforeend', viewAllHTML);
            }
        } else {
            // Hide Section
            const recommendations_movies_section = document.querySelector('.recommendations-movies-section');
            recommendations_movies_section.style.display = 'none';
        }


        // Set default poster img if real img failed to load
        document.querySelectorAll('.movie__poster, .poster__photo, .cast__photo, .poster, .b2collection-poster').forEach(e => {
            e.onerror = (img) => {
                img.target.src = ImgDefaultPoster;
            }
        });

        // Set default backdrop img if real img failed to load
        document.querySelectorAll('.backdrop__photo').forEach(e => {
            e.onerror = (img) => {
                img.target.src = ImgDefaultBackdrop;
            }
        });

        // set movie title on navbar if page is sticky
        const nav = document.querySelector('.navbar');
        if (nav.classList.contains('sticky')) {
            document.querySelector('.navbar-title').textContent = movie?.title;
        }

        // end of movie data
    });

    // Get Watch Providers
    getWatchProviders(id).then(data => {
        if (data?.results?.IN?.flatrate?.length > 0) {
            const dataWatchproviders = data?.results?.IN?.flatrate;
            // Set Genres
            const watchproviders = document.querySelector('.watchproviders--items');
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
            const watchproviders = document.querySelector('.watchproviders');
            watchproviders.style.display = 'none';
        }
    });

}
window.onload = windowOnload;




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

// SLIDESHOW POPUP OPEN / CLSOE LOGIC
let images_slideshow = [];
let currentImgNo = 0;

function openSlideshowPopup(images, currIndex, imgBaseUrl) {
    images_slideshow = images;
    currentImgNo = currIndex;
    // images_slideshow = movie.images.posters;
    // images_slideshow = movie.images.backdrops;

    if (!images_slideshow || images_slideshow.length == 0) {
        return;
    }
    // const photoUrl = poster_baseurl + images_slideshow[currentImgNo].file_path;
    const photoUrl = imgBaseUrl + images_slideshow[currentImgNo].file_path;

    const slideshowimg = document.querySelector('.slideshow-content img');
    slideshowimg.visibility = 'hidden';
    slideshowimg.setAttribute('src', photoUrl);

    slideshowimg.onload = () => {
        slideshowimg.visibility = 'visible';
        slideshowimg.style.animation = 'imgmovein 0.3s ease-in forwards';
    };

    const slideshowStatus = document.querySelector('.slideshow-status');
    slideshowStatus.innerHTML = `${Number(currentImgNo) + 1}/${images_slideshow.length}`;

    const slideshowcontainer = document.querySelector('.slideshow-container');
    slideshowcontainer.style.visibility = 'visible';

    const body = document.querySelector('body');
    body.style.overflow = 'hidden';

    // Disable previous button if no previous image
    document.querySelector('#btnPrevisousImage').disabled = (currentImgNo == 0);

    // Disable next button if no next image
    document.querySelector('#btnNextImage').disabled = (currentImgNo == (images_slideshow.length - 1));
}
document.querySelector('.play-slideshow-button').addEventListener('click', openSlideshowPopup);

function closeSlideshowPopup() {
    const slideshowcontainer = document.querySelector('.slideshow-container');
    slideshowcontainer.style.visibility = 'hidden';

    let images_slideshow = [];
    let currentImgNo = 0;
    // const slideshowimg = document.querySelector('.slideshow-content img');
    // slideshowimg.setAttribute('src', '');

    const body = document.querySelector('body');
    body.style.overflow = 'auto';
}
document.querySelector('#btnCloseSlideshowPopup').addEventListener('click', closeSlideshowPopup);

function nextImage() {
    if (currentImgNo < images_slideshow.length - 1) {
        currentImgNo++;
        // const photoUrl = poster_baseurl + images_slideshow[currentImgNo].file_path;
        const photoUrl = backdrop_baseurl + images_slideshow[currentImgNo].file_path;

        const slideshowimg = document.querySelector('.slideshow-content img');

        slideshowimg.style.animation = 'imgmoveout 0.3s ease-in forwards';
        setTimeout(() => {
            slideshowimg.setAttribute('src', photoUrl);
            slideshowimg.visibility = 'hidden';
            slideshowimg.style.left = '-150%';
        }, 300);
        slideshowimg.onload = () => {
            slideshowimg.visibility = 'visible';
            slideshowimg.style.animation = 'imgmovein 0.3s ease-in forwards';
        };

        const slideshowStatus = document.querySelector('.slideshow-status');
        slideshowStatus.innerHTML = `${currentImgNo + 1}/${images_slideshow.length}`;
    }

    // Disable previous button if no previous image
    document.querySelector('#btnPrevisousImage').disabled = (currentImgNo == 0);

    // Disable next button if no next image
    document.querySelector('#btnNextImage').disabled = (currentImgNo == (images_slideshow.length - 1));
}
document.querySelector('#btnNextImage').addEventListener('click', nextImage);

function previousImage() {
    if (currentImgNo > 0) {
        currentImgNo--;
        // const photoUrl = poster_baseurl + images_slideshow[currentImgNo].file_path;
        const photoUrl = backdrop_baseurl + images_slideshow[currentImgNo].file_path;

        const slideshowimg = document.querySelector('.slideshow-content img');

        slideshowimg.style.animation = 'imgmoveout-prev 0.3s ease-in forwards';
        setTimeout(() => {
            slideshowimg.setAttribute('src', photoUrl);
            slideshowimg.visibility = 'hidden';
            slideshowimg.style.left = '150%';
        }, 300);
        slideshowimg.onload = () => {
            slideshowimg.visibility = 'visible';
            slideshowimg.style.animation = 'imgmovein-prev 0.3s ease-in forwards';
        };

        const slideshowStatus = document.querySelector('.slideshow-status');
        slideshowStatus.innerHTML = `${currentImgNo + 1}/${images_slideshow.length}`;
    }

    // Disable previous button if no previous image
    document.querySelector('#btnPrevisousImage').disabled = (currentImgNo == 0);

    // Disable next button if no next image
    document.querySelector('#btnNextImage').disabled = (currentImgNo == (images_slideshow.length - 1));
}
document.querySelector('#btnPrevisousImage').addEventListener('click', previousImage);

// Close popup on Esc key press
document.addEventListener('keydown', function (e) {
    if (e.key == "Escape") {
        closeSlideshowPopup();
    }
});


// NAVBAR OBSERVER ------------------------------------------
const nav = document.querySelector('.navbar');
const navHeight = nav.getBoundingClientRect().height;
// console.log(`-${navHeight}px`);

const stickyNav = function (entries) {
    const [entry] = entries;
    // console.log(entry);

    if (!entry.isIntersecting) {
        nav.classList.add('sticky');
        document.querySelector('.navbar-title').textContent = movie?.title;
    } else {
        nav.classList.remove('sticky');
        document.querySelector('.navbar-title').textContent = 'Movie-Web';
    }
}

const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`
});
headerObserver.observe(document.querySelector('.hero'));


// CODE FOR GO TO TOP BUTTON
//Get the button
var mybutton = document.getElementById("btnGoToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

mybutton.addEventListener('click', topFunction);

