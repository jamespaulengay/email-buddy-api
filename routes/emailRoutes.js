const express = require('express');
const emailController = require('./../controllers/emailController');
const authController = require('./../controllers/authController');

// { mergeParams: true } = merging parameters on different routes
const router = express.Router({ mergeParams: true });

router
  .route('/')
  .get(emailController.getAllEmails)
  .post(authController.protect, emailController.createEmail);

module.exports = router;
