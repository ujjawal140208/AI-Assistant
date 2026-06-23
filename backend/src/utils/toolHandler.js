import {
  addTask,
  getTasks,
  deleteTaskById,
} from "../services/memoryService.js";

export const handleTools = (message) => {
  const msg = message.toLowerCase();

  let action = null;

  // ADD TASK
  if (msg.includes("add") || msg.includes("remind")) {
    addTask(message);
    action = { type: "ADD_TASK" };
  }

  // DELETE TASK BY ID
  if (msg.includes("delete") || msg.includes("remove")) {
    const idMatch = message.match(/\d+/); // extract number

    if (idMatch) {
      deleteTaskById(idMatch[0]);
      action = { type: "DELETE_TASK" };
    }
  }

  // SHOW TASKS
  if (msg.includes("show tasks")) {
    action = {
      type: "GET_TASKS",
      payload: getTasks(),
    };
  }

  return action;
};