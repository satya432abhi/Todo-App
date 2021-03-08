const express = require('express');

const router = express.Router();

console.log('router loaded');

const homeController= require('../controllers/homeController');
router.get('/',homeController.home);


module.exports = router;