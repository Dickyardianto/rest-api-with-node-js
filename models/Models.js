import mongoose from "mongoose";

const Models = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    nama: {
        type: String,
        required: true
    }
});

export default mongoose.model('Nama', Models);