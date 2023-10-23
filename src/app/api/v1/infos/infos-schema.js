import mongoose from "mongoose";
import Schema from "mongoose";

const infosSchema = new Schema(
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

const infos = mongoose.model("infos", infosSchema);

export default {infosSchema, infos};
