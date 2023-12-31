const mongoose = require('mongoose');

const AmountSchema = new mongoose.Schema(
  {
    coinQuantity: {
      type: Number,
      default: 0,
    },
    coinName: {
      type: String,
      required: [true, 'Coin name is required'],
    },
    price: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const AmountModel = mongoose.model('Amounts', AmountSchema);

module.exports = AmountModel;
