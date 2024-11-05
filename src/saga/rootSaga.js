import { all } from "redux-saga/effects";
import { movieSagas } from "./movieSaga";

export default function* rootSaga() {
    yield all([...movieSagas])
}