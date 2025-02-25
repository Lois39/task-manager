const API_URL = "https://jsonplaceholder.typicode.com/todos";


export async function fetchTasks() {
  const res = await fetch(API_URL);
  return res.json();
}

export async function addTask(title: string) {
  const res = await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({ title, completed: false }),
    headers: { "Content-Type": "application/json" },
  });
  return res.json();
}

export async function completeTask(id: number) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    body: JSON.stringify({ completed: true }),
    headers: { "Content-Type": "application/json" },
  });
  return res.json();
}

export async function deleteTask(id: number) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  return res.ok;
}
