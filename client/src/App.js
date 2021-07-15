import React from 'react';
import './App.css';
import Axios from 'axios'; 
import { useAuth0 } from "@auth0/auth0-react"; 
import LoginButton from './components/login-button';
import LogoutButton from './components/logout-button';
import Profile from './components/profile';



const AuthNav = () => {
  const {isAuthenticated} = useAuth0(); 

  return (
    <div >
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      {isAuthenticated ? <Profile />: <p></p>}
    </div>
  );
}; 


class App extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      issueName: "", 
      issueDec: "", 
      projectId: "",
      teamId: "", 
      userId: "",  
      issueList: []
    }; 
  }
  componentDidMount() {
    this.getData();
  }
  componentDidUpdate() {
    this.getData();
  }

  submitReview = (event) => {
    Axios.post("http://localhost:3001/api/insert", 
    {issueName: this.state.issueName, issueDec: this.state.issueDec, projectId: this.state.projectId, teamId: this.state.teamId, userId: this.state.userId}).then(() => {
      alert('successful insert');
    })
  };

  getData() {
    Axios.get("http://localhost:3001/api/get").then((response)=> {
      //setIssueList(response);
      this.setState({issueList: response.data});
    })
  }


  render () {

    return (
      <div className="App">
      <h1> Issue Tracker </h1>
      <AuthNav />
      <div>

        <label>Project Name</label>
          <input 
            type="text" 
            name="projectName"
            onChange = {(e) => {
              this.setState({ projectName: e.target.value}); 
            }}/>

        <label>Issue Name</label>
          <input 
            type="text"
            name="issueName"
            onChange = {(e) => {
              this.setState({ issueName: e.target.value}); 
            }}
          />
        
        <label>Description</label>
          <input 
            type="text" 
            name="description"
            onChange = {(e) => {
              this.setState({ description: e.target.value}); 
            }}/>

        <button onClick={this.submitReview}>Submit</button>

        {console.log("In the render " + this.state.issueList)}

        {
          (this.state.issueList) ? this.state.issueList.map((val)=> {
            return <h1></h1>
          }) : <h1>no list</h1>
        }

      </div>

    </div>
    )

  }

}

export default App;
