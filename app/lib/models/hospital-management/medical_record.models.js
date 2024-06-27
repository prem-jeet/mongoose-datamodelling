import { Schema, model } from "mongooose"

const medicalRecordSchema = new Schema({}, { timeStamps: true });

export default MedicalRecord = model("MedicalRecord", medicalRecordSchema)