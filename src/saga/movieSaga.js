import { fork, put, takeLatest, call } from "redux-saga/effects";
import { getMovies, getSelectedmovie, setMovies, setSelectedMovie } from "../features/movieSlice";
import { fetchMovies, fetchSelectedMovie } from "../features/api";

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

function* onLoadSelectedmoviesAsync({ payload }) {
    try {
        const movieId = payload;
        const response = yield call(fetchSelectedMovie, movieId);

        if (response.status === 200) {
            yield put(setSelectedMovie({ ...response.data }))
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

function* onLoadSelectedmovies() {
    yield takeLatest(getSelectedmovie.type, onLoadSelectedmoviesAsync);
}

export const movieSagas = [fork(onLoadmovies), fork(onLoadSelectedmovies)]