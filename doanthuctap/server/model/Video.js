import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
    userId:[{ type: mongoose.Types.ObjectId, ref: 'User' },
]
,
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    imgUrl: {
        type: String,
        required: true,
    },
documentUrl: {
        type: String,
        required: true,
    },
    view: {
        type: Number,

        default: 0,
    },
    tags: {
        type: [String],
        default: [],
    },
    likes: {
        type: [String],
        default: [],
    },
    dislikes: {
        type: [String],
        default: [],
    },

}, { timestamps: true }
)

export default mongoose.model('Video', VideoSchema);