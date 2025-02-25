import React from "react";

type TaskItemProps = {
  task: {
    id: number;
    title: string;
    completed: boolean;
    priority: string;
  };
  onComplete: () => void;
  onDelete: () => void;
};

const TaskItem: React.FC<TaskItemProps> = ({ task, onComplete, onDelete }) => {
  return (
    <tr className="border-b">
      <td className="px-4 py-3">{task.title}</td>
      <td className="px-4 py-3">
        {task.completed ? (
          <span className="text-green-600 font-semibold">Done</span>
        ) : (
          <button
            onClick={onComplete}
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
          >
            Mark as Done
          </button>
        )}
      </td>
      <td className="px-4 py-3">
        <span
          className={`px-2 py-1 text-white rounded ${
            task.priority === "Urgent"
              ? "bg-red-500"
              : task.priority === "High"
              ? "bg-orange-400"
              : task.priority === "Medium"
              ? "bg-blue-500"
              : "bg-green-500"
          }`}
        >
          {task.priority}
        </span>
      </td>
      <td className="px-4 py-3">
        <button
          onClick={onDelete}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TaskItem;
