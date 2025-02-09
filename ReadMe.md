# 🔱 Quantum Backend API

## 🚀 Overview  
Quantum Backend API is a **powerful, scalable, and quantum-ready backend** designed to execute quantum circuits, compile quantum code, train Quantum ML models, and provide **post-quantum secure cryptography**. This system is structured to be **modular, secure, and future-proof**, ensuring that it can handle both **simulated and real quantum computations**.

## ✨ Features  
### **Fundamental Module** – Quantum Learning & Simulation  
- ✅ **Quantum Circuit Execution** (Supports quantum gates, multi-qubit operations, and quantum noise simulation)  
- ✅ **Bloch Sphere & Probability Amplitude Visualization**  
- ✅ **Real-time Circuit Optimization**  

### **Core Module** – Quantum Computing Engine  
- ✅ **QASM Compilation & Optimization**  
- ✅ **Quantum Error Correction**  
- ✅ **Classical-Quantum Hybrid Computing**  

### **Interpret Module** – Quantum Circuit Analysis  
- ✅ **Qubit State Measurement & Visualization**  
- ✅ **Quantum Interference & Entanglement Detection**  
- ✅ **State Vector Decomposition & Probabilistic Analysis**  

### **Cryptograph Module** – Post-Quantum Secure Encryption  
- ✅ **Quantum Key Distribution (QKD)**  
- ✅ **Kyber-based Post-Quantum Cryptography**  
- ✅ **Quantum-Safe Secure Communication**  

### **Quantum ML (QML) Module**  
- ✅ **Quantum Support Vector Machines (QSVM) Training**  
- ✅ **Hybrid Quantum-Classical Machine Learning Models**  

### **Security & Optimization**  
- ✅ **Role-Based Access Control (RBAC) & JWT Authentication**  
- ✅ **Rate Limiting & DDoS Protection**  
- ✅ **Real-time Execution Logs & Error Handling**  

---

## 🏗️ Project Structure  
```bash
📂 quantum-backend
 ├── 📂 src
 │   ├── 📂 controllers  # Business logic for API
 │   │   ├── compilerController.js
 │   │   ├── qmlController.js
 │   │   ├── quantumController.js
 │   ├── 📂 middleware   # Authentication & Security
 │   │   ├── authMiddleware.js
 │   │   ├── rateLimiter.js
 │   ├── 📂 models       # MongoDB Schemas
 │   │   ├── executionLogs.js
 │   ├── 📂 routes       # API Endpoints
 │   │   ├── compilerRoutes.js
 │   │   ├── qmlRoutes.js
 │   ├── 📂 services     # Core Quantum Logic
 │   │   ├── compilerService.js
 │   │   ├── qmlService.js
 │   │   ├── quantumService.js
 │   │   ├── cryptographService.js
 │   ├── 📂 utils        # Error Handling & Responses
 │   │   ├── errorHandler.js
 │   │   ├── responseHandler.js
 │   ├── app.js         # Express Server Configuration
 │   ├── config.js      # Environment Variables
 ├── .gitignore
 ├── package.json       # Dependencies
 ├── README.md          # Documentation
 ├── server.js          # Entry Point
```

## 🔧 Installation 
1️⃣ Clone the Repository
```bash
git clone https://github.com/Quantum-Base/quantum-backend.git
cd quantum-backend
```

2️⃣ Install Dependencies
```bash
npm install
```

3️⃣ Set Up Environment Variables
Create a ```.env``` file and configure:
```bash
PORT=5000
MONGO_URI=mongodb+srv://your-db-url
JWT_SECRET=your_secret_key
```

4️⃣ Start the Server
```bash
npm start
```

The backend will be running at ```http://localhost:5000/``` 🚀


## 🛠️ Built With
- Node.js – Backend framework
- Express.js – REST API framework
- MongoDB – NoSQL database for logs
- Quantum.js / Qiskit.js – Quantum computing libraries
- Kyber (PQC) – Post-quantum cryptography
- JWT & RBAC – Secure authentication


## 🛡️ Security & Best Practices
- ✅ JWT Authentication & Role-Based Access Control
- ✅ Rate Limiting & API Throttling
- ✅ Error Handling & Logging with MongoDB
- ✅ Secure Environment Variables with .env
- ✅ Automatic execution log storage
