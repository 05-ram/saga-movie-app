import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice(
    {
        name: 'movie',
        initialState: {
            movieList: [],
            movie: {}
        },
        reducers: {}
    }
)
export default MovieSlice.reducer;