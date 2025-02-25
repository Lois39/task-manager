"use client";
import { useState } from "react";
import { addTask } from "../utils/api";

interface AddTaskProps {
  onTaskAdded: () => void; 
}

export default function AddTask({ onTaskAdded }: AddTaskProps) {
  const [taskTitle, setTaskTitle] = useState("");

  const handleAddTask = async () => {
    if (!taskTitle.trim()) return;
    await addTask(taskTitle);
    setTaskTitle("");
    onTaskAdded(); 
  };

  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        placeholder="Enter new task..."
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        className="border p-2 w-full rounded"
      />
      <button
        onClick={handleAddTask}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        + Add Task
      </button>
    </div>
  );
}
