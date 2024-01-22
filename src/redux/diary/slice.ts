import { createSlice } from '@reduxjs/toolkit';
import{ getDiary,
    addDiaryProduct,deleteDiaryProduct,
    addDiaryExercise,
    deleteDiaryExercise,
    // deleteDiaryExercise
} from './index'
import { InitialState } from './types';

const initialState:InitialState={
    products:[],
    exercises:[],
    caloriesBurned:0,
    caloriesConsumed:0,
    caloriesRemaining:0,
    sportsTime:0,
    sportsRemaining:0, 
    isLoading: false,
    error: '',
}

const slice = createSlice({
    name: 'diary',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
          .addCase(getDiary.pending, state => {
            state.isLoading = true;
          })
          .addCase(getDiary.fulfilled, (state, { payload }) => {
            state.products = payload.productsResult.products;
            state.caloriesConsumed=payload.productsResult.caloriesConsumedTotal;
            state.exercises=payload.exercisesResult.exercises;
            state.caloriesBurned=payload.exercisesResult.caloriesBurnedTotal;
            state.sportsTime=payload.exercisesResult.timeTotal;
            state.isLoading = false;
            state.error = '';
          })
          .addCase(getDiary.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message as string;
          })
          .addCase(addDiaryProduct.pending, state => {
            state.isLoading = true;
          })
          .addCase(addDiaryProduct.fulfilled, (state, { payload }) => {
            
            state.products = [...state.products, ...payload.product] 
            state.isLoading = false;
            state.error = '';
          })
          .addCase(addDiaryProduct.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message as string
          }).addCase(deleteDiaryProduct.pending, state => {
            state.isLoading = true;
          })
          .addCase(deleteDiaryProduct.fulfilled, (state, { payload }) => {
            state.products = state.products.filter( product=> product._id !== payload.id) 
            state.caloriesConsumed=payload.caloriesConsumedTotal;
            state.isLoading = false;
            state.error = '';
          })
          .addCase(deleteDiaryProduct.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message as string
          })
          .addCase(addDiaryExercise.pending, state => {
            state.isLoading = true;
          })
          .addCase(addDiaryExercise.fulfilled, (state, { payload }) => {
            console.log(payload.doneExercise)
            state.exercises.unshift(payload.doneExercise)
state.caloriesBurned=payload.caloriesBurnedTotal

            state.isLoading = false;
            state.error = '';
          })
          .addCase(addDiaryExercise.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message as string
          })
          .addCase(deleteDiaryExercise.pending, state => {
            state.isLoading = true;
          })
          .addCase(deleteDiaryExercise.fulfilled, (state, { payload }) => {
            state.products = state.products.filter( product=> product._id !== payload.id) 
            state.caloriesBurned=payload.caloriesBurnedTotal;
            state.isLoading = false;
            state.error = '';
          })
          .addCase(deleteDiaryExercise.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message as string
          })
        },
})

export const diaryReducer=slice.reducer




