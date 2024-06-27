import { Schema, model } from "mongoose"

const categorySchema = new Schema(
    {
        name:{
            type:String,
            unique:true,
            require:true,
        }
    }
    ,{timestamps: true});

export default Category = model("Categry", categorySchema);

