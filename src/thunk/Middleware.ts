import { createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../redux/store';
import { getFavorites, resetFavorites, toggleFavorite } from '../api/favouritesApi';
import { getCharactersByArray, getCharactersByFilter, getCharactersByPage } from '../api/charactersApi';
import { getEpidosdesByArray } from '../api/episodesApi';

export const thunkGetCharacters = createAsyncThunk(
    "characters/thunkGetCharacters",
    async () => {
        const response = await fetch("https://rickandmortyapi.com/api/character");
        const data = await response.json();
        return data.results;
    }
)

export const thunkFilterCharacter = createAsyncThunk(
    "characters/thunkFilterCharacter",
    async (filter: string) => {
        const response = await getCharactersByFilter(filter);
        return response;
    }
);

export const thunkPrevCharacters = createAsyncThunk(
    "characters/thunkPrevCharacters",
    async (_, { getState }) => {
        const state = getState() as RootState
        const { prev } = state.characters
        if (prev === null) {
            throw new Error("There are no more characters")
        }
        const response = await getCharactersByPage(prev)
        return response;
    }
)

export const thunkNextCharacters = createAsyncThunk(
    "characters/thunkNextCharacters",
    async (_, { getState }) => {
        const state = getState() as RootState
        const { next } = state.characters
        if (next === null) {
            throw new Error("There are no more characters")
        }
        const response = await getCharactersByPage(next)
        return response;
    }
)

export const thunkFavorites = createAsyncThunk(
    "favourites/thunkFavourites",
    async () => {
        const response = getFavorites()
        return response
    }
)

export const thunkToggleFavorites = createAsyncThunk(
    "characters/thunkToggleFavourites",
    async (id: number) => {
        const response = toggleFavorite(id);
        return response;
    }
)

export const thunkCharactersFavorites = createAsyncThunk(
    "characters/thunkCharactersFavorites",
    async (_, { getState }) => {
        const state = getState() as RootState
        const { list } = state.favorites
        const response = getCharactersByArray(list)
        return response
    }
)

export const thunkResetFavorites = createAsyncThunk(
    "favorites/thunkResetFavorites",
    async () => {
        const response = resetFavorites()
        return response;
    }
)

export const thunkEpisodes = createAsyncThunk(
    "favorites/thunkEpisodes",
    async (_, { getState }) => {
        const state = getState() as RootState
        const { character } = state.details
        
        if (character.episodes === undefined) {
            return [];
        }
        const arrayEpisodesId = character.episodes.map((episode: { episode: string; }) => {
            const arrayUrl = episode.episode.split("/")
            const id = arrayUrl[arrayUrl.length - 1]
            return Number(id)
        })
        const response = await getEpidosdesByArray(arrayEpisodesId)
        return response
    }
)
