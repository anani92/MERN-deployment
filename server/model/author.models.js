const mongoose = require('mongoose')
const AuthorSchema = new mongoose.Schema(
  {
    name: { type: String,
    required:[true, "name is required"] },
  },
  { timestamps: true }
)
const Author = mongoose.model('Author', AuthorSchema)
module.exports = Author
