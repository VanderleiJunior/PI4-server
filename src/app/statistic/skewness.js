function calculateSkewness(array, mean, standardDeviation) {
  const n = array.length;
  const sumCubed = array.reduce((accumulator, value) => {
    return accumulator + Math.pow(value - mean, 3);
  }, 0);
  return sumCubed / (n * Math.pow(standardDeviation, 3));
}

export default calculateSkewness;
