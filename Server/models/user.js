const mongoose = require('mongoose');
const { hasPwd } = require('../helpers/bcrypt');

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      validate: {
        validator: async (value) => {
          const checkEmail = await mongoose
            .model('Users')
            .findOne({ email: value });
          return !checkEmail;
        },
        message: 'Email already registered',
      },
    },

    name: {
      type: String,
      required: [true, 'Name is required'],
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
    role: {
      type: String,
      enum: ['admin', 'user'],
      default: 'admin',
    },
    status: {
      type: String,
      enum: ['Y', 'N'],
      default: 'Y',
    },
    phoneNumber: {
      type: String,
      required: [true, 'Phone number is required'],
    },
  },
  { timestamps: true }
);

UserSchema.pre('save', function (next) {
  if (this.isModified('password')) {
    this.password = hasPwd(this.password);
  }
  next();
});

const UserModel = mongoose.model('Users', UserSchema);

module.exports = UserModel;
