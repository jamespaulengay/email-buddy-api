const mongoose = require('mongoose');

const emailSchema = mongoose.Schema(
  {
    recipientEmailAddress: {
      type: [String],
      required: [true, 'Please provide a valid email']
    },
    subject: {
      type: String,
      trim: true
    },
    message: {
      type: String,
      trim: true
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Email must belong to a user']
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true
  }
);

emailSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'user',
    select: 'email firstName lastName'
  });
  next();
});

const Email = mongoose.model('Email', emailSchema);

module.exports = Email;
