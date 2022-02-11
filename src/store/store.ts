import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";

import sliceReducer from "./reducer/userSlice";

export const store = configureStore({
    reducer: {
        user: sliceReducer
    }
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export const useStoreSelector: TypedUseSelectorHook<RootState> = useSelector

export type RootState = ReturnType<typeof store.getState>
 
