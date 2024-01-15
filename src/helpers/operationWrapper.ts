import { createAsyncThunk } from '@reduxjs/toolkit';

interface OperationWrapper<R> {
  path: string;
  handler: () => Promise<R>;
}

const operationWrapper = <P, R>({ path, handler }: OperationWrapper<R>) => {
  return createAsyncThunk<R, P>(path, async (_, thunkAPI) => {
    try {
      return await handler();
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error instanceof Error ? error.message : 'An error occurred'
      );
    }
  });
};

export default operationWrapper;
