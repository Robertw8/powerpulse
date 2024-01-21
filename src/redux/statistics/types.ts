interface InitialState {
  isLoading: boolean;
  error: string | undefined;
  statistics: Statistics;
}

interface Statistics {
  totalTrainingUsers: number;
  totalTrainingHoursUsers: number;
  totalVideo: number;
  totalUsersCalories: number;
  totalUsers: number;
}

export type { InitialState, Statistics };
