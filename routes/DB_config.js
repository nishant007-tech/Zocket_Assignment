const mysql = require('mysql');

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

db.connect(err => {
    if (!err) {
        console.log("DB Connection Succeeded");
    } else {
        console.log("DB Connection Failed");
    }
});
// db.query('SELECT * FROM `users`', (err, result) => {
//     console.log(result)
// })

module.exports = db;