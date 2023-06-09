
const Message = require('../models/message')

exports.message_get = (req, res, next) => {
    res.render("message-form");
  };

exports.message_post = async (req, res, next) => {
    try {
        const message = new Message({
            owner: req.user._id,
            title: req.body.title,
            textContent: req.body.message,
            createdAt: Date.now()
        })

        const result = await message.save()
        res.redirect('/')
    } catch (err) {
        return next(err)
    }
}
