import calculateMean from "./mean.js";
import calculateMode from "./mode.js";
import calculateMedian from "./median.js";
import calculateStandardDeviation from "./standardDeviation.js";
import calculateSkewness from "./skewness.js";
import calculateKurtosis from "./kurtosis.js";

function calculateStatistics(dataArray) {
  const mean = calculateMean(dataArray);

  const mode = calculateMode(dataArray);

  const median = calculateMedian(dataArray);

  const standardDeviation = calculateStandardDeviation(dataArray, mean);

  const skewness = calculateSkewness(dataArray, mean, standardDeviation);

  const kurtosis = calculateKurtosis(dataArray, mean, standardDeviation);
  // You can add calculations for Probabilities, Regression, and Statistical Inference here, depending on your specific requirements.

  return {
    mean,
    mode,
    median,
    standardDeviation,
    skewness,
    kurtosis,
  };
}

export default calculateStatistics;
