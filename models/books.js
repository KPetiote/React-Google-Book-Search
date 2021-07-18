// BOOKS JS
// ---------------------------------------------------------------------------

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    authors: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        unique: true
    },
    link: {
        type: String,
        required: true
    }
});

const Books = mongoose.model("Book", bookSchema);

module.exports = Books;