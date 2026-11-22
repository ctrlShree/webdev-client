"use client";
import { useState } from "react";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function WorkingWithRemoteArrays() {
  const API = `${HTTP_SERVER}/lab5/todos`;
  const [todo, setTodo] = useState({
    id: "1",
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    completed: false,
  });
  const btn =
    "inline-block rounded bg-blue-600 px-3 py-1.5 text-sm text-white no-underline mr-2 mb-2";
  const input =
    "mb-3 block w-full max-w-md rounded border border-neutral-300 px-3 py-1.5";
  return (
    <div id="wd-working-with-arrays">
      <h3>Working with Arrays</h3>

      <h4>Retrieving Arrays</h4>
      <a id="wd-retrieve-todos" className={btn} href={API}>
        Get Todos
      </a>

      <h4>Retrieving an Item from an Array by ID</h4>
      <a id="wd-retrieve-todo-by-id" className={btn} href={`${API}/${todo.id}`}>
        Get Todo by ID
      </a>
      <input id="wd-todo-id" className={input} value={todo.id}
        onChange={(e) => setTodo({ ...todo, id: e.target.value })} />

      <h4>Filtering Array Items</h4>
      <a id="wd-retrieve-completed-todos" className={btn} href={`${API}?completed=true`}>
        Get Completed Todos
      </a>

      <h4>Creating new Items in an Array</h4>
      <a id="wd-create-todo" className={btn} href={`${API}/create`}>
        Create Todo
      </a>

      <h4>Removing from an Array</h4>
      <a id="wd-remove-todo" className={btn} href={`${API}/${todo.id}/delete`}>
        Remove Todo with ID = {todo.id}
      </a>

      <h4>Updating an Item in an Array</h4>
      <a id="wd-update-todo-title" className={btn}
        href={`${API}/${todo.id}/title/${todo.title}`}>
        Update Todo
      </a>
      <input id="wd-todo-title" className={input} value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })} />

      <a id="wd-update-todo-completed" className={btn}
        href={`${API}/${todo.id}/completed/${todo.completed}`}>
        Complete Todo ID = {todo.id}
      </a>
      <label className="mb-3 flex items-center gap-2">
        <input id="wd-todo-completed" type="checkbox" checked={todo.completed}
          onChange={(e) => setTodo({ ...todo, completed: e.target.checked })} />
        Completed
      </label>

      <a id="wd-update-todo-description" className={btn}
        href={`${API}/${todo.id}/description/${todo.description}`}>
        Describe Todo ID = {todo.id}
      </a>
      <input id="wd-todo-description" className={input} value={todo.description}
        onChange={(e) => setTodo({ ...todo, description: e.target.value })} />
      <hr />
    </div>
  );
}