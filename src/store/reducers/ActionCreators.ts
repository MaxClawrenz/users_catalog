import axios from "axios"
import { AppDispatch } from "../store"
import { IUser } from "../../interfaces/IUser"
import { userSlice } from "./UserSlice"
import { createAsyncThunk } from "@reduxjs/toolkit"


// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(userSlice.actions.userFetching());
//         const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
//         dispatch(userSlice.actions.userFetchingSuccess(response.data));
//     } catch (error) {
//         dispatch(userSlice.actions.userFetchingError(error.message))
//     }
// }

// export const fetchUsers = createAsyncThunk(
//     'user/fetchAll',
//     async (_, thunkAPI) => {
//         try {
//             const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
//             return response.data;  
//         } catch (error) {
//             return thunkAPI.rejectWithValue('Не удалось загрузить данные')
//         }
        
//     }
// )