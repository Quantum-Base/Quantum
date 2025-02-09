const { Kyber } = require('post-quantum-crypto');

exports.generateQuantumKey = () => {
    return Kyber.generateKeyPair();
};

exports.encryptData = (data, publicKey) => {
    return Kyber.encrypt(data, publicKey);
};

exports.decryptData = (encryptedData, privateKey) => {
    return Kyber.decrypt(encryptedData, privateKey);
};
