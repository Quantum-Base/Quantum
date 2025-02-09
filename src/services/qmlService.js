const { QuantumSVM } = require('quantum-ml');

exports.trainQuantumSVM = async (trainingData) => {
    try {
        const qSVM = new QuantumSVM();
        qSVM.train(trainingData);
        return qSVM.getModel();
    } catch (error) {
        throw new Error(`Quantum ML Training Failed: ${error.message}`);
    }
};
