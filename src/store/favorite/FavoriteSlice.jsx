import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState:{
        listFavorites:[]
    },
    reducers:{
        addFavorite : (state,action)=>{
            if(state.listFavorites.find(el => el.idDrink === action.payload.idDrink)){return}
            state.listFavorites.push(action.payload)
        },
        deleteFavorite : (state, action)=>{
            console.log(action.payload)
            //state.listFavorites = state.listFavorites.filter(el=> el.idDrink !== action.payload.idDrink)
        }
    }
})
export const {addFavorite, deleteFavorite}  = favoriteSlice.actions
export default favoriteSlice.reducer