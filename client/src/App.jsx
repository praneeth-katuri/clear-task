import { useState } from "react";
import { toast } from "sonner";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import TodoItem from "@/components/TodoItem";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [error, setError] = useState(false);

  const addTodo = () => {
    if (text.trim() === "") {
      setError(true);
      toast.error("Please enter a task before adding it.", {
        duration: 5000,
        position: "top-right",
        style: {
          backgroundColor: "red",
          color: "#fff",
        },
      });
      return;
    }

    setTodos([...todos, { id: Date.now(), text, completed: false }]);
    setText("");
    setError(false);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto mt-20 space-y-4 p-4">
      <h1 className="text-2xl font-bold text-center mb-4">📝 Todo List</h1>

      <div className="flex flex-col gap-1">
        <div className="flex gap-2">
          <Input
            className={`transition-all ${
              error ? "border-red-500 animate-shake" : ""
            }`}
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              setError(false);
            }}
            placeholder="Add a task..."
          />
          <Button onClick={addTodo}>Add</Button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4 space-y-2">
        {todos.length === 0 && (
          <p className="text-center text-muted-foreground">No tasks yet</p>
        )}
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            removeTodo={removeTodo}
          />
        ))}
      </div>
    </div>
  );
}
