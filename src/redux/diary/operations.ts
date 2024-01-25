import { callToast, operationWrapper } from '../../helpers';
import { apiService } from '../../services';

const getDiary = operationWrapper('diary/getDiary', async date => {
  const response = await apiService({
    method: 'get',
    url: 'diary',
    config: { params: { date } },
  });

  return response.data;
});

interface AddDiaryProduct {
  id: string;
  date: string;
  amount: number;
  calories: number;
}
const setSelectedDate=operationWrapper('diary/setSelectedDate',async(date)=>date )

const addDiaryProduct = operationWrapper(
  'diary/addDiaryProduct',
  async ({ id, date, amount, calories }: AddDiaryProduct) => {
    const response = await apiService(
      {
        method: 'post',
        url: 'diary/products',
        data: {
          product_ID: id,
          date,
          amount,
          calories,
        },
      },
      error => {
        callToast(
          'error',
          'Something went wrong when adding product to your diary. Please try again'
        );
        return error;
      }
    );

    return response;
  }
);

const deleteDiaryProduct = operationWrapper(
  'diary/deleteDiaryProduct',
  async productId => {
    const response = await apiService({
      method: 'delete',
      url: `diary/products/${productId}`,
    });

    const productResponse = { ...response, id: productId };
    return productResponse;
  }
);

interface AddDiaryExercise {
  id: string;
  time: number;
  date: string;
  calories: number;
}

const addDiaryExercise = operationWrapper(
  'diary/addDiaryExercise',
  async ({ id, time, date, calories }: AddDiaryExercise) => {
    const response = await apiService(
      {
        method: 'post',
        url: 'diary/exercises',
        data: {
          exercise_ID: id,
          time,
          date,
          calories,
        },
      },
      error => {
        callToast(
          'error',
          'Something went wrong when adding exercise to your diary. Please try again'
        );
        return error;
      }
    );

    return response.data;
  }
);

const deleteDiaryExercise = operationWrapper(
  'diary/deleteDiaryExercise',
  async exerciseId => {
    const response = await apiService({
      method: 'delete',
      url: `diary/exercises/${exerciseId}`,
    });

    const exerciseResponse = { ...response, id: exerciseId };

    return exerciseResponse;
  }
);
export {
  getDiary,
  addDiaryProduct,
  deleteDiaryProduct,
  addDiaryExercise,
  deleteDiaryExercise,
  setSelectedDate
};
