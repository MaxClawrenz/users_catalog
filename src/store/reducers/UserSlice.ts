import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../interfaces/IUser"
import { UserState } from "../../interfaces/UserState";

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: '',
    filteredUsers: []
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers(state, action: PayloadAction<IUser[]>){
            state.users = action.payload;
            state.filteredUsers = action.payload;
        }
    },
})

export default userSlice.reducer;
export const { setUsers } = userSlice.actions