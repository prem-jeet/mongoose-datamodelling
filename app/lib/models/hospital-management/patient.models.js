import { Schema, model } from "mongooose"

const patientSchema = new Schema({
    name:{
        type:String,
        requied:true
    },
    diagnedWith:{
        type:String,
        required:true
    },
    address:{
        type:String,
        requied:true
    },
    age:{
        type:Number,
        required:true,
    },
    bloodGroup:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        enum: ['M', "F", "o"],
        required: true
    },
    admittedIn:{
        type: Schema.Types.ObjectId,
        ref: "Hospital"
    }
}, { timeStamps: true });

export default Patient = model("Patient", patientSchema)