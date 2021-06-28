const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

const db = mysql.createPool({
    host: "localhost", 
    user: "root",
    password: "password", 
    database: "issuetracker_db",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({exteded: true}));

app.get("/api/get", (req, res)=> {

    const projectName = req.body.projectName 
    const issueName = req.body.issueName 
    const description = req.body.description
    
    const sqlInsert = "SELECT * FROM issues";
    db.query(sqlInsert, (err, result) => {
        res.send(result)
    });
});


app.post("/api/insert", (req, res)=> {

    const projectName = req.body.projectName 
    const issueName = req.body.issueName 
    const description = req.body.description
    
    const sqlInsert = "INSERT INTO issuetracker_db.issues (team_name, issue_name, issue_description) VALUES (?, ?, ?);";
    db.query(sqlInsert, [projectName, issueName, description], (err, result) => {
        console.log(err); 
    });
});

app.listen(3001, () => {
    console.log("running on port 3001"); 
});