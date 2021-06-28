import React, {useEffect, useState} from 'react';
import './App.css';
import Axios from 'axios'; 

function App() {

  const [projectName, setProjectName] = useState(""); 
  const [issueName, setIssueName] = useState(""); 
  const [description, setDescription] = useState(""); 

  const [issuesList, setIssueList] = useState(null);


  useEffect(() => {
    getData();
  }, [])

  const submitReview = () => {
    Axios.post("http://localhost:3001/api/insert", 
    {projectName: projectName, issueName: issueName, description: description}).then(() => {
      alert('successful insert');
    })
    getData(); 
  };

  const getData = () => {
    Axios.get("http://localhost:3001/api/get").then((response)=> {
      //setIssueList(response);
      setIssueList(response.data);
    })
  }


  return (


    <div className="App">
      <h1> Issue Tracker </h1>

      {console.log(issuesList)}

      <div>

        <label>Project Name</label>
          <input 
            type="text" 
            name="projectName"
            onChange = {(e) => {
              setProjectName(e.target.value); 
            }}/>

        <label>Issue Name</label>
          <input 
            type="text"
            name="issueName"
            onChange = {(e) => {
              setIssueName(e.target.value); 
            }}
          />
        
        <label>Description</label>
          <input 
            type="text" 
            name="description"
            onChange = {(e) => {
              setDescription(e.target.value); 
            }}/>

        <button onClick={submitReview}>Submit</button>

        {
          (issuesList !== null) ?
          issuesList.map((val)=> {
            return <h1>Project: {val.team_name}, Issue: {val.issue_name}, Description: {val.issue_description}</h1>
          }) : <h1>no list</h1>
        }

      </div>

    </div>
  );
}

export default App;
