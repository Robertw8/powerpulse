interface Product {
  weight: number;
  calories: number;
  category: string;
  title: string;
  groupBloodNotAllowed: { [key: string]: boolean };
  _id: string;
}

interface Filters {
  search?: string;
  categories?: string;
  type?: string;
}

interface InitialState {
  products: Product[];
  isLoading: boolean;
  error: string | undefined;
  calculatedCalories: number;
  categories: string[];
  filters: Filters;
}

export type { Product, InitialState };
