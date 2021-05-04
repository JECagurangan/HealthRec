const mysql = require("mysql");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    //if server online replace localhost with serveraddress
    user:process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

exports.register = (req,res) => {
    console.log(req.body);

    const {fname, lname, username, password, passwordconfirm} = req.body;
    const usertype = req.body.UserType;

    db.query('SELECT username FROM users WHERE username = ?', [username], async (error, results) => {
        if(error) {
            console.log(error);
        }

        if(results.length > 0){
            //not working yet
            return res.render('index', {
                message: 'Username is already in use'
            });
        } else if(password != passwordconfirm){
             //not working yet
            return res.render('index', {
                message: 'Password do not match'
            });
        }

        let hashedPassword = await bcrypt.hash(password, 8);
        console.log(hashedPassword);

        db.query('INSERT INTO users SET ?', {FirstName: fname, LastName: lname, username: username, password: hashedPassword, UserType: usertype}, (error, results) => {
            if(error){
                console.log(error);
            }
            else{
                console.log(results);
                //not working yet
                return res.render('index', {
                    message: 'User Registered'
                });
            }
        });
    });
};