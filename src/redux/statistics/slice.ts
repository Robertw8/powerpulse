import { createSlice } from '@reduxjs/toolkit';
import { getStatistics } from './operations';
import { InitialState } from './types';

const initialState: InitialState = {
  isLoading: false,
  error: '',
  statistics: {
    totalTrainingUsers: 0,
    totalTrainingHoursUsers: 0,
    totalVideo: 0,
    totalUsersCalories: 0,
    totalUsers: 0,
  },
};

const slice = createSlice({
  name: 'statistics',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getStatistics.pending, state => {
        state.isLoading = true;
      })
      .addCase(getStatistics.fulfilled, (state, { payload }) => {
        state.statistics = { ...payload };
        state.isLoading = false;
      })
      .addCase(getStatistics.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const statisticsReducer = slice.reducer;
