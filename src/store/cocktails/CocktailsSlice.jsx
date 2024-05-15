import {alphabet} from "../../service/tools/tools";
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {urlApiByLetter} from "../../service/urls/urls";

const initialState = {
    loading: false,
    list: [],
    error: false,
    letters: alphabet(),
    currentLetter: alphabet()[0],
    endOfList : false
}

export const cocktailsSlice = createSlice({
    name: 'cocktails',
    initialState,
    reducers:{
        nextLetter : (state)=> {
            if(state.currentLetter === state.letters[state.letters.length -1]){
                state.endOfList = true
                return
            }
            let letter = state.letters.find((item,index)=> index === state.letters.indexOf(state.currentLetter)+1)
            state.currentLetter = letter
        }
    },
    extraReducers: (builder) => {
        builder.addCase(
            allCocktails.fulfilled,
            (state, action) => {
                return {...state, loading: false, list: [...state.list, ...action.payload]};
            })
            .addCase(allCocktails.pending,
                (state, action) => {
                    return {...state, loading: true};
            })
            .addCase(allCocktails.rejected,
                (state, action) => {
                    return {...state, loading: false, error: true};
            })
    }
})

export const {nextLetter} = cocktailsSlice.actions
export const allCocktails = createAsyncThunk(
    "cocktails/allCocktails",
    async (arg,thunkAPI) => {
        let letter = thunkAPI.getState().cocktails.currentLetter
        return axios.get(urlApiByLetter(letter))
            .then(res => res.data.drinks)
    }
)
export default cocktailsSlice.reducer

