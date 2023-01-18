import {useState} from "react";
import "./styles.css";

export default function App() {
  `entry holds the initial input value;
  setEntry update the value of entry once in the onChange in input
  and again reverts to empty string in onClick.
  tasks will hold the entered task obtained from entry value,
  setTasks will update the value of to the current entry tasks.
  `
  const [entry, setEntry] = useState("");
  const [tasks, setTasks] = useState([]);
  const handleAdd =(e) =>{
    //tasks this time is an array, so setTasks
    //will update an array by adding each tasks entered
    setTasks((oldEntry) =>[...oldEntry,entry]);
    setEntry("");
    e.preventDefault();
  }
  return (
    <div className="App">
      <h2>TODO Lists</h2>
      <label htmlFor ="tasks">New Tasks: </label>
      <input id ="tasks" 
              placeholder="Enter new Task"
              value={entry}
              onChange={(e) =>setEntry(e.target.value)}/>
      <button onClick = {(e) =>{handleAdd(e)}}>Add </button>
      <hr/>
      <div>
        {tasks.map((task,id) =>(
          <div key={id}>
            <strong>{task}</strong>
            </div>
        ))}
        </div>
    </div>
  );
}
