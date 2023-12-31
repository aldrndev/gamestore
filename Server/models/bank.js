const mongoose = require('mongoose');

const BankSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    bank: {
      type: String,
      required: [true, 'Bank is required'],
    },
    accountNumber: {
      type: String,
      required: [true, 'Account number is required'],
    },
  },
  { timestamps: true }
);

const BankModel = mongoose.model('Banks', BankSchema);

module.exports = BankModel;
