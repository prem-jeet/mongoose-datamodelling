import { Schema, model } from "mongoose"

const userSchema = new Schema(
    {
        name: {
            type: String,
            require: true,
            lowercase: true,
            unique: true
        },
        email:{
            type:String,
            require:true,
            lowercase:true,
            unique:true,
        },
        password:{
            type:String,
            require:true,
        }
    }
    , { timestamps: true });

export default User = model("User", userSchema);