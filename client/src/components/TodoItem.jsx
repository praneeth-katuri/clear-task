import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

export default function TodoItem({ todo, toggleComplete, removeTodo }) {
  return (
    <div className="flex items-center justify-between border-b py-2">
      <div className="flex items-center gap-2">
        <Checkbox
          checked={todo.completed}
          onCheckedChange={() => toggleComplete(todo.id)}
        />
        <span
          className={todo.completed ? "line-through text-muted-foreground" : ""}
        >
          {todo.text}
        </span>
      </div>
      <Button
        variant="destructive"
        size="sm"
        onClick={() => removeTodo(todo.id)}
      >
        Delete
      </Button>
    </div>
  );
}
