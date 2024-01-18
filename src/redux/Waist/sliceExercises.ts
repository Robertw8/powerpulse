import { createSlice } from "@reduxjs/toolkit";
import { getWaistExercises } from "./operationsWaist";
import { WaistExercises, InitialState } from "./types";


const initialState: InitialState = {
    exercises: [],
    isLoading: false,
    error: null ,
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
            .addCase(getWaistExercises.fulfilled, (state, action) => {
                state.exercises = action.payload as WaistExercises[];
                state.isLoading = false;
                state.error = null;
            })
            .addCase(getWaistExercises.rejected, (state) => {
                state.isLoading = false;
                state.error = "oups";
            });
    },
});

export const { reducer: exercisesReducer } = exercisesSlice;