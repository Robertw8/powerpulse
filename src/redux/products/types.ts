interface Product {
  weight: number;
  calories: number;
  category: string;
  title: string;
  groupBloodNotAllowed: { [key: string]: boolean };
}

interface InitialState {
  products: Product[];
  isLoading: boolean;
  error: string | undefined;
  calculatedCalories: number;
  categories: string[];
}

export type { Product, InitialState };
