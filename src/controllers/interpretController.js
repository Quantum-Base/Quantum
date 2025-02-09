exports.inspectQuantumState = async (req, res) => {
    try {
        const { circuit } = req.body;
        const stateVector = circuit.getStateVector();
        const entanglement = circuit.getEntanglement();
        res.status(200).json({ success: true, stateVector, entanglement });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Analysis failed', error });
    }
};
