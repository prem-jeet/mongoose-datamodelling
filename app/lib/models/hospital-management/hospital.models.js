import { Schema, model } from "mongooose"

const hospitalSchema = new Schema({}, { timeStamps: true });

export default Hospital = model("Hospital", hospitalSchema);