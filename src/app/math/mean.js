function calculateMean(dataArray) {
  if (!Array.isArray(dataArray) || dataArray.length === 0) {
    return 0;
  }

  const sum = dataArray.reduce((accumulator, value) => accumulator + value, 0);
  const mean = sum / dataArray.length;

  return mean;
}

export default calculateMean;
