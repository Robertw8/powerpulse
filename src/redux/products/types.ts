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
}

export type { Product, InitialState };
