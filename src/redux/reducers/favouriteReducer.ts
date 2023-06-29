import { createSlice } from "@reduxjs/toolkit";
import { Character } from "../../types/characters";
import { thunkCharactersFavorites, thunkFavorites, thunkResetFavorites, thunkToggleFavorites } from "../../thunk/Middleware";

interface FavouritesState {
    list: Array<number>,
    characters: Character[]
}

const initialState: FavouritesState = {
    list: [],
    characters: [],
}

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(thunkFavorites.fulfilled, (state, action) => {
                state.list = action.payload
            })
            .addCase(thunkToggleFavorites.fulfilled, (state, action) => {
                state.list = action.payload
            })
            .addCase(thunkCharactersFavorites.fulfilled, (state, action) => {
                state.characters = action.payload
            })
            .addCase(thunkResetFavorites.fulfilled, (state, action) => {
                state.list = action.payload
            })
    },
})

export default favoritesSlice.reducer