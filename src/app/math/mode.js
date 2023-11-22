function calculateMode(dataArray) {
  const countMap = new Map();
  let maxCount = 0;
  let modes = [];

  dataArray.forEach((value) => {
    const fixValue = value.toFixed(2);
    if (countMap.has(fixValue)) {
      countMap.set(fixValue, countMap.get(fixValue) + 1);
    } else {
      countMap.set(fixValue, 1);
    }

    if (countMap.get(fixValue) > maxCount) {
      maxCount = countMap.get(fixValue);
      modes = [fixValue];
    } else if (countMap.get(fixValue) === maxCount) {
      modes.push(fixValue);
    }
  });

  return modes.length > 2 ? "n/a" : modes;
}

export default calculateMode;
