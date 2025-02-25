"use client";
import { useEffect, useState } from "react";
import { fetchTasks, completeTask, deleteTask } from "./utils/api";
import TaskItem from "./components/TaskItem";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchTasks().then((data: Task[]) => {
      setTasks(data.slice(0, 10));
      setLoading(false);
    });
  }, []);

  const handleComplete = async (id: number) => {
    await completeTask(id);
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: true } : task)));
  };

  const handleDelete = async (id: number) => {
    await deleteTask(id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Task Manager</h1>

        {loading ? (
          <p className="text-center text-gray-600">Loading...</p>
        ) : (
          <div className="space-y-3">
            {tasks.map((task) => (
              <TaskItem key={task.id} task={task} onComplete={handleComplete} onDelete={handleDelete} />
            ))}
          </div>
        )}

        <a href="/add-task" className="mt-6 block text-center bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
          Add New Task
        </a>
      </div>
    </div>
  );
}
