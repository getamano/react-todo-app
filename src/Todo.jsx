import { useState } from "react";
const Todo = () => {
  const [tasks, setTasks] = useState(["Test 1", "Test 2", "Task 3"]);
  const [newTask, setNewTask] = useState("");

  const addTask = (e) => {
    e.preventDefault(); // prevent page refresh
    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  const deleteTask = (i) => {
    const t = tasks.filter((_, index) => i != index);
    setTasks(t);
  };

  const moveUp = (index) => {
    if (index > 0) {
      const updateTasks = [...tasks];
      [updateTasks[index - 1], updateTasks[index]] = [
        updateTasks[index],
        updateTasks[index - 1],
      ];
      setTasks(updateTasks);
    }
  };

  const moveDown = (index) => {
    if (index < tasks.length - 1) {
      const updateTasks = [...tasks];
      [updateTasks[index + 1], updateTasks[index]] = [
        updateTasks[index],
        updateTasks[index + 1],
      ];

      setTasks(updateTasks);
    }
  };

  return (
    <div className="todo-app">
      <h1>ToDo App</h1>
      <ul>
        {tasks.map((task, index) => {
          return (
            <li key={index}>
              <span className="text">{task}</span>

              <button
                type="button"
                className="delete-button"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
              <button
                type="button"
                className="move-button"
                onClick={() => moveUp(index)}
              >
                Up
              </button>
              <button
                type="button"
                className="move-button"
                onClick={() => moveDown(index)}
              >
                Down
              </button>
            </li>
          );
        })}
      </ul>

      <input
        type="text"
        placeholder="Enter your task here..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button type="submit" className="add-button" onClick={addTask}>
        Add
      </button>
    </div>
  );
};

export default Todo;
