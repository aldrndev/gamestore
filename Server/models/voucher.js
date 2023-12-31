const mongoose = require('mongoose');

const VoucherSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    status: {
      type: String,
      enum: ['Y', 'N'],
      default: 'Y',
    },
    thumbnail: String,
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Categories',
    },
    nominals: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Amounts',
      },
    ],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users',
    },
  },
  { timestamps: true }
);

const VoucherModel = mongoose.model('Vouchers', VoucherSchema);

module.exports = VoucherModel;
