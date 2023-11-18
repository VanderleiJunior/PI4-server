import mongoose, { Schema } from "mongoose";

export const infosSchema = new Schema(
  {
    temperature: {
      type: Number,
      required: true,
    },
    soilMoisture: {
      type: Number,
    },
    airMoisture: {
      type: Number,
      required: true,
    },
    equipmentSerialNumber: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const InfosSchema = mongoose.model("Infos", infosSchema);
