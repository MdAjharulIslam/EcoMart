
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
   description:{
        type: Array,
        required: true,
    },
   
    price: {
        type: Number,
        required: true,
    },
    offerPrice: {
        type: Number,
        required: true,
    },

    image: {
        type: [String],
        required: true,
    },

    category: {
        type: String,
        required: true,
    },
    inStock: {
        type: Boolean,
        default: true,
    },
     badge: {
        type: String,
        enum: ["20% OFF", "New Arrival", "Limited Stock"],
        default: null, 
    },
    
},{timestamps:true} )


const Product = mongoose.models.product || mongoose.model("product", productSchema);
export default Product;