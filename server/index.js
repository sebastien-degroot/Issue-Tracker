const express = require('express')
const app = express()
const mysql = require('mysql')

const db = mysql.createPool({
    host: "localhost", 
    user: "root",
    password: "password", 
    database: "issuetracker_db",
});

app.get('/test', (req, res)=> {
    const sqlInsert = "INSERT INTO issuetracker_db.issues (team_name, issue_name, issue_description) VALUES ('team5', 'bug2', 'something is wrong here');"
    db.query(sqlInsert, (err, result) => {
        res.send("hello sebastien!")
    })
});


app.listen(3001, () => {
    console.log("running on port 3001"); 
});