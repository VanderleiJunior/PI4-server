import mongoose, { Schema } from "mongoose";

export const equipmentsSchema = new Schema(
  {
    serialNumber: {
      type: String,
    },
    userId: {
      type: String,
    },
  },
  { timestamps: true }
);

export const EquipmentsSchema = mongoose.model("Equipments", equipmentsSchema);
