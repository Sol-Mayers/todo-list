import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: "SET_FILTER",
    initialState: "all",
    reducers: {
        setFilter: (_, action) => {
            return action.payload;
        },
    },
});

export const { setFilter } = filtersSlice.actions;

export const filterReducer = filtersSlice.reducer;
