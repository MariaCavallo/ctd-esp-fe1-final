import { createSlice } from "@reduxjs/toolkit";
import { Character, Episode } from "../../types/characters";
import { thunkEpisodes } from "../../thunk/Middleware";

interface DetailsState {
    character: Character,
    episodes: Episode[],
    loading: boolean
}

const initialState: DetailsState = {
    character: {
        id: -1,
        name: "",
        url: "",
        image: "",
        species: "",
        gender: "",
        planet: "",
        episodes: []
    },
    loading: true,
    episodes: []
}

const DetailsSlice = createSlice({
    name: "details",
    initialState,
    reducers: {
        setDetails: (state, action) => {
            state.character = action.payload
        }
    },
    extraReducers(builder) {
        builder
            .addCase(thunkEpisodes.pending, (state) => {
                state.loading = true
            })
            .addCase(thunkEpisodes.fulfilled, (state, action) => {
                state.episodes = action.payload
                state.loading = false
            })
    },
})

export const { setDetails } = DetailsSlice.actions
export default DetailsSlice.reducer