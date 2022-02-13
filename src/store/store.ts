import { configureStore } from "@reduxjs/toolkit";

import sliceReducer from "./reducer/userSlice";

export const store = configureStore({
    reducer: {
        user: sliceReducer
    }
})


 
