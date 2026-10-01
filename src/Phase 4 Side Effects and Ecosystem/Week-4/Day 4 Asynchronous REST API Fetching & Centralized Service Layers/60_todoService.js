import { apiClient } from "./apiClient";

export const todoService = {
  getAllTodos: (signal) => {
    return apiClient("/todos", { signal });
  },
  getTodoById: (id, signal) => {
    return apiClient(`/todos/${id}`, { signal });
  }
};
