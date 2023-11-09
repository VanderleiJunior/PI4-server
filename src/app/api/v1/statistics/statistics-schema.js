import mongoose, { Schema } from "mongoose";

export const statisticsSchema = new Schema(
  {
    temperature: {
      mean: {
        type: Number,
      },
      mode: {
        type: Array,
      },
      median: {
        type: Number,
      },
      standardDeviation: {
        type: Number,
      },
      skewness: {
        type: Number,
      },
      kurtosis: {
        type: Number,
      },
    },
    soilMoisture: {
      mean: {
        type: Number,
      },
      mode: {
        type: Array,
      },
      median: {
        type: Number,
      },
      standardDeviation: {
        type: Number,
      },
      skewness: {
        type: Number,
      },
      kurtosis: {
        type: Number,
      },
    },
    airMoisture: {
      mean: {
        type: Number,
      },
      mode: {
        type: Array,
      },
      median: {
        type: Number,
      },
      standardDeviation: {
        type: Number,
      },
      skewness: {
        type: Number,
      },
      kurtosis: {
        type: Number,
      },
    },
    date: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

export const StatisticsSchema = mongoose.model("Statistics", statisticsSchema);
