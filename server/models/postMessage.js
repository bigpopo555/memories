import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedfile: String,
    likeCount: {
        type: Number,
        default: 0 
    },
    createAt: {
        type: Date,
        default: new Date()
    },
});

const PostMessage = mongoose.model('Postmessage', postSchema);

export default PostMessage;