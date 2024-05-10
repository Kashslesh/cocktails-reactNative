import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlicer = createSlice({
    name: 'favorite',
    initialState:{
        listFavorites:[]
    },
    reducers:{
        addFavorite : (state,action)=>{
            if(state.listFavorites.find(el => el === action.payload)){return}
            state.listFavorites.push(action.payload)
        }
    }
})
export const addFavoriteAction  = favoriteSlicer.actions
export default favoriteSlicer.reducer