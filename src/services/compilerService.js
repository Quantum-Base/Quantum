exports.compileCircuitToQASM = (circuit) => {
    try {
        let qasm = 'OPENQASM 2.0;\ninclude "qelib1.inc";\nqreg q[4];\n';

        circuit.gates.forEach(gate => {
            qasm += `${gate.name} q[${gate.target}];\n`;
        });

        return qasm;
    } catch (error) {
        throw new Error(`QASM Compilation Failed: ${error.message}`);
    }
};
