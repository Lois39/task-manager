import { Task } from "../utils/api";
import { FaCheckCircle, FaRegCircle, FaTrash, FaCircle } from "react-icons/fa";

interface TaskItemProps {
  task: Task;
  onComplete: () => void;
  onDelete: () => void;
}

export default function TaskItem({ task, onComplete, onDelete }: TaskItemProps) {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Low":
        return "bg-green-500 text-white";
      case "Medium":
        return "bg-blue-500 text-white";
      case "High":
        return "bg-orange-500 text-white";
      case "Urgent":
        return "bg-red-500 text-white";
      default:
        return "bg-gray-400 text-white";
    }
  };

  return (
    <tr className="border-b">
      <td className="px-4 py-3">{task.title}</td>

      {/* Status Column */}
      <td className="px-4 py-3 flex items-center gap-2">
        {task.completed ? (
          <FaCheckCircle className="text-green-600" />
        ) : (
          <FaCircle className="text-gray-400" />
        )}
        <span className="font-medium">
          {task.completed ? "Done" : "Pending"}
        </span>
      </td>

      {/* Priority Column */}
      <td className="px-4 py-3">
        <span className={`px-2 py-1 rounded ${getPriorityColor(task.priority)}`}>
          {task.priority}
        </span>
      </td>

      {/* Action Buttons */}
      <td className="px-4 py-3">
        <button onClick={onDelete} className="text-red-600 hover:text-red-800">
          <FaTrash />
        </button>
      </td>
    </tr>
  );
}
