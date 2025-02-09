require('dotenv').config();
const express = require('express');
const http = require('http');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const mongoose = require('./src/config/database');
const logger = require('./src/config/logger');
const rateLimiter = require('./src/middleware/rateLimiter');
const WebSocket = require('ws');
const quantumRoutes = require('./src/routes/quantumRoutes');
const qmlRoutes = require('./src/routes/qmlRoutes');
const compilerRoutes = require('./src/routes/compilerRoutes');

if (cluster.isMaster) {
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
} else {
    const app = express();
    const server = http.createServer(app);
    const wss = new WebSocket.Server({ server });

    app.use(express.json());
    app.use(rateLimiter);
    
    app.use('/api/quantum', quantumRoutes);
    app.use('/api/qml', qmlRoutes);
    app.use('/api/compiler', compilerRoutes);

    server.listen(process.env.PORT || 5000, () => {
        logger.info(`Quantum backend running on port ${process.env.PORT || 5000}`);
    });
}
