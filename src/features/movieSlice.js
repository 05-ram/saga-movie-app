import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice(
    {
        name: 'movie',
        initialState: {
            movieList: [],
            movie: {}
        },
        reducers: {
            getMovies(name) {
                return name;
            },
            setMovies: (state, action) => {
                state.movieList = action.payload;
            },
            getSelectedmovie(id) {
                return id;
            },
            setSelectedMovie: (state, action) => {
                state.movie = action.payload;
            }
        }
    }
)
export const { getMovies, setMovies, getSelectedmovie, setSelectedMovie } = MovieSlice.actions;
export default MovieSlice.reducer;