import { useEffect, useState } from 'react';
import './App.css';
import TodoList from './component/TodoList';

function App() {
  const localTasks = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : []
  const [tasks, setTasks] = useState(localTasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  /**
   * Add a new task to the list of tasks
   * @param {string} taskValue: the value of the new task
   * @param {boolean} done: is the task is done or not
   */
  const addTask = (taskValue, done) => {
    setTasks(prevTasks => [...prevTasks, { id: Date.now(), value: taskValue, done: done }]);
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
  const [inputValue, setInputValue] = useState('')

  const handleEnterKey = e => {
    if (e.key === 'Enter') {
      if (inputValue === 'clear') {
        setTasks([]);
      } else {
        addTask(inputValue, false);
      }
      setInputValue('')
    }
  };

  const handleClick = e => {
    addTask(inputValue, false)
    setInputValue('')
  }

  return <div className="row">
    <div className="col-12">
      <input
        id='userInput'
        type="text"
        onKeyPress={handleEnterKey}
        placeholder="Enter task..."
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <button id="enter" onClick={handleClick}>+</button>
    </div>
  </div>
}

export default App;
