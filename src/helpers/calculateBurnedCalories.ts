const calculateBurnedCalories = (time: number, calories: number) => {
  return Math.round((time * calories) / 180);
};

export default calculateBurnedCalories;
