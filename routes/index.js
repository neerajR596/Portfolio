const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'My Portfolio' });
});

// router.get('/contact', (req, res) => {
//     res.render('contact', { title: 'Contact Me' });
// });

module.exports = router;
