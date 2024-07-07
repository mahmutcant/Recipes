import { configureStore } from "@reduxjs/toolkit";
import food from "./food";

const store = configureStore({
    reducer: {
        food
    }
})
export default store;