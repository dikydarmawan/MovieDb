const API_KEY = "18f6e9943fc4b4d799ed4b458576533f";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}`,
    fetchUpcoming: `/movie/upcoming?api_key=${API_KEY}`,
    fetchGenres: `/genre/movie/list?api_key=${API_KEY}`,
}

export default requests;