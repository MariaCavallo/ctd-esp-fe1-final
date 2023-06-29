import { configureStore } from '@reduxjs/toolkit'
import characterReducer from './reducers/charactersReducer'
import favouriteReducer from './reducers/favouriteReducer';
import detailsReducer from './reducers/detailsReducer';

export const store = configureStore({
    reducer: {
        characters: characterReducer,
        favorites: favouriteReducer,
        details: detailsReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;