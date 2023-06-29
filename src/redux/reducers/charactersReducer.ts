import { thunkFilterCharacter, thunkGetCharacters, thunkNextCharacters, thunkPrevCharacters } from '../../thunk/Middleware'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Character } from '../../types/characters'

export interface CharacterState {
    next: string | null,
    prev: string | null,
    characters: Character[],
    loading: boolean,
    filter?: string
}

const initialState: CharacterState = {
    next: null,
    prev: null,
    characters: [],
    loading: true,
    filter: "",
}

export const characterSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        setFilter(state, action: PayloadAction<string>) {
            state.filter = action.payload
        },
        resetFilter(state) {
            state.filter = ""
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(thunkGetCharacters.pending, (state) => {
                state.loading = true;
            })
            .addCase(thunkGetCharacters.fulfilled, (state, action: PayloadAction<CharacterState>) => {
                state.prev = action.payload.prev;
                state.next = action.payload.next;
                state.characters = action.payload.characters;
                state.loading = false;
            })
            .addCase(thunkNextCharacters.pending, (state) => {
                state.loading = true
            })
            .addCase(thunkNextCharacters.fulfilled, (state, action: PayloadAction<CharacterState>) => {
                state.prev = action.payload.prev
                state.next = action.payload.next
                state.characters = action.payload.characters
                state.loading = false
            })
            .addCase(thunkPrevCharacters.pending, (state) => {
                state.loading = true
            })
            .addCase(thunkPrevCharacters.fulfilled, (state, action: PayloadAction<CharacterState>) => {
                state.prev = action.payload.prev
                state.next = action.payload.next
                state.characters = action.payload.characters
                state.loading = false
            })
            .addCase(thunkFilterCharacter.pending, (state) => {
                state.loading = true
            })
            .addCase(thunkFilterCharacter.fulfilled, (state, action) => {
                state.prev = action.payload.prev
                state.next = action.payload.next
                state.characters = action.payload.characters
                state.loading = false
            })
            .addCase(thunkFilterCharacter.rejected, (state) => {
                state.prev = null
                state.next = null
                state.characters = []
                state.loading = false
            })
    }
})

export const { setFilter, resetFilter } = characterSlice.actions
export default characterSlice.reducer