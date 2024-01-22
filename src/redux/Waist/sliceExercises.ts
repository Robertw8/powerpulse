import { createSlice } from "@reduxjs/toolkit";
import { getWaistExercises } from "./operationsWaist";
import { WaistExercises, InitialState } from "./types";
// import { setFilters } from "./operationsWaist";

const initialState: InitialState = {
    exercises: [],
    isLoading: false,
    error: "",
    filters: {
        query: "",
        page: 1,
        limit: 10,
    },
    bodyPart: []
}

const exercisesSlice = createSlice({
    name: 'exercises',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getWaistExercises.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getWaistExercises.fulfilled, (state, { payload }) => {
                state.exercises = [...state.bodyPart, ...(Array.isArray(payload) ? payload : [payload])] as WaistExercises[];
                state.isLoading = false;

            })
            .addCase(getWaistExercises.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
            // .addCase(setFilters, (state, action) => {
            //     state.filters = action.payload as unknown as Filter
            // });
    },
});

export const { reducer: exercisesReducer } = exercisesSlice;