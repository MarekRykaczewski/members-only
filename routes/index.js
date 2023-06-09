const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/userController');
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { user: req.user });
});

router.get('/sign-up-form', user_controller.signup_get)

router.post('/sign-up-form', user_controller.signup_post)

router.post('/login', passport.authenticate("local", {
  successRedirect: '/',
  failureRedirect: '/'
}))

module.exports = router;
