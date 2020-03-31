const Group = require("../models/Group");
let imgPort = "http://localhost:4000";

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
    group_photos: imgPort + "/uploads/" + req.file.filename,
    web: body.web,
    org_phone: body.org_phone,
    org_email: body.org_email,
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

  Group.findByIdAndUpdate(id, body, { new: true, runValidators: true })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.updateImg = (req, res) => {
  const id = req.params.id;

  Group.findByIdAndUpdate(
    id,
    { group_photos: imgPort + "/uploads/" + req.file.filenam },
    { new: true, runValidators: true }
  )
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.destroy = (req, res) => {
  const id = req.params.id;

  Group.findByIdAndDelete(id)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.josn(err);
    });
};

//5e823d8169e440478c397a2d
