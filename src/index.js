const express = require('express');
const sqlite3 = require('sqlite3');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());

// VULNERABILIDADE: Hardcoded secrets
const API_SECRET = 'sk-1234567890abcdef';
const DB_PASSWORD = 'admin123';
const JWT_SECRET = 'my-super-secret-jwt-key';

// VULNERABILIDADE: SQL Injection
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    const db = new sqlite3.Database('./database.db');
    
    // VULNERABILIDADE: Concatenção direta de string
    const query = `SELECT * FROM users WHERE id = ${userId}`;
    
    db.get(query, (err, row) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(row);
        }
    });
});

// VULNERABILIDADE: Weak password hashing
app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    
    // VULNERABILIDADE: Salt fixo e poucas iterações
    const saltRounds = 1;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    
    res.json({ message: 'User registered', hash: hashedPassword });
});

// VULNERABILIDADE: Exposed environment variables
app.get('/config', (req, res) => {
    res.json({
        nodeEnv: process.env.NODE_ENV,
        port: process.env.PORT,
        database: process.env.DATABASE_URL
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
