import mongoose, { mongo } from "mongoose";

const { Schema } = mongoose;

const placeSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  image: { type: String, required: true },
  mapURL: { type: String },
  description: { type: String },
});

const Places = mongoose.models.Places || mongoose.model("Places", placeSchema);

export default Places;
