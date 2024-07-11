import { useState } from 'react';
import './App.css';
import TodoList from './component/TodoList';

function App() {
  const [tasks, setTasks] = useState([]);

  // Each change on the task array should update it in localstorage !

  /**
   * Add a new task to the list of tasks
   * @param {string} taskValue: the value of the new task
   * @param {boolean} done: is the task is done or not
   */
  const addTask = (taskValue, done) => {
    const id = Date.now()
    // TODO: create the addTask function
    // The addTask function should add the parameters as a new task in the tasks array
    // You can use the id variable as id for the task
  };

  return (
    <div className="App">
      <FormGroup addTask={addTask} setTasks={setTasks} />
      <TodoList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

/**
 * Form group is the interraction part. it's composed by:
 *  - A React controlled input type text
 *  - A button where the text is "+"
 * @param {function} addTask: function to add a new task 
 * @returns 
 */
function FormGroup({addTask, setTasks}) {
  // The button should add the task using the `addTask` props (the addTask prop is the function addTask defined in App()).
  // The new task should have the text of the controlled input (i.e use the `useState` hook to get the value of the input)
  // Here you are free to use the controlled approach for the input or the uncontrolled one :)

  const handleEnterKey = e => {
    if (e.key === 'Enter') {
      // The inputValue is not set for now
      // Depending on your logic inputValue can be set differently
      if (inputValue === 'clear') {
        setTasks([]);
      } else {
        addTask(inputValue, false);
      }
      // TODO: reset the value of the input (inputValue)
    }
  };

  return <div className="row">
    <div className="col-12">
      <input
        id='userInput'
        type="text"
        onKeyUp={handleEnterKey}
        placeholder="Enter task..."
      />
      {/*
        TODO: add the button; 
        when clicking on the button we should add the task using the add task props 
      */}
    </div>
  </div>
}

export default App;
