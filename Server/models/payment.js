const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: [true, 'Type is required'],
    },
    status: {
      type: String,
      enum: ['Y', 'N'],
      default: 'Y',
    },
    banks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Banks',
      },
    ],
  },
  { timestamps: true }
);

const PaymentModel = mongoose.model('Payments', PaymentSchema);

module.exports = PaymentModel;
