function calculateKurtosis(array, mean, standardDeviation) {
  const n = array.length;
  const sumFourthPowers = array.reduce((accumulator, value) => {
    return accumulator + Math.pow(value - mean, 4);
  }, 0);
  return sumFourthPowers / (n * Math.pow(standardDeviation, 4)) - 3;
}

export default calculateKurtosis;
