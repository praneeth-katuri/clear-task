import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

export default function TodoItem({ todo, toggleComplete, removeTodo }) {
  return (
    <div
      className={`flex items-center justify-between px-4 py-3 rounded-xl border transition-all shadow-sm ${
        todo.completed
          ? "bg-slate-800 text-slate-500 border-slate-700"
          : "bg-slate-900 hover:shadow-md text-slate-100 border-slate-700"
      }`}
    >
      <div className="flex items-center gap-3">
        <Checkbox
          checked={todo.completed}
          onCheckedChange={() => toggleComplete(todo.id)}
          className="border-slate-600 data-[state=checked]:bg-green-600"
        />
        <span
          className={`text-sm font-medium transition-all ${
            todo.completed ? "line-through text-slate-500" : "text-slate-100"
          }`}
        >
          {todo.text}
        </span>
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => removeTodo(todo.id)}
        className="text-red-500 hover:bg-red-500/10"
      >
        <Trash2 size={18} />
      </Button>
    </div>
  );
}
