const calculateCalories = (amount: number, calories: number) => {
  return Math.round((amount * calories) / 100);
};

export default calculateCalories;
