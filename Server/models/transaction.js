const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema(
  {
    historyVoucherTopup: {
      gameName: {
        type: String,
        required: [true, 'Game name is required'],
      },
      category: {
        type: String,
        required: [true, 'Category is required'],
      },
      thumbnail: String,
      coinName: {
        type: String,
        required: [true, 'Coin name is required'],
      },
      coinQuantity: {
        type: String,
        required: [true, 'Coin quantity is required'],
      },
      price: Number,
    },

    historyPayment: {
      name: {
        type: String,
        required: [true, 'Name is required'],
      },
      type: {
        type: String,
        required: [true, 'Type payment is required'],
      },
      bankName: {
        type: String,
        required: [true, 'Bank name is required'],
      },
      accountNumber: {
        type: String,
        required: [true, 'Account number is required'],
      },
    },

    name: {
      type: String,
      required: [true, 'Name is required'],
    },

    accountUser: {
      type: String,
      required: [true, 'Account name is required'],
    },

    tax: {
      type: Number,
      default: 0,
    },

    value: {
      type: Number,
      default: 0,
    },

    status: {
      type: String,
      enum: ['Pending', 'Failed', 'Success'],
      default: 'Pending',
    },

    player: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Players',
    },

    historyUser: {
      name: {
        type: String,
        required: [true, 'Name is required'],
      },
      phoneNumber: {
        type: Number,
        required: [true, 'Phone number is required'],
        minlength: [9, 'Phone number min 11 length'],
      },
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Categories',
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Players',
    },
  },
  { timestamps: true }
);

const TransactionModel = mongoose.model('Transactions', TransactionSchema);

module.exports = TransactionModel;
