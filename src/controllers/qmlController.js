const { QuantumSVM } = require('quantum-ml');

exports.trainQuantumSVM = async (req, res) => {
    try {
        const { trainingData } = req.body;

        const qSVM = new QuantumSVM();
        qSVM.train(trainingData);

        const model = qSVM.getModel();
        res.status(200).json({ success: true, model });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Training failed', error });
    }
};
