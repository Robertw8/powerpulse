
import { operationWrapper } from '../../helpers';
  import { apiService, setToken } from '../../services';

const getDiary = operationWrapper(
    'diary/getDiary',
    async (_, thunkAPI) => {
      const state = thunkAPI.getState();
      const token = state.auth.token;

      if (!token) return thunkAPI.rejectWithValue('Unable to refresh user');
      setToken(token)
      const response = await apiService({
        method: 'get',
        url: 'diary',

    
    
      });
     
  
      return response;
    }
  );

  export { getDiary }