import { configureStore } from '@reduxjs/toolkit';
import CocktailsReducer from "./cocktails/CocktailsSlice";
import FavoriteReducer from "./favorite/FavoriteSlice";
const store = configureStore({
    reducer: {
        cocktails : CocktailsReducer,
        favorite : FavoriteReducer
    }
});

export default store;