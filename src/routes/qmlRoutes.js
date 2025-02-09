const express = require('express');
const { trainQuantumSVM } = require('../controllers/qmlController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/train-svm', authMiddleware.verifyToken, trainQuantumSVM);

module.exports = router;
