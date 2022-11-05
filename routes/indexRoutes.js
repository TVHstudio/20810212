const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');
const foodController = require('../controllers/foodController');
const menuController = require('../controllers/menuController');

router.get('/', (req, res) => {   
        res.render('index');  
});


module.exports = router;