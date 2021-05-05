const mysql = require("mysql");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const express = require('express');

const router = express.Router();
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    //if server online replace localhost with serveraddress
    user:process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

exports.login = async(req,res) => {
    try{
        const{username, password} = req.body;
        if(!username || !password){
            return res.status(400).render('index',{
                message: "Email or Password is empty"   
            });
        }

        db.query('SELECT * FROM users WHERE username = ?', [username], async(error,results) => {
            console.log(results);
            if(!results || !(await bcrypt.compare(password, results[0].password))){
                return res.status(401).render('index', {
                    message:"email or password is incorrect!"
                });
            } else{
                //still need to be able to detect which user type is the user that has logged in
                return res.render('system');
            }
        });
    } catch(error){
        console.log(error);
    }
};

exports.register = (req,res) => {
    console.log(req.body);

    const {fname, lname, username, password, passwordconfirm} = req.body;
    const usertype = req.body.UserType;

    db.query('SELECT username FROM users WHERE username = ?', [username], async (error, results) => {
        if(error) {
            console.log(error);
        }

        if(results.length > 0){
            return res.render('index', {
                message: 'Username is already in use'
            });
        } else if(password != passwordconfirm){
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