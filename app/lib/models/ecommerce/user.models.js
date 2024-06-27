import { Schema, model } from "mongoose"

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            lowercase: true,
            unique: true
        },
        email:{
            type:String,
            required:true,
            lowercase:true,
            unique:true,
        },
        password:{
            type:String,
            required:true,
        }
    }
    , { timestamps: true });

export default User = model("User", userSchema);