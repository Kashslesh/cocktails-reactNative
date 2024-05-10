import { configureStore } from '@reduxjs/toolkit';
import CocktailsReducer from "./cocktails/CocktailsSlicer";
const store = configureStore({
    cocktailsReducer: CocktailsReducer
});

export default store;