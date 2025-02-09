const express = require('express');
const { compileQASM } = require('../controllers/compilerController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/compile-qasm', authMiddleware.verifyToken, compileQASM);

module.exports = router;
