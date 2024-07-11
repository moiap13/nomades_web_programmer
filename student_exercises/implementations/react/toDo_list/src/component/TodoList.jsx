function TodoList({tasks, setTasks}) {
  const toggleTaskDone = id => {
    // TODO: toggle done value for a given task
    // the task to be changed is the one with the id provided (where id is new Date)
    // 1. find the task with the same id in the list tasks provided
    // 2. Change `done` value
    // 3. update tasks lists
  };

  const deleteTask = id => {
    // TODO: delete the task where task.id === id
    // the task to be deleted is the one with the id provided (where id is new Date)
    // 1. find the task with the same id in the list tasks provided
    // 2. remove the task from the list
    // 3. update tasks lists 
  };

  return <>
      <div className="row">
        <div className="listItems col-12">
          <ul className="col-12 offset-0 col-sm-8 offset-sm-2">
            {
              // Display the tasks in li
              // Hint: think about map() ;P
            }
          </ul>
        </div>
      </div>
    </>;
}

export default TodoList;
