interface WaistExercises {
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

interface WaistExercisesResponse {
  data: WaistExercises[];
  totalItems: number;
}


interface InitialState {
  exercises: WaistExercises[];
  filters: Filter ;
  bodyPart: WaistExercises[];
  isLoading: boolean;
  error: string | undefined;
}


export type {
  WaistExercises,
  InitialState,
  WaistExercisesResponse,
  Filter
};