const Category = require("../models/Category");

module.exports.list = (req, res) => {
  Category.find()
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.create = (req, res) => {
  const body = req.body;
  const category = new Category(body);
  if (req.user.role == "admin") {
    category
      .save()
      .then((category) => {
        res.json(category);
      })
      .catch((err) => {
        res.json(err);
      });
  } else {
    res.send("you are not authorized to create a category");
  }
};

module.exports.update = (req, res) => {
  const body = req.body;
  const id = req.params.id;
  if (req.user.role == "admin") {
    Category.findByIdAndUpdate(id, body, { new: true, runValidators: true })
      .then((user) => {
        res.json(user);
      })
      .catch((err) => {
        res.json(err);
      });
  } else {
    res.send("you are not authorized to edit the category");
  }
};

module.exports.destroy = (req, res) => {
  const id = req.params.id;
  if (req.user.role == "admin") {
    Category.findByIdAndDelete(id)
      .then((user) => {
        res.json(user);
      })
      .catch((err) => {
        res.josn(err);
      });
  } else {
    res.send("you are not authorized to delete a category");
  }
};
