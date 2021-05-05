const express = require("express")
const path = require('path');
const mysql = require("mysql");
const dotenv = require('dotenv');
dotenv.config({path:'./.env'});
const app = express();

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    //if server online replace localhost with serveraddress
    user:process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});
const publicDirectory = path.join(__dirname, './public')
app.use(express.static(publicDirectory));

//this makes sure you can grab data from ANY forms
app.use(express.urlencoded({extended:false}))
//making sure that data grabbed from form is a JSON
app.use(express.json());
app.set('view engine', 'hbs');

app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));

db.connect((error) =>{
    if(error){
        console.log(error)
    }
    else{
        console.log("MYSQL Connected...")
    }
});

//Define Routes (check routes folder)

  app.listen(5000, () => {
    console.log("Server started");
  })