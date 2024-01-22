interface Exercises {
  bodyPart: string;
  equipment?: string;
  gifUrl?: string;
  name: string;
  target: string;
  burnedCalories: number;
  time?: number;
  _id?: string;
  filters: Filter;
}

interface Filter {
  query: string;
  page: number;
  limit: number;
}

interface ExercisesResponse {
  data: Exercises[];
  totalItems: number;
}

interface InitialState {
  exercises: Exercises[];
  filters: Filter;
  bodyPart: Exercises[];
  isLoading: boolean;
  error: string | undefined;
}

export type { Exercises, InitialState, ExercisesResponse, Filter };
