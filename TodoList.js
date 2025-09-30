import React, { useState } from "react";
import "./TodoList.css"; // Importing CSS

export default function TodoList() {
  const initialTasks = [
    { name: "Login", time: "09:00 AM", description: "Log in to your account", completed: false },
    { name: "Discuss with Team Members", time: "09:30 AM", description: "Team stand-up and task discussion", completed: false },
    { name: "Do Codings", time: "10:00 AM", description: "Work on coding modules", completed: false },
    { name: "Submit Finished Modules", time: "01:00 PM", description: "Submit completed modules", completed: false },
    { name: "Attend HR Meeting", time: "03:00 PM", description: "Attend HR discussion", completed: false },
    { name: "Logout", time: "05:00 PM", description: "Logout from your account", completed: false },
  ];

  const [tasks, setTasks] = useState(initialTasks);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDescription = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const toggleCompleted = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-container">
      <h2>My Tasks</h2>

      {tasks.length === 0 ? (
        <p>No tasks for today 🎉</p>
      ) : (
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className={task.completed ? "completed" : ""}>
              <div className="task-header">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleCompleted(index)}
                />
                <span className="task-name" onClick={() => toggleDescription(index)}>
                  {task.name} <span className="task-time">({task.time})</span>
                </span>
              </div>
              {activeIndex === index && (
                <p className="task-desc">{task.description}</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
