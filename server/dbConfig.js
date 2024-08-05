require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
    user: '',
    database: 'native_app',
    password: '',
    host: 'localhost',
    port: 5432,
})

module.exports = pool;