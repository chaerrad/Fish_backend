import mongoose from "mongoose";
import "../db";
const fishSchema = new mongoose.Schema({
    id: {type: String},
    cannotcatch: {type: String},
});

const Fish= mongoose.model("Fish",fishSchema);
export default Fish;

