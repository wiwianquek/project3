const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new Schema({
    date: {
        type: Date,
        required: true,
    },  
}, {
    timestamps: true
});

module.exports = mongoose.model("CardID", cardSchema);