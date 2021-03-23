const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "{PATH} is required"],
      minLength: [3, "{PATH} must be at least {MINLENGTH} characters"]
     },

    number_of_books: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports.Author = mongoose.model("Author", AuthorSchema);
