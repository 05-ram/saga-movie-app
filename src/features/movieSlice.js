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
            }
        }
    }
)
export const { getMovies, setMovies } = MovieSlice.actions;
export default MovieSlice.reducer;