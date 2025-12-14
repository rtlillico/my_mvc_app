const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/', mainController.homePage);
// Add other routes here (e.g., for user lists, specific items, etc.)

module.exports = router;
