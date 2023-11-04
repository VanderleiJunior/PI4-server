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

export const InfosSchema = mongoose.model("Infos", infosSchema);