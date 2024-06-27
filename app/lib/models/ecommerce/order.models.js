import { Schema, model } from "mongoose"

const orderItemSchema = new Schema({
    poductId: {
        type: Schema.Types.ObjectId,
        ref: "product",
        require: true
    },
    quantity: {
        type: Number,
        require: true,
    }
})
const OrderItem = model("OderItem", odeItemSchema)



const orderSchema = new Schema({
    oderPrice: {
        type: Number,
        requirerd: true
    },
    customer: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    orderItems: {
        type: [orderItemSchema]
    },
    address:{
        type: String,
        required:true,
    },
    state:{
        type:String,
        enum:['PENDING','CANCELLED','DELIVERED']
    }
}, { timestamp: true });

export default Order = model("Order", orderSchema);