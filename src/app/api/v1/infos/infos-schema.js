import mongoose, { Schema } from "mongoose";

export const infosSchema = new Schema(
  {
    temperature: {
      type: Number,
      required: true,
    },
    soilMoisture: {
      type: Number,
      required: true,
    },
    airMoisture: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const infos = mongoose.model("infos", infosSchema);
