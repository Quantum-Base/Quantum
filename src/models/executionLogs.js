const mongoose = require('mongoose');

const ExecutionLogSchema = new mongoose.Schema({
    circuitName: { type: String, required: true },
    executedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    executionTime: { type: Date, default: Date.now },
    executionResult: { type: Object, required: true },
    error: { type: String, default: null }
});

module.exports = mongoose.model('ExecutionLog', ExecutionLogSchema);
