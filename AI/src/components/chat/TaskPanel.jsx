import React, { useEffect, useState } from "react";

const TaskPanel = ({ refreshTrigger }) => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/chat/tasks");
      const data = await res.json();
      setTasks(data.tasks || []);
    } catch (err) {
      console.error("Error fetching tasks", err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [refreshTrigger]); // 🔥 update whenever trigger changes

  return (
    <div className="task-panel">
      <h3>📋 Tasks</h3>

      {tasks.length === 0 ? (
        <p>No tasks yet</p>
      ) : (
        tasks.map((task) => (
          <div key={task.id} className="task-item">
            • {task.title} {task.completed ? "✅" : ""}
          </div>
        ))
      )}
    </div>
  );
};

export default TaskPanel;