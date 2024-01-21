interface WaistExercises {
  bodyPart: string;
  equipment?: string;
  gifUrl?: string;
  name: string;
  target: string;
  burnedCalories: number;
  time?: number;
  _id?: string;
}

interface WaistExercisesResponse {
  data: WaistExercises[];
  totalItems: number;
}


interface InitialState {
  bodyPart: WaistExercises[];
  isLoading: boolean;
  error: null | string;
}


export type {
  WaistExercises,
  InitialState,
  WaistExercisesResponse
};