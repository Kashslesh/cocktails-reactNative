import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState:{
        listFavorites:[]
    },
    reducers:{
        addFavorite : (state,action)=>{
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
        },
        favoriteToggle : (state, action)=>{
            const isExist = state.listFavorites.find(el => el.idDrink === action.payload.idDrink);
            if (isExist) {
                state.listFavorites = state.listFavorites.filter(item => item.idDrink !== action.payload.idDrink);
            } else {
                state.listFavorites.push(action.payload);
            }
        }
    }
})
export const {addFavorite, deleteFavorite,favoriteToggle}  = favoriteSlice.actions
export default favoriteSlice.reducer