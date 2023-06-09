const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    title: { type: String, required: true, maxLength: 100 },
    textContent: { type: String, required: true, maxLength: 100 },
    createdAt: { type: Date, required: true, default: Date.now },
    owner: [{type: Schema.Types.ObjectId, ref: "User"}],
  });

// Export model
module.exports = mongoose.model("Message", MessageSchema);