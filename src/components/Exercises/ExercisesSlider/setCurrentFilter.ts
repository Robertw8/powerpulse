const currentFilter = (category: string): string => {
  if (category === 'bodyPart') {
    return 'Body parts';
  } else if (category === 'muscles') {
    return 'Muscles';
  } else {
    return 'Equipment';
  }
};

export default currentFilter;
