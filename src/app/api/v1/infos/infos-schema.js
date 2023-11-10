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
    systemOrigin: {
      type: String,
    },
  },
  { timestamps: true }
);

export const InfosSchema = mongoose.model("Infos", infosSchema);
