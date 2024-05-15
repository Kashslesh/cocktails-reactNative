import { configureStore } from '@reduxjs/toolkit';
import CocktailsReducer from "./cocktails/CocktailsSlice";
import FavoriteReducer from "./favorite/FavoriteSlice";
import SearchCocktailsReducer from "./cocktails/SearchCocktailsSlice";
const store = configureStore({
    reducer: {
        cocktails : CocktailsReducer,
        favorite : FavoriteReducer,
        searchCocktails : SearchCocktailsReducer
    }
});

export default store;