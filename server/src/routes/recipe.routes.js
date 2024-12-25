// server/src/routes/recipe.routes.js
const express = require('express');
const router = express.Router();
const { generate } = require('../controllers/recipes');

router.post('/generate', generate);

module.exports = router;