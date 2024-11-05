import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../features/movieSlice";
import createSagaMiddleware from "redux-saga";
// import rootSaga from "../saga/rootSaga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = configureStore({
    reducer: {
        movie: movieReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware)
})

// sagaMiddleware.run(rootSaga)

export default store;