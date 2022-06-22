
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../pages/Login/userSlice'
import LoveMangaReducer from '../pages/DetailManga/LoveMangaSlice'
const rootReducer = {
    user : userReducer,
    mangaLove : LoveMangaReducer
}

const store = configureStore({
    reducer : rootReducer
})

export default store;