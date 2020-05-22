const Todo = require("../models/Todo");

module.exports.create = (req, res) => {
  const data = req.body;
  const todo = new Todo(data);
  todo
    .save()
    .then((todo) => {
      res.send(todo);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports.list = (req, res) => {
  Todo.find()
    .then((todo) => {
      res.send(todo);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports.find = (req, res) => {
  Todo.find({ _id: req.params.id })
    .then((todo) => {
      res.send(todo);
    })
    .catch((err) => {
      res.send(err);
    });
};
