import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store";
import { addTodo, toggleTodo, removeTodo } from "./todoSlice";

export function Todo() {
  // So in Redux, the  access data from a store, use selectors\
  // state: RootState this will get all the reducers
  // then in the all the state choose todos reducer
  const todos = useSelector((state: RootState) => state.todos);
  // use dispatch to dispatch our actions to store
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  const completedCount = todos.filter((todo) => todo.completed).length;
  const totalCount = todos.length;

  return (
    <div className="bg-white rounded-xl shadow-xl p-6 backdrop-blur-sm bg-opacity-90">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">My Tasks</h2>
          {totalCount > 0 && (
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="text-green-500">✓</span>
              <span>
                {completedCount} of {totalCount} completed
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Add Todo Form */}
      <form onSubmit={handleSubmit} className="flex gap-3 mb-6">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What needs to be done?"
          className="flex-1 h-12 px-4 text-base border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        />
        <button
          type="submit"
          disabled={!text.trim()}
          className="h-12 px-6 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors duration-200"
        >
          + Add Task
        </button>
      </form>

      {/* Todo List */}
      {todos.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-6xl text-gray-300 mb-4">○</div>
          <h3 className="text-lg font-medium text-gray-500 mb-2">
            No tasks yet
          </h3>
          <p className="text-gray-400">Add a task above to get started!</p>
        </div>
      ) : (
        <div className="space-y-3 mb-6">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className={`group flex items-center gap-4 p-4 rounded-lg border transition-all duration-200 hover:shadow-md ${
                todo.completed
                  ? "bg-gray-50 border-gray-200"
                  : "bg-white border-gray-200 hover:border-blue-200"
              }`}
            >
              <input
                type="checkbox"
                id={`todo-${todo.id}`}
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo.id))}
                className="w-5 h-5 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2"
              />

              <label
                htmlFor={`todo-${todo.id}`}
                className={`flex-1 text-base cursor-pointer transition-all duration-200 ${
                  todo.completed
                    ? "text-gray-500 line-through"
                    : "text-gray-800 hover:text-gray-900"
                }`}
              >
                {todo.text}
              </label>

              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 px-3 py-1 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-md text-sm font-medium"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Progress Section */}
      {totalCount > 0 && (
        <div className="pt-4 border-t border-gray-100">
          <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
            <span>
              {totalCount} {totalCount === 1 ? "task" : "tasks"} total
            </span>
            {completedCount > 0 && (
              <span className="text-green-600 font-medium">
                {Math.round((completedCount / totalCount) * 100)}% complete
              </span>
            )}
          </div>
          {completedCount > 0 && (
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-green-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(completedCount / totalCount) * 100}%` }}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
