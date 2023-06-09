const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/userController');
const message_controller = require('../controllers/messageController')
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

router.get("/logout", (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err)
    }
    res.redirect("/")
  })
})

router.get("/message-form", message_controller.message_get)

router.post("/message-form", message_controller.message_post)

module.exports = router;
