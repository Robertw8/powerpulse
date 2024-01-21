import { RootState } from '../rootReducer';

export const selectStatistics = ({ statistics }: RootState) =>
  statistics.statistics;

export const selectIsLoading = ({ statistics }: RootState) =>
  statistics.isLoading;
export const selectError = ({ statistics }: RootState) => statistics.error;
