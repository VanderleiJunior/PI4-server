const calculateHydrationProbability = (soilHumidity, temperature) => {
  const WEIGHT_SOIL_HUMIDITY = 0.7;
  const WEIGHT_TEMPERATURE = 0.3;
  const IDEAL_HUMIDITY_MIN = 50;
  const IDEAL_HUMIDITY_MAX = 75;
  const IDEAL_TEMPERATURE_MIN = 20;
  const IDEAL_TEMPERATURE_MAX = 30;

  const normalize = (value, valueMin, valueMax) => {
    const range = valueMax - valueMin;
    if (value > valueMin && value <= valueMax) {
      return 1;
    }
    return Math.min(1, Math.max(0, (value - valueMin) / range));
  };

  const normalizedHumidity = normalize(
    soilHumidity,
    IDEAL_HUMIDITY_MIN,
    IDEAL_HUMIDITY_MAX
  );
  const normalizedTemperature = normalize(
    temperature,
    IDEAL_TEMPERATURE_MIN,
    IDEAL_TEMPERATURE_MAX
  );

  // Invertendo a lógica para calcular a probabilidade de hidratação
  const probability =
    WEIGHT_SOIL_HUMIDITY * normalizedHumidity +
    WEIGHT_TEMPERATURE * normalizedTemperature;

  return probability * 100;
};

export default calculateHydrationProbability;
