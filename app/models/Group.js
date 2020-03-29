const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GeoSchema = new Schema({
  type: {
    type: String,
    default: "Point"
  },
  coordinates: {
    type: [Number],
    index: "2dsphere"
  }
});

const groupSchema = new Schema([
  {
    owner: {
      type: Schema.Types.ObjectId
    },
    name: {
      type: String
    },
    category: {
      type: Schema.Types.ObjectId
    },
    address: {
      type: String
    },
    geometry: GeoSchema,
    description: {
      type: String
    },
    group_photos: [
      {
        type: String
      }
    ],
    web: {
      type: String,
      validate: {
        validator: function(value) {
          return validator.isURL(value);
        },
        message: function() {
          return "please provide a valid url";
        }
      }
    },
    org_phone: {
      type: String
    },
    org_email: {
      type: String
    },
    events: [
      {
        type: Schema.Types.ObjectId
      }
    ]
  }
]);

const Group = mongoose.model("Group", groupSchema);
module.exports = Group;
