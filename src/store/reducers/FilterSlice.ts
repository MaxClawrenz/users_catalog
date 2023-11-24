import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FilterState } from "../../interfaces/IFilterState";

type IndexedFilterState = FilterState & { [key: string]: string | boolean }

const initialState: IndexedFilterState = {
    name: '',
    email: '',
    city: '',
    company: '',
    department: '',
    position: '',
    sex: '',
    subdivision: '',
    photo: false,
    social: false,
}

export const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setFilters(state, action: PayloadAction<{filterName: string, filterValue: string | boolean}>){
            const { filterName, filterValue } = action.payload;
            state[filterName] = filterValue;
        }
    }
})

export default filterSlice.reducer
export const { setFilters } = filterSlice.actions