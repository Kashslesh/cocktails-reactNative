import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState:{
        listFavorites:[]
    },
    reducers:{
        addFavorite : (state,action)=>{
            if(state.listFavorites.find(el => el.idDrink === action.payload.idDrink)){return}
            return{
                ...state,
                listFavorites: [...state.listFavorites, action.payload]
            }
        },
        deleteFavorite : (state, action)=>{
            const arr = state.listFavorites.filter((item) => {
                return item.idDrink !== action.payload
            })
            return{
                ...state,
                listFavorites: arr
            }
        }
    }
})
export const {addFavorite, deleteFavorite}  = favoriteSlice.actions
export default favoriteSlice.reducer