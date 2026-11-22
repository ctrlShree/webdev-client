"use client";
import { useEffect, useState } from "react";
import * as client from "./client";

type Assignment = {
    id?: number;
    title?: string;
    description?: string;
    due?: string;
    completed?: boolean;
    score?: number;
};

export default function WorkingWithRemoteObjectsAsync() {
    const [assignment, setAssignment] = useState<Assignment>({});
    const fetchAssignment = async () => {
        setAssignment(await client.fetchAssignment());
    };
    const updateTitle = async () => {
        setAssignment(await client.updateTitle(assignment.title ?? ""));
    };
    useEffect(() => {
        fetchAssignment();
    }, []);
    const input =
        "mb-3 block w-full max-w-md rounded border border-neutral-300 px-3 py-1.5";
    return (
        <div id="wd-asynchronous-objects">
            <h3>Working with Objects Asynchronously</h3>
            <h4>Assignment</h4>
            <input
                id="wd-async-assignment-title"
                className={input}
                value={assignment.title ?? ""}
                onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
            />
            <textarea
                id="wd-async-assignment-description"
                className={input}
                rows={3}
                value={assignment.description ?? ""}
                onChange={(e) =>
                    setAssignment({ ...assignment, description: e.target.value })
                }
            />
            <input
                id="wd-async-assignment-due"
                type="date"
                className={input}
                value={assignment.due ?? ""}
                onChange={(e) => setAssignment({ ...assignment, due: e.target.value })}
            />
            <label className="mb-3 flex items-center gap-2">
                <input
                    id="wd-async-assignment-completed"
                    type="checkbox"
                    checked={assignment.completed ?? false}
                    onChange={(e) =>
                        setAssignment({ ...assignment, completed: e.target.checked })
                    }
                />
                Completed
            </label>
            <button
                type="button"
                id="wd-async-update-title"
                className="mb-3 rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
                onClick={updateTitle}
            >
                Update Title
            </button>
            <pre className="overflow-x-auto rounded bg-neutral-100 p-3 text-sm">
                {JSON.stringify(assignment, null, 2)}
            </pre>
            <hr />
        </div>
    );
}