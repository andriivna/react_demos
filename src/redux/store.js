import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {carReducer} from "./slices";

const rootReducer = combineReducers({
    carReducer
});

const setUpStore = () => configureStore({
    reducer: rootReducer
});

export {
    setUpStore
}