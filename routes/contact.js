const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

router.post('/', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const newMessage = new Message({ name, email, message });
        await newMessage.save();
        res.redirect('/contact?success=true');
    } catch (err) {
        res.redirect('/contact?success=false');
    }
});

module.exports = router;
