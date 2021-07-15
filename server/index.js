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

    const issueName = req.body.issueName
    const issueDec = req.body.issueDec
    const projId = req.body.projId
    const teamId = req.body.teamId
    const userId = req.body.userId
    
    const sqlInsert = "SELECT * FROM issues";
    db.query(sqlInsert, (err, result) => {
        res.send(result)
    });
});

app.get("/api/get_login", (req, res) => {
    const email = req.body.email; 
    const team_id = req.body.email; 

    const sqlInsert = "SELECT * FROM users"; 
    db.query(sqlInsert, (err, result) => {
        res.send(result)
    });
});

app.post("/api/insert_login", (req, res) => {
    const email = req.body.email; 
    const team_id = req.body.email; 


})


app.post("/api/insert", (req, res)=> {

    const issueName = req.body.issueName
    const issueDec = req.body.issueDec
    const projId = req.body.projId
    const teamId = req.body.teamId
    const userId = req.body.userId
    
    const sqlInsert = "INSERT INTO issuetracker_db.issue (issue_name, issue_des, project_id, team_id, user_id) VALUES (?, ?, ?, ?, ?);";
    db.query(sqlInsert, [issueName, issueDec, projId, teamId, userId], (err, result) => {
        console.log("In server:index.js ")
        console.log(err); 
    });
});

app.listen(3001, () => {
    console.log("running on port 3001"); 
});