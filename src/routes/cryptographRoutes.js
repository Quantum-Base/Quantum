const express = require('express');
const { postQuantumEncrypt } = require('../controllers/cryptographController');

const router = express.Router();
router.post('/encrypt', postQuantumEncrypt);

module.exports = router;
