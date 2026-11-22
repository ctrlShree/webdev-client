"use client";
import { useEffect, useState } from "react";
import { FaTrash, FaPlusCircle, FaPencilAlt } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import * as client from "./client";

type Todo = {
    id: number;
    title: string;
    completed: boolean;
    editing?: boolean;
};

export default function WorkingWithRemoteArraysAsync() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const fetchTodos = async () => {
        setTodos(await client.fetchTodos());
    };
    const removeTodo = async (todo: Todo) => {
        setTodos(await client.removeTodo(todo));
    };
    const createNewTodo = async () => {
        setTodos(await client.createNewTodo());
    };
    const postNewTodo = async () => {
        const newTodo = await client.postNewTodo({
            title: "New Posted Todo",
            completed: false,
        });
        setTodos([...todos, newTodo]);
    };
    const deleteTodo = async (todo: Todo) => {
        try {
            await client.deleteTodo(todo);
            setTodos(todos.filter((t) => t.id !== todo.id));
            setErrorMessage(null);
        } catch (error) {
            const e = error as { response?: { data?: { message?: string } } };
            setErrorMessage(e.response?.data?.message ?? "Delete failed");
        }
    };
    const editTodo = (todo: Todo) => {
        setTodos(todos.map((t) => (t.id === todo.id ? { ...todo, editing: true } : t)));
    };
    const updateTodo = async (todo: Todo) => {
        try {
            await client.updateTodo(todo);
            setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
            setErrorMessage(null);
        } catch (error) {
            const e = error as { response?: { data?: { message?: string } } };
            setErrorMessage(e.response?.data?.message ?? "Update failed");
        }
    };
    useEffect(() => {
        fetchTodos();
    }, []);
    return (
        <div id="wd-asynchronous-arrays">
            <h3>Working with Arrays Asynchronously</h3>
            {errorMessage && (
                <p
                    id="wd-todo-error-message"
                    className="mb-3 rounded bg-red-100 px-3 py-2 text-red-800"
                >
                    {errorMessage}
                </p>
            )}
            <h4 className="flex items-center gap-3">
                Todos
                <FaPlusCircle
                    onClick={createNewTodo}
                    id="wd-create-todo"
                    className="cursor-pointer text-2xl text-green-600"
                />
                <FaPlusCircle
                    onClick={postNewTodo}
                    id="wd-post-todo"
                    className="cursor-pointer text-2xl text-blue-600"
                />
            </h4>
            <ul className="max-w-md list-none divide-y rounded border border-neutral-300 p-0">
                {todos.map((todo) => (
                    <li key={todo.id} className="flex items-center gap-2 px-3 py-2">
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={(e) => updateTodo({ ...todo, completed: e.target.checked })}
                        />
                        {!todo.editing ? (
                            <span className={`flex-1 ${todo.completed ? "line-through" : ""}`}>
                                {todo.title}
                            </span>
                        ) : (
                            <input
                                className="flex-1 rounded border border-neutral-300 px-2 py-0.5"
                                value={todo.title}
                                onChange={(e) =>
                                    setTodos(
                                        todos.map((t) =>
                                            t.id === todo.id ? { ...todo, title: e.target.value } : t
                                        )
                                    )
                                }
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        updateTodo({ ...todo, editing: false });
                                    }
                                }}
                            />
                        )}
                        <FaPencilAlt
                            onClick={() => editTodo(todo)}
                            className="cursor-pointer text-blue-600"
                        />
                        <TiDelete
                            onClick={() => deleteTodo(todo)}
                            id="wd-delete-todo"
                            className="cursor-pointer text-2xl text-red-600"
                        />
                        <FaTrash
                            onClick={() => removeTodo(todo)}
                            id="wd-remove-todo"
                            className="cursor-pointer text-red-600"
                        />
                    </li>
                ))}
            </ul>
            <hr />
        </div>
    );
}