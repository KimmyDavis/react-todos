import { useState } from "react";
import { toast } from "sonner";

const AddTodo = ({ setTodos }) => {
  const [currentTodo, setCurrentTodo] = useState("");
  const [exampleTodos] = useState([
    "study react",
    "do laundry",
    "buy groceries",
    "walk the dog",
    "read a book",
    "exercise",
  ]);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (currentTodo.trim() === "") return;
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now(), text: currentTodo, completed: false },
    ]);
    toast.success(`"${currentTodo}" added! 🎉`);
    setCurrentTodo("");
  };
  return (
    <div className="add-container">
      <form
        onSubmit={handleAddTodo}
        className="flex items-center mb-4 py-2 px-3"
      >
        <input
          type="text"
          onChange={(e) => setCurrentTodo(e.target.value)}
          value={currentTodo}
          className="border h-full w-full p-2 rounded"
          placeholder={
            exampleTodos[
              Math.round((exampleTodos.length - 1) * Math.random())
            ] + "..."
          }
        />
        <button className="bg-blue-500 text-white p-2 ml-2 rounded active:bg-sky-300 hover:bg-blue-400">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
