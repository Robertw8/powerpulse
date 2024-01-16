const errorWrapper = async <T>(
  handler: () => Promise<T>
): Promise<T | string> => {
  try {
    const result = await handler();
    return result;
  } catch (error) {
    return error instanceof Error ? error.message : 'An error occurred';
  }
};

export default errorWrapper;
