
import { operationWrapper } from '../../helpers';
  import { apiService} from '../../services';

const getDiary = operationWrapper(
    'diary/getDiary',
    async (date) => {
 
      const response = await apiService({
        method: 'get',
        url: 'diary',
config:{params:{date}}
    
    
      });
     
  console.log(response);
      return response
    }
  );
 
  const addDiaryProduct = operationWrapper(
    'diary/addDiaryProduct',
    async (data) => {
 
      const response = await apiService({
        method: 'post',
        url: 'diary/products',
        data
    
    
      });
     
  console.log(response);
      return response.data;
    }
  );

  const deleteDiaryProduct = operationWrapper(
    'diary/deleteDiaryProduct',
    async (productId) => {
 
      const response = await apiService({
        method: 'delete',
        url: `diary/products/${productId}`,
       
    
    
      });
     
  console.log(response);
      return response;
    }
  );
  export { getDiary,addDiaryProduct,deleteDiaryProduct }