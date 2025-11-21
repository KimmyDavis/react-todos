import { useEffect } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { useState } from "react";
import { Toaster } from "@/components/ui/sonner";

function App() {
  const [todoList, setTodos] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );
  const handleCleatTodos = () => {
    setTodos([]);
    localStorage.removeItem("todos");
  };
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);
  return (
    <div className="App-container mx-auto max-w-[800px] w-full">
      <AddTodo setTodos={setTodos} />
      <div className="clearTodos w-full flex justify-center">
        {todoList.length ? (
          <button
            className="bg-red-500 text-white w-max mx-auto text-sm p-2 rounded active:bg-red-300 hover:bg-red-400 mb-4 "
            onClick={handleCleatTodos}
          >
            Clear All Todos
          </button>
        ) : null}
      </div>
      <TodoList todoList={todoList} setTodos={setTodos} />
      <Toaster position="bottom-right" />
    </div>
  );
}

export default App;
