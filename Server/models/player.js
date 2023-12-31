const mongoose = require('mongoose');
const { hasPwd } = require('../helpers/bcrypt');

const PlayerSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, 'Name is required'],
      minlength: [3, 'Min length for full name is 3 character'],
      maxlength: [255, 'Max length for full name is 255 character'],
    },
    email: {
      type: String,
      unique: true,
      required: [true, 'Email is required'],
      validate: {
        validator: async (value) => {
          const checkEmail = await mongoose
            .model('Players')
            .findOne({ email: value });
          return !checkEmail;
        },
        message: 'Email already registered',
      },
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      validate: {
        validator: (value) => {
          return /^(?=.*[A-Z])(?=.*\d).{5,}$/.test(value);
        },
        message:
          'Password must contain at least one capital letter, one number, and be at least 5 characters long',
      },
    },
    username: {
      type: String,
      required: [true, 'Username is required'],
    },
    role: {
      type: String,
      enum: ['admin', 'user'],
      default: 'user',
    },
    status: {
      type: String,
      enum: ['Y', 'N'],
      default: 'Y',
    },
    phoneNumber: {
      type: String,
      required: [true, 'Phone number is required'],
      minlength: [9, 'Phone number length min 11 number'],
    },
    imageUrl: {
      type: String,
      default: 'https://placekitten.com/200',
    },
    favoritGame: String,
  },
  { timestamps: true }
);

PlayerSchema.pre('save', function (next) {
  if (this.isModified('password')) {
    this.password = hasPwd(this.password);
  }
  next();
});

const PlayerModel = mongoose.model('Players', PlayerSchema);

module.exports = PlayerModel;
