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
        duration: 4000,
        position: "top-right",
        style: {
          backgroundColor: "#ef4444",
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
    <div className="max-w-md mx-auto mt-20 p-6 bg-slate-800/70 backdrop-blur-md shadow-2xl rounded-2xl  border-slate-700">
      <h1 className="text-3xl font-bold text-center mb-6 text-white">
        📝 Todo List
      </h1>

      <div className="flex gap-2 mb-4">
        <Input
          className={`flex-1 rounded-xl border px-4 py-2 text-sm transition-all shadow-sm focus:ring-2 focus:ring-blue-500 ${
            error ? "border-red-500 ring-2 ring-red-400" : "border-slate-300"
          }`}
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            setError(false);
          }}
          placeholder="What's on your mind?"
        />
        <Button
          onClick={addTodo}
          className="rounded-xl px-4 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 transition text-white"
        >
          Add
        </Button>
      </div>

      <div className="bg-gray-600 rounded-xl shadow-inner p-4 space-y-3 transition-all">
        {todos.length === 0 ? (
          <p className="text-center text-sm text-slate-400 italic">
            No tasks yet. You're all caught up! 🎉
          </p>
        ) : (
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleComplete={toggleComplete}
              removeTodo={removeTodo}
            />
          ))
        )}
      </div>
    </div>
  );
}
