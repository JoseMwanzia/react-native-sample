const express = require('express')
const app = express()
const { body, validationResult } = require('express-validator')
const pool = require('./dbConfig')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const port = 3000;
const cors = require('cors')

app.use(express.json())

const corsOptions = {
    origin: 'http://localhost:8081',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

app.post('/register', [
    [
        body("username").notEmpty(),
        body("email").isEmail(),
        body("password").notEmpty(),
    ],
], async (req, res) => {
    const { username, password, email } = req.body;
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        const errorMessages = errors.array().map(error => ({
            path: error.path,
            field: error.param,
            message: error.msg,
          }));
           return res.status(400).json({ errors: errorMessages });
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    try {
        await pool.query('INSERT INTO users (username, password, email) VALUES ($1, $2, $3)',
            [username, hashedPassword, email]
        );
        res.status(201).json({ message: "Registration is successfull!" })
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error!' })
    }

});

app.listen(port, (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log(`Server is running on port ${port}`);
    }
})
