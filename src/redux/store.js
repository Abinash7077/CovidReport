import { configureStore } from "@reduxjs/toolkit";
import nameSlideReducer from './nameSlide'

export const store=configureStore({
    reducer:{
        dispatchName:nameSlideReducer,
    }
})