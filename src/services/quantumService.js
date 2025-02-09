const { QuantumCircuit } = require('quantum-js');

exports.executeQuantumCircuit = async (circuitData) => {
    try {
        const circuit = new QuantumCircuit();

        circuitData.gates.forEach(gate => circuit.addGate(gate));

        if (circuitData.optimize) {
            circuit.optimize();
        }

        return circuit.run({ noiseLevel: circuitData.noiseLevel });
    } catch (error) {
        throw new Error(`Quantum execution failed: ${error.message}`);
    }
};
