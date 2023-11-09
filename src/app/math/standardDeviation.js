function calculateStandardDeviation(array, mean) {
  if (!Array.isArray(array) || array.length === 0) {
    return 0;
  }

  const n = array.length;
  const sumOfSquares = array.reduce((accumulator, value) => {
    return accumulator + Math.pow(value - mean, 2);
  }, 0);
  return Math.sqrt(sumOfSquares / (n - 1));
}
export default calculateStandardDeviation;
