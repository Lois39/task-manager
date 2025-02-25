"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTask() {
  const [title, setTitle] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;

    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };

    const existingTasks = JSON.parse(localStorage.getItem("tasks") || "[]");

    const updatedTasks = [newTask, ...existingTasks];

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    router.push("/");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Add New Task</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
          >
            Add Task
          </button>
        </form>

        <a href="/" className="mt-4 block text-center text-blue-500 hover:underline">
          Back to Tasks
        </a>
      </div>
    </div>
  );
}
