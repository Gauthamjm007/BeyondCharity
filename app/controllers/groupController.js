const Group = require("../models/Group");

module.exports.list = (req, res) => {
  Group.find({ owner: req.user._id })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.create = (req, res) => {
  const body = req.body;
  const group = new Group({
    owner: req.user._id,
    name: body.name,
    category: body.category,
    address: body.address,
    geometry: body.geometry,
    description: body.description,
    group_photos: body.group_photos,
    web: body.web,
    org_phone: body.org_phone,
    org_email: body.org_phone,
    events: body.events
  });

  group
    .save()
    .then((category) => {
      res.json(category);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.update = (req, res) => {
  const body = req.body;
  const id = req.params.id;
  if (req.user.role == "admin") {
    Group.findByIdAndUpdate(id, body, { new: true, runValidators: true })
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
    Group.findByIdAndDelete(id)
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
