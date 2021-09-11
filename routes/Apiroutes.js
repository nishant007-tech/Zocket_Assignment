const router = require('express').Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require("./DB_config");
const util = require('util');
const nodemailer = require('nodemailer');

const auth = require("./middleware/auth")
const query = util.promisify(db.query).bind(db);

router.post('/register', async (req, res) => {
    //First check Whether email is already exist or not
    console.log(req.body)
    let row = await query("SELECT `email` FROM `users` WHERE `email`=?", [req.body.email])
    if (row.length > 0) {
        return res.status(400).json({ message: "Usersname/Email Already Exist" });
    }
    // bcrypt the password basically into hash format for security reasons
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    let resData = await query('INSERT INTO `users`(`name`,`email`,`password`) VALUES(?,?,?)', [
        req.body.name,
        req.body.email,
        hashPassword
    ])
    try {
        if (resData.affectedRows === 1) {
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'nishanti254710@gmail.com',
                    pass: process.env.MAIL_PASS
                }
            });
            var mailOptions = {
                from: 'nishanti254710@gmail.com',
                to: req.body.email,
                subject: 'Successfully Registered',
                text: 'Thanks For Registering Yourself in Zocket!'
            };
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
            return res.status(201).json({
                data: resData,
                message: "The user has been successfully registered.",
            });
        }
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/login', async (req, res) => {
    let row = await query("SELECT * FROM `users` WHERE `email`=?", [req.body.email])
    if (row.length === 0) {
        return res.status(422).json({
            message: "Invalid email address",
        });
    }
    const passMatch = await bcrypt.compare(req.body.password, row[0].password);
    if (!passMatch) {
        return res.status(422).json({
            message: "Incorrect password",
        });
    }
    const token = jwt.sign({ id: row[0].id }, "NishantRana");
    res.cookie("jwt", token, {
        expires: new Date(Date.now() + 47336400000),
        httpOnly: true,
        // secure: true
    })
    // // httpOnly flag to prevent attackers from accessing the cookie from the client-side.
    // //2000000 => 33 minutes 86400000 => 1day 47336400000=> 18months
    res.json({ token: token, user: row, message: " Login Successfully!" });
});

router.get('/logout', auth, async (req, res) => {
    try {
        res.clearCookie('jwt');
        res.status(200).send('Logout Successfully');
    } catch (error) {
        res.status(500).send(error);
    }
})

router.get('/authuser', auth, async (req, res) => {
    try {
        let user = await query("SELECT * FROM `users` WHERE `id`=?", [req.user])
        res.status(200).json({
            user: user
        });
    } catch (err) {
        res.status(400).json(err);
    }

})


module.exports = router;