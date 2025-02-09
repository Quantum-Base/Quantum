const Kyber = require('@pqcrypto/kyber');

exports.quantumSafeEncrypt = async (req, res) => {
    try {
        const { data } = req.body;
        const { publicKey, privateKey } = Kyber.keyPair();
        const encrypted = Kyber.encrypt(data, publicKey);
        res.status(200).json({ success: true, encrypted, privateKey });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Encryption failed', error });
    }
};
