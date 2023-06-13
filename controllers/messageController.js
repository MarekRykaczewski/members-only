
const Message = require('../models/message')
const asyncHandler = require('express-async-handler')

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

exports.message_delete_get = asyncHandler(async (req, res, next) => {

    // const [message] = await Promise.all([Message.findById(req.params.id).exec()])
    const message = await Message.findById(req.params.id).exec()


    res.render("message-delete", { message: message })
  });

exports.message_delete_post = async (req, res, next) => {
    await Message.findByIdAndDelete(req.body.messageid)
    res.redirect("/")
};