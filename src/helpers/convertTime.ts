const convertTime = (number: number) => {
  if (Math.sign(number) === 1) {
    return number + ' min';
  }
  return '+ ' + Math.abs(number) + ' min';
};

export default convertTime;
