  
const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  votes: Number,
  botid: String
});

module.exports = mongoose.model("Votes", usersSchema)
