import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserState {
    id: string,
    email: string,
    token: string
}

const initialState:UserState = {
    id: '',
    email: '',
    token: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (_, action: PayloadAction<UserState>) => action.payload,
        rejectUser: () => initialState
    }
})


export const {setUser, rejectUser} = userSlice.actions
export default userSlice.reducer