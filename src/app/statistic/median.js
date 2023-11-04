function calculateMedian(dataArray) {
  if (!Array.isArray(dataArray) || dataArray.length === 0) {
    return 0;
  }

  const sortedArray = dataArray.slice().sort((a, b) => a - b);

  const middleIndex = Math.floor(sortedArray.length / 2);

  if (sortedArray.length % 2 === 0) {
    return (sortedArray[middleIndex - 1] + sortedArray[middleIndex]) / 2;
  } else {
    return sortedArray[middleIndex];
  }
}

export default calculateMedian;
