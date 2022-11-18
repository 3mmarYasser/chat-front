import { configureStore } from '@reduxjs/toolkit'
import {messageSlice} from "./message.reducer";

export const store = configureStore({
    reducer: {
        messages: messageSlice.reducer,
    }
})
