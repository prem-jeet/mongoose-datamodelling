import { Schema, model } from "mongooose"

const doctorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    qualificatoin: {
        type: String,
        required: true,
    },
    experienceInYears: {
        type: Number,
        default: 0
    },
    worksInHospital: [{
        type: Schema.Types.ObjectId,
        ref: 'Hospital',
    }],
}, { timeStamps: true });

export default Doctor = model("Doctor", doctorSchema)