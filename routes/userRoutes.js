const express = require('express');
const userController = require('./../controllers/userController');
const authController = require('./../controllers/authController');
const emailRouter = require('./../routes/emailRoutes');

const router = express.Router();

// GET /users/6wsdujk1231/emails

// Use the emailRouter when you encounter this kind of route.
router.use('/:userId/emails', emailRouter);

router.post('/signup', authController.signup);
router.post('/login', authController.login);

router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);

router.patch(
  '/updateMyPassword',
  authController.protect,
  authController.updatePassword
);

router.patch('/updateMe', authController.protect, userController.updateMe);
router.delete('/deleteMe', authController.protect, userController.deleteMe);

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
