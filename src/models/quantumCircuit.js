const mongoose = require('mongoose');

const QuantumCircuitSchema = new mongoose.Schema({
    name: { type: String, required: true },
    gates: { type: Array, required: true },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('QuantumCircuit', QuantumCircuitSchema);
