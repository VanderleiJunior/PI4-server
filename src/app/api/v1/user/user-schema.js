import mongoose, { Schema } from "mongoose";

export const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    birthDate: {
      type: String,
    },

    address: {
      street: {
        type: String,
      },
      number: {
        type: String,
      },
      complement: {
        type: String,
      },
      neighborhood: {
        type: String,
      },
      city: {
        type: String,
      },
      state: {
        type: String,
      },
      cep: {
        type: String,
      },
    },
  },
  { timestamps: true }
);

export const UserSchema = mongoose.model("User", userSchema);
