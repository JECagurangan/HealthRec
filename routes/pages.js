const express = require('express');

const router = express.Router();

router.get('/', (req,res) => {
    res.render('index');
});



router.get('/system', (req,res) => {
    res.render('system');
});

module.exports = router;