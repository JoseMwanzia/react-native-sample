require('dotenv').config();
const { Pool } = require('pg');

// const requiredVarables = ['DB_HOST', 'DB_USER', 'DB_NAME', 'DB_PASSWORD', 'DB_PORT']

// for (const variable of requiredVarables) {
//     if (!process.env[variable]) {
//         console.log(`${variable} is missing. Application cannot start`);
//         process.exit(1);
//     }
// }

if (process.env.DB_HOST) {
    console.log(`Configuration is okay!`)
} else {
    console.log(`Configuration is NOT okay!`)
}


const pool = new Pool({
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
})

module.exports = pool;