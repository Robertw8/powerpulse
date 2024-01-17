 interface WaistExercises {
    _id?: string;
    burnedCalories: number;
    bodyPart: string;
    target: string;
    title?: string;
    category?: string;
    equipment: string;
    name: string;
}

interface InitialState {
    exercises: WaistExercises[];
    isLoading: boolean;
    error: null | string;
}


export type { WaistExercises, InitialState };