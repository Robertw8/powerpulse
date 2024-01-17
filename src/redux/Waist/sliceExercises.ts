import { createSlice } from "@reduxjs/toolkit";
import { getWaistExercises } from "./operationsWaist";


export interface WaistExercises {
    _id?: string;
    burnedCalories: number;
    bodyPart: string;
    target: string;
    title?: string;
    category?: string;
    equipment: string;
    name: string;
    date: { name: string; burnedCalories: number; target: string; bodyPart: string; };
}

interface InitialState {
    exercises: WaistExercises[];
    isLoading: boolean;
    bodyParts: string[];
    muscules: string[];
    equipment: string[];
    error: null | string;
}

const initialState: InitialState = {
    exercises: [],
    bodyParts: [],
    muscules: [],
    equipment: [],
    isLoading: false,
    error: null,
}

const slice = createSlice({
    name: 'exercises',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getWaistExercises.fulfilled, (state, action) => {
                state.exercises = action.payload as WaistExercises[];
                state.isLoading = false;
                state.error = null;
            })
            .addCase(getWaistExercises.pending, state => {
                state.isLoading = true;
            });
    },
});

export const exercisesReducer = slice.reducer;