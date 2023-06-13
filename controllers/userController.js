const User = require('../models/user')
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const passport = require("passport");
require('dotenv').config();

exports.signup_get = (req, res, next) => {
    res.render("sign-up-form");
  };

exports.signup_post = (req, res, next) => {
  try {
    const password = req.body.password

    bcrypt.hash(password, 10, async (err, hashedPassword) => {
      // if err, do something
      if (err) {
          return next(err)
      }

      const user = new User({
          username: req.body.username,
          email: req.body.email,
          password: hashedPassword,
          membershipType: req.body.passcode === process.env.ADMIN_PASSCODE ? "admin" : "regular"
      });

      const result = await user.save();
      res.redirect("/");
    })
  } catch(err) {
    return next(err);
  };
};
