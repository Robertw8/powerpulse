import { createAsyncThunk } from '@reduxjs/toolkit';

interface OperationWrapper<R, P = object> {
  path: string;
  handler: (data: P) => Promise<R>;
  data?: P;
}

const operationWrapper = <R, P extends object>(
  { path, handler, data }: OperationWrapper<R, P> = {} as OperationWrapper<R, P>
) => {
  return createAsyncThunk<R, P>(path, async (requestData, thunkAPI) => {
    try {
      const requestDataToUse = data ? { ...data, ...requestData } : requestData;
      return await handler(requestDataToUse);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error instanceof Error ? error.message : 'An error occurred'
      );
    }
  });
};

export default operationWrapper;
