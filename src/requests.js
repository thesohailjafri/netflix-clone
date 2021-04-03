const APIKEY = 'a8bdf3bb4dfc9fd2ffad434150d7be28';
const requests = [
    { id: 1, url: `discover/tv?api_key=${APIKEY}&with_networks=213&page=1`, title: 'NETFLIX ORIGINALS' },
    { id: 2, url: `/trending/all/day?api_key=${APIKEY}`, title: 'Trending' },
    { id: 3, url: `/movie/top_rated?api_key=${APIKEY}&language=en-US&page=1`, title: 'Top Rated' },
    { id: 4, url: `/discover/movie?api_key=${APIKEY}&with_genres=28&page=1`, title: 'Action' },
    { id: 5, url: `/discover/movie?api_key=${APIKEY}&with_genres=35&page=1`, title: 'Comedy' },
    { id: 6, url: `/discover/movie?api_key=${APIKEY}&with_genres=27&page=1`, title: 'Horror' },
    { id: 7, url: `/discover/movie?api_key=${APIKEY}&with_genres=10749&page=1`, title: 'Romance' },
    { id: 8, url: `/discover/movie?api_key=${APIKEY}&with_genres=99&page=1`, title: 'Documentary' },
];


export default requests;