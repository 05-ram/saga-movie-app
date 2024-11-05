import { fork, put, takeLatest, call } from "redux-saga/effects";
import { getMovies, setMovies } from "../features/movieSlice";
import { fetchMovies } from "../features/api";

function* onLoadMovieAsync({ payload }) {
    try {
        const movieName = payload;
        const response = yield call(fetchMovies, movieName);

        if (response.status === 200) {
            yield put(setMovies({ ...response.data }))
        }
    }
    catch (err) {
        console.log('Error...')
        console.log(err)
    }
}

function* onLoadmovies() {
    yield takeLatest(getMovies.type, onLoadMovieAsync);
}

export const movieSagas = [fork(onLoadmovies)]