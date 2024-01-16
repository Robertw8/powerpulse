import { SerializedError, createAsyncThunk } from '@reduxjs/toolkit';

type ErrorHandler = (error: unknown, thunkAPI) => SerializedError;

export const operationWrapper = <Returned, ThunkArg>(
  path: string,
  handler: (args: ThunkArg, thunkAPI) => Promise<Returned>,
  errorHandler: ErrorHandler
) => {
  return createAsyncThunk<Returned, ThunkArg>(path, async (args, thunkAPI) => {
    try {
      return await handler(args, thunkAPI);
    } catch (error) {
      if (errorHandler)
        return thunkAPI.rejectWithValue(errorHandler(error, thunkAPI));

      return thunkAPI.rejectWithValue(
        error instanceof Error ? error.message : 'An error occurred'
      );
    }
  });
};

export default operationWrapper;
