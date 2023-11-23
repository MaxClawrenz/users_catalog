import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from './reducers/UserSlice'
import { userAPI } from "../services/userService";
import filterReducer from './reducers/FilterSlice'


const rootReducer = combineReducers({
    userReducer,
    [userAPI.reducerPath]: userAPI.reducer,
    filterReducer
})


export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userAPI.middleware)
    })
}


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']