// @ts-check

const apiKey = 'fa95cddfa25a27f18e30bbdbd383054b';
const baseUrl = 'https://api.themoviedb.org/3';

export const getMovieDetails = async (id) => {
    const url = `${baseUrl}/movie/${id}?api_key=${apiKey}&language=en-US&include_image_language=en,null&append_to_response=images,videos,credits,alternative_titles,keywords,external_ids,release_dates,reviews,recommendations,similar,content_ratings`;

    try {
        const res = await fetch(url);
        let data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
    return null;
}


export const genres = {
    "genres": [
        {
            "id": 28,
            "name": "Action"
        },
        {
            "id": 12,
            "name": "Adventure"
        },
        {
            "id": 16,
            "name": "Animation"
        },
        {
            "id": 35,
            "name": "Comedy"
        },
        {
            "id": 80,
            "name": "Crime"
        },
        {
            "id": 99,
            "name": "Documentary"
        },
        {
            "id": 18,
            "name": "Drama"
        },
        {
            "id": 10751,
            "name": "Family"
        },
        {
            "id": 14,
            "name": "Fantasy"
        },
        {
            "id": 36,
            "name": "History"
        },
        {
            "id": 27,
            "name": "Horror"
        },
        {
            "id": 10402,
            "name": "Music"
        },
        {
            "id": 9648,
            "name": "Mystery"
        },
        {
            "id": 10749,
            "name": "Romance"
        },
        {
            "id": 878,
            "name": "Science Fiction"
        },
        {
            "id": 10770,
            "name": "TV Movie"
        },
        {
            "id": 53,
            "name": "Thriller"
        },
        {
            "id": 10752,
            "name": "War"
        },
        {
            "id": 37,
            "name": "Western"
        }
    ]
};