const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    minlength: 3
  },
  email: {
    type: String,
    unique: true,
    validate: {
      validator: function(value) {
        return validator.isEmail(value);
      },
      message: function() {
        return "please enter a valid email";
      }
    }
  },
  password: {
    type: String,
    minlength: 6,
    maxlength: 128
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user"
  },
  gender: {
    type: String,
    enum: ["Male", "Female"]
  },
  profile_img: {
    type: String
  },
  phone: {
    type: String
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "category"
  },
  created_groups: [{ type: Schema.Types.ObjectId }],
  member_group: [
    {
      type: Schema.Types.ObjectId
    }
  ],
  attended_events: [
    {
      type: Schema.Types.ObjectId
    }
  ],
  registered_events: [
    {
      type: Schema.Types.ObjectId
    }
  ],
  tokens: [
    {
      token: {
        type: String
      },
      createdAt: {
        type: Date,
        default: Date.now
      }
    }
  ]
});

//custom static method for finding token

userSchema.statics.findByToken = function(token) {
  const User = this;
  let tokenData;
  try {
    tokenData = jwt.verify(token, "byc@1997");
  } catch (err) {
    return Promise.reject(err);
  }
  return User.findOne({ _id: tokenData._id, "tokens.token": token });
};

//custom static method for verifying the user credentilas

userSchema.statics.findByCredentials = function(email, password) {
  const User = this;
  return User.findOne({ email })
    .then(function(user) {
      if (!user) {
        return Promise.reject("invalid email/password");
      }
      return bcryptjs.compare(password, user.password).then((result) => {
        if (result) {
          return Promise.resolve(user);
        } else {
          return Promise.reject("invalid email/password");
        }
      });
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

//generate a random jwt token for the user
userSchema.methods.generateToken = function() {
  const user = this;
  const tokenData = {
    _id: user._id,
    email: user.email,
    createdAt: Number(new Date())
  };
  console.log(tokenData, "tokenData");
  const token = jwt.sign(tokenData, "byc@1997");
  console.log(token, "user token push");
  user.tokens.push({
    token
  });
  console.log(user, "user after push");

  return user
    .save()
    .then(function(user) {
      console.log(user, "user data after save");
      return Promise.resolve(token);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

//encrypt password before saving it
userSchema.pre("save", function(next) {
  const User = this;
  if (User.isNew) {
    bcryptjs.genSalt(12).then(function(salt) {
      bcryptjs.hash(User.password, salt).then((encryptedPassword) => {
        User.password = encryptedPassword;
        next();
      });
    });
  } else {
    next();
  }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
