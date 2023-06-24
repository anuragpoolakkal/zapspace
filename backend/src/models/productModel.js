import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    description : {
        type: String,
        required: true,
    },
    images: {
        type: Array,
        default: [],
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
  }, { timestamps: true });
  
  const Product = mongoose.model('Product', productSchema);
  
  export default Product;