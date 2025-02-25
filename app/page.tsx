"use client";
import { useEffect, useState } from "react";
import { fetchTasks, completeTask, deleteTask, Task } from "./utils/api";
import TaskItem from "./components/TaskItem";
import AddTask from "./components/AddTask";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTasks().then((data) => {
      setTasks(
        data.slice(0, 7).map((task) => ({
          ...task,
          priority: getRandomPriority(),
        }))
      );
      setLoading(false);
    });
  }, []);

  const refreshTasks = async () => {
    const data = await fetchTasks();
    setTasks(
      data.slice(0, 7).map((task) => ({
        ...task,
        priority: getRandomPriority(),
      }))
    );
  };

  const getRandomPriority = (): Task["priority"] => {
    const priorities: Task["priority"][] = ["Low", "Medium", "High", "Urgent"];
    return priorities[Math.floor(Math.random() * priorities.length)];
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Task Manager</h1>

      {/* Pass refreshTasks to AddTask */}
      <AddTask onTaskAdded={refreshTasks} />

      {loading ? (
        <p className="text-center">Loading tasks...</p>
      ) : (
        <table className="w-full bg-white rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="px-4 py-3 text-left">Task</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Priority</th>
              <th className="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <TaskItem key={task.id} task={task} onComplete={() => {}} onDelete={() => {}} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
