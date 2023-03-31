const mongoose = require("mongoose");

const quizesSchema = new mongoose.Schema({
    name: String,
    sid: String,
})

module.exports = mongoose.model("Quizes", quizesSchema);