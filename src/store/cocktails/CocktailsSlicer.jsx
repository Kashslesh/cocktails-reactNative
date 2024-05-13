import {alphabet} from "../../service/tools/tools";
import {createSlice, createAsyncThunk, unwrapResult} from "@reduxjs/toolkit";
import axios from "axios";
import {urlApiByLetter} from "../../service/urls/urls";

const initialState = {
    loading: false,
    list: [],
    error: null,
    letters: alphabet(),
    currentLetter: alphabet()[0]
}

export const cocktailsSlice = createSlice({
    name: 'cocktails',
    initialState,
    reducers:{
        nextLetter : (state)=> {
            if(state.currentLetter === state.letters[state.letters.length -1]){return}
            let letter = state.letters.find((item,index)=> index === state.letters.indexOf(state.currentLetter)+1)
            state.currentLetter = letter
        }
    },
    extraReducers: (builder) => {
        builder.addCase(
            allCocktails.fulfilled,
            (state, action) => {
                return {...state, loading: false, list: action.payload};
            })
            .addCase(allCocktails.pending,
                (state, action) => {
                    return {...state, loading: true};
            })
            .addCase(allCocktails.rejected,
                (state, action) => {
                    return {...state, loading: false, error: action.payload};
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
            .catch(error=>{
                return rejectWithValue(error.response.data)
            })
    }
)
export default cocktailsSlice.reducer

