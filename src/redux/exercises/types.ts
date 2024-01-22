interface Exercise {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  name: string;
  target: string;
  burnedCalories: number;
  time: number;
  _id: string;
}

interface Filters {
  filter: string;
  category: string;
}

interface ExercisesResponse {
  data: Exercise[];
  totalItems: number;
}

interface InitialState {
  exercises: Exercise[];
  filters: Filters;
  bodyPart: Exercise[];
  isLoading: boolean;
  error: string | undefined;
}

export type { Exercise, InitialState, ExercisesResponse, Filters };
