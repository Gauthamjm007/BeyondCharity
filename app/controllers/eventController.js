const Event = require("../models/Event");

module.exports.list = (req, res) => {
  Event.find({ owner: req.user._id })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.create = (req, res) => {
  const body = req.body;
  const event = new Event({
    owner: req.user._id,
    group: body.group,
    name: body.name,
    event: body.event,
    geometry: body.geometry,
    event_imgs: body.event_imgs,
    desciption: body.desciption,
    registered: body.registered,
    attended: body.attended,
    contact_info: body.contact_info
  });

  event
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

  Event.findByIdAndUpdate(id, body, { new: true, runValidators: true })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.destroy = (req, res) => {
  const id = req.params.id;

  Event.findByIdAndDelete(id)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.josn(err);
    });
};
