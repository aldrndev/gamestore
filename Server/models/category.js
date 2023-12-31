const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
  },
  { timestamps: true }
);

const CategoryModel = mongoose.model('Categories', CategorySchema);

module.exports = CategoryModel;
