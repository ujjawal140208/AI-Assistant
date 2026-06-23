let tasks = [];

export const addTask = (task) => {
  tasks.push({
    id: Date.now(),
    title: task,
    completed: false,
  });
};

export const getTasks = () => {
  return tasks;
};

export const completeTask = (id) => {
  tasks = tasks.map((t) =>
    t.id === id ? { ...t, completed: true } : t
  );
};

// ✅ DELETE BY ID
export const deleteTaskById = (id) => {
  tasks = tasks.filter((t) => t.id !== Number(id));
};