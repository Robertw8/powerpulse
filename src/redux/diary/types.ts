interface InitialState {
  products: Products[];
  exercises: string[];
  caloriesBurned: number;
  caloriesConsumed: number;
  caloriesRemaining: number;
  sportsTime: number;
  sportsRemaining: number;
  isLoading: boolean;
  error: string;
}

interface Products {
  amount: number;
  calories: number;
  category: string;
  date: string;
  groupBloodNotAllowed: { [key: string]: boolean };
  product_ID: string;
  recommend: boolean;
  title: string;
  _id: string;
}

export type { InitialState, Products };
