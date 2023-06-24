import mongoose from "mongoose";

const businessSchema = new mongoose.Schema(
    {
        businessId: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        category: {
            type: Number,
            required: true,
        },
        color: {
            type: String,
            required: false,
        }
    },
    { timestamps: true }
);

export default mongoose.model("Business", businessSchema);