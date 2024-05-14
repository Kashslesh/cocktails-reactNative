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
        }
    }
})
export const {addFavorite}  = favoriteSlice.actions
export default favoriteSlice.reducer