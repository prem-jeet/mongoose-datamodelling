import { Schema, model } from "mongoose"

const productSchema = new Schema(
    {
        category: {
            type: Schema.Types.ObjectId,
            ref: 'Category',
            required:true,
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        description: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        productImage: {
            type: String,
        },
        price: {
            type: Number,
            default: 0
        },
        stock: {
            default: 0,
            type: Number
        }
    }
    , { timestamps: true });

export default Product = model("Product", productSchema)
