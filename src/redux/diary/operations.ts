import { operationWrapper } from '../../helpers';
import { apiService } from '../../services';

const getDiary = operationWrapper('diary/getDiary', async date => {
  const response = await apiService({
    method: 'get',
    url: 'diary',
    config: { params: { date } },
  });
  console.log(date);

  console.log(response.data);
  return response.data;
});

interface AddDiaryProduct {
  id: string;
  date: string;
  amount: number;
  calories: number;
}

const addDiaryProduct = operationWrapper(
  'diary/addDiaryProduct',
  async ({ id, date, amount, calories }: AddDiaryProduct) => {
    const response = await apiService({
      method: 'post',
      url: 'diary/products',
      data: {
        product_ID: id,
        date,
        amount,
        calories,
      },
    });

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

    console.log(response);
    return response;
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
    const response = await apiService({
      method: 'post',
      url: 'diary/exercises',
      data: {
        exercise_ID: id,
        time,
        date,
        calories,
      },
    });

    console.log(response);
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

    console.log(response);
    return response;
  }
);
export {
  getDiary,
  addDiaryProduct,
  deleteDiaryProduct,
  addDiaryExercise,
  deleteDiaryExercise,
};
