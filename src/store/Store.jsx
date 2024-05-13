import { configureStore } from '@reduxjs/toolkit';
import CocktailsReducer from "./cocktails/CocktailsSlicer";
const store = configureStore({
    reducer: {
        cocktails : CocktailsReducer
    }
});

export default store;