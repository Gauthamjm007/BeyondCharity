const User = require("../models/User");

module.exports.list = (req, res) => {
  User.find()
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.show = (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.create = (req, res) => {
  const body = req.body;
  const user = new User(body);

  user
    .save()
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.update = (req, res) => {
  const body = req.body;
  const id = req.params.id;

  User.findByIdAndUpdate(id, body, { new: true, runValidators: true })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.destroy = (req, res) => {
  const id = req.params.id;
  User.findByIdAndDelete(id)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.josn(err);
    });
};

module.exports.login = (req, res) => {
  const body = req.body;
  console.log(body, "body");
  User.findByCredentials(body.email, body.password)
    .then(function(user) {
      console.log(user, "user in login");
      return user.generateToken();
    })
    .then(function(token) {
      console.log(token, "token");
      res.setHeader("x-auth", token).send({});
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports.account = (req, res) => {
  const { user } = req;
  res.send(user);
};

module.exports.logout = (req, res) => {
  const { user, token } = req;
  User.findByIdAndUpdate(user._id, { $pull: { tokens: { token: token } } })
    .then(function() {
      res.send({ notice: "succesfully logged out" });
    })
    .catch(function(err) {
      res.send(err);
    });
};
