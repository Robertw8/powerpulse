const calculateCalories = (amount, calories) => {
  return Math.round((amount * calories) / 100);
};

export default calculateCalories;
