import {combineReducers} from '@reduxjs/toolkit';
import favoriteSlice from './favorite/FavoriteSlice'
import allCocktailsSlice from "./cocktails/AllCocktailsSlice";

const rootReducers =  combineReducers ({
     allCocktails : allCocktailsSlice,
     addFavorite: favoriteSlice
})

export default rootReducers