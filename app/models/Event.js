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

const eventSchema = new Schema([
  {
    owner: {
      type: Schema.Types.ObjectId
    },
    group: {
      type: Schema.Types.ObjectId
    },
    name: {
      type: String
    },
    event_date: {
      type: Date
    },
    event_time: {
      type: "String"
    },
    geometry: GeoSchema,
    event_imgs: {
      type: String
    },
    desciption: {
      type: String
    },
    registered: [
      {
        type: Schema.Types.ObjectId
      }
    ],
    attended: [
      {
        type: Schema.Types.ObjectId
      }
    ],
    contact_info: {
      type: String
    }
  }
]);

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;
