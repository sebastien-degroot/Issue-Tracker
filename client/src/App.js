import './App.css';

function App() {
  return (
    <div className="App">
      <h1> Issue Tracker </h1>

      <div>
        <label>Issue Name</label>
        <input type="text" name="issueName"/>
        
        <label>Description</label>
        <input type="text" name="description"/>

        <button>Submit</button>
      </div>

    </div>
  );
}

export default App;
