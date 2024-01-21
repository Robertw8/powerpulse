interface InitialState {
    products:string[]
    exercises:string[],
    caloriesBurned:number,
    caloriesConsumed:number,
    caloriesRemaining:number,
    sportsTime:number,
    sportsRemaining:number, 
    isLoading: boolean,
    error: string,
  }
  
  export type {  InitialState };