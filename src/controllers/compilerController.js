exports.compileQASM = async (req, res) => {
    try {
        const { circuit } = req.body;

        const qasm = compileCircuitToQASM(circuit);
        res.status(200).json({ success: true, qasm });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Compilation failed', error });
    }
};
