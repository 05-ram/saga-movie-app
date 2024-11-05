import axios from "axios";

const API_ENDPOINT = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_KEY}`;

export const fetchMovies = async (movieName) => {
    return axios.get(`${API_ENDPOINT}&s=${movieName}`)
}