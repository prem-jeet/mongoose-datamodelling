import { Schema, model } from "mongoose"

const categorySchema = new Schema(
    {
        name:{
            type:String,
            unique:true,
            required:true,
        }
    }
    ,{timestamps: true});

export default Category = model("Categry", categorySchema);

