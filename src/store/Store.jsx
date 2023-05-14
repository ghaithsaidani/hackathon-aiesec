import { configureStore } from '@reduxjs/toolkit'
import ThemeSlice from '../features/ThemeSlice'

export default configureStore({
    reducer: {
        isLight:ThemeSlice,
    }
})