interface TaskProps {
  task: {
    id: number;
    title: string;
    completed: boolean;
  };
  onComplete: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function TaskItem({ task, onComplete, onDelete }: TaskProps) {
  return (
    <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm border">
      <span className={`text-lg ${task.completed ? "line-through text-gray-500" : "text-gray-800"}`}>
        {task.title}
      </span>
      <div className="flex gap-2">
        {!task.completed && (
          <button
            onClick={() => onComplete(task.id)}
            className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
          >
            Complete
          </button>
        )}
        <button
          onClick={() => onDelete(task.id)}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
