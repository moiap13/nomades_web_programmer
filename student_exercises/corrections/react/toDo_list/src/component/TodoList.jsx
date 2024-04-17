function TodoList({tasks, setTasks}) {
  const toggleTaskDone = id => {
    // TODO: toggle done value for a given task
    // the task to be changed is the one with the id provided (where id is new Date)
    // 1. find the task with the same id in the list tasks provided
    // 2. Change `done` value
    // 3. update tasks lists

    // const i = tasks.findIndex(t => t.id === id)
    // tasks[i].done = !tasks[i].done
    // setTasks(tasks)

    setTasks(prevTasks => {
      return prevTasks.map(t => {
        if(t.id === id){
          return {...t, done: !t.done}
        }
        return t
      })
    })
  };


  const deleteTask = id => {
    // TODO: delete the task where task.id === id
    // the task to be deleted is the one with the id provided (where id is new Date)
    // 1. find the task with the same id in the list tasks provided
    // 2. remove the task from the list
    // 3. update tasks lists

    // const updatedTask = tasks.filter(t => t.id !== id)
    // setTasks(updatedTask)

    
    setTasks(tasks.filter(t => t.id !== id))
  };

  console.log(tasks)

  return <>
      <div className="row">
        <div className="listItems col-12">
          <ul className="col-12 offset-0 col-sm-8 offset-sm-2">
            {
              tasks.map(task => (
                <li key={task.id} className={task.done ? 'done' : ''} onClick={() => toggleTaskDone(task.id)}>
                  {task.value}
                  <button onClick={() => deleteTask(task.id)}>X</button>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </>;
}

export default TodoList;
