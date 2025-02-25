const API_URL = "https://jsonplaceholder.typicode.com/todos";

export interface Task {
  id: number;
  title: string;
  completed: boolean;
  priority: "Low" | "Medium" | "High" | "Urgent";
}

export const fetchTasks = async (): Promise<Task[]> => {
  const res = await fetch(API_URL);
  return res.json();
};

export const addTask = async (title: string): Promise<Task> => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, completed: false }),
  });
  return res.json();
};

export const completeTask = async (id: number): Promise<Task> => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ completed: true }),
  });
  return res.json();
};

export const deleteTask = async (id: number): Promise<void> => {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
};
