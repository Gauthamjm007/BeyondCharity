const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  title: {
    type: String,
  },
  done: {
    type: String,
  },
});

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;
