function calculateMode(dataArray) {
  const countMap = new Map();
  let maxCount = 0;
  let modes = [];

  dataArray.forEach((value) => {
    if (countMap.has(value)) {
      countMap.set(value, countMap.get(value) + 1);
    } else {
      countMap.set(value, 1);
    }

    if (countMap.get(value) > maxCount) {
      maxCount = countMap.get(value);
      modes = [value];
    } else if (countMap.get(value) === maxCount) {
      modes.push(value);
    }
  });

  return modes;
}

export default calculateMode;
