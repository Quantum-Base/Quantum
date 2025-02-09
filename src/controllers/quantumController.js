const QuantumCircuit = require('../models/quantumCircuit');
const { QuantumCircuit: QCircuit } = require('quantum-js');

exports.executeCircuit = async (req, res) => {
    try {
        const { name, gates, noiseLevel } = req.body;
        
        const circuit = new QCircuit();
        gates.forEach(gate => circuit.addGate(gate));

        // Optimize circuit
        circuit.optimize();

        // Run simulation with noise model
        const result = circuit.run({ noiseLevel });

        // Save to database
        const savedCircuit = new QuantumCircuit({ name, gates });
        await savedCircuit.save();

        res.status(200).json({ success: true, result });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Execution failed', error });
    }
};
