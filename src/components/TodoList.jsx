import { useEffect } from "react";
import { toast } from "sonner";

const TodoList = ({ todoList = [], setTodos }) => {
  useEffect(() => {
    console.log("TodoList updated:", todoList);
  }, [todoList]);
  const handleComplete = (id, todoText) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: true, id: Date.now() } : todo
      )
    );
    toast.success(`"${todoText}" completed! 🥳`);
  };
  return (
    <div className="px-4">
      {!todoList.length ? (
        <p className="text-slate-400">no todos...</p>
      ) : (
        <div className="allTodos">
          <div className="not-completed-todos">
            {todoList
              .filter((t) => !t.completed)
              .sort((a, b) => b.id - a.id)
              .map((todo, _) => (
                <div
                  key={todo.id}
                  className="flex justify-between my-2 bg-blue-100 p-2 py-4 rounded"
                >
                  <span>{todo.text}</span>
                  <span className="created italic text-slate-400 mr-4 text-xs">
                    created{" "}
                    {new Date(todo.id).toLocaleTimeString("en-US", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "2-digit",
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: false,
                    })}
                  </span>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleComplete(todo.id, todo.text)}
                    disabled={todo.completed}
                  />
                </div>
              ))}
          </div>
          <div className="completed-todos">
            {todoList
              .filter((t) => t.completed)
              .sort((a, b) => b.id - a.id)
              .map((todo, _) => (
                <div
                  key={todo.id}
                  className="flex justify-between my-2 bg-slate-100 p-2 py-4 rounded"
                >
                  <span>{todo.text}</span>
                  <span className="created italic text-slate-400 mr-4 text-xs">
                    completed{" "}
                    {new Date(todo.id).toLocaleTimeString("en-US", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "2-digit",
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: false,
                    })}
                  </span>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleComplete(todo.id)}
                    disabled={todo.completed}
                  />
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoList;
