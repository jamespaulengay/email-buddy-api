const Email = require('./../models/emailModel');
const catchAsync = require('./../utils/catchAsync');

exports.getAllEmails = catchAsync(async (req, res, next) => {
  let filter = {};
  if (req.params.userId) filter = { user: req.params.userId };

  const emails = await Email.find(filter);

  res.status(200).json({
    status: 'success',
    results: emails.length,
    data: {
      emails
    }
  });
});

exports.createEmail = catchAsync(async (req, res, next) => {
  // Allow nested  routes
  if (!req.body.user) req.body.user = req.user._id || req.params.userId;

  const newEmail = await Email.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      email: newEmail
    }
  });
});
