// import { createSlice } from '@reduxjs/toolkit';
// import { getUserAvatar, getUserValue } from './operations';
// import initialState from '../auth/initialState';

// const profileSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {},
//   extraReducers: builder => {
//     builder
//       .addCase(getUserValue.pending, state => {
//         state.isLoading = true;
//       })
//       .addCase(getUserValue.fulfilled, (state, { payload }) => {
//         state.user = { ...state.user, ...payload };
//         state.isLoading = false;
//       })
//       .addCase(getUserValue.rejected, (state, { payload }) => {
//         state.isLoading = false;
//         state.isLoggedIn = false;
//         state.error = payload as string;
//       })
//       .addCase(getUserAvatar.pending, state => {
//         state.isLoading = true;
//       })
//       .addCase(getUserAvatar.fulfilled, (state, { payload }) => {
//         state.user.avatarURL = payload.avatarURL;
//         state.isLoading = false;
//       })
//       .addCase(getUserAvatar.rejected, (state, { payload }) => {
//         state.isLoading = false;
//         state.isLoggedIn = false;
//         state.error = payload as string;
//       });
//   },
// });

// export const persistedAuthReducer = profileSlice.reducer;
