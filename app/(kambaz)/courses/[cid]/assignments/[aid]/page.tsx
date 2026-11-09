"use client";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
    emptyAssignment,
    findAssignment,
    useAssignmentsStore,
    type Assignment,
} from "../../../../store/assignmentsStore";
import { useAccountContext } from "../../../../account/AccountContext";

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const courseId = String(cid);
    const assignmentId = String(aid);
    const isNew = assignmentId === "new";
    const router = useRouter();
    const assignments = useAssignmentsStore((state) => state.assignments);
    const addAssignment = useAssignmentsStore((state) => state.addAssignment);
    const updateAssignment = useAssignmentsStore((state) => state.updateAssignment);
    const { currentUser } = useAccountContext();
    const canEdit = currentUser?.role !== "STUDENT";
    const [draft, setDraft] = useState<Assignment | undefined>(() => {
        if (isNew) return { ...emptyAssignment, course: courseId };
        const found = findAssignment(assignments, assignmentId);
        return found ? { ...found, until: found.until ?? found.due } : undefined;
    });
    const backToList = () => router.push(`/courses/${courseId}/assignments`);
    const save = () => {
        if (!draft) return;
        if (isNew) {
            addAssignment({ ...draft, course: courseId });
        } else {
            updateAssignment(draft);
        }
        backToList();
    };
    if (!draft) {
        return (
            <div id="wd-assignments-editor" className="max-w-3xl">
                <p className="mb-3">That assignment does not exist.</p>
                <button
                    type="button"
                    onClick={backToList}
                    className="rounded border border-neutral-300 px-4 py-2 text-sm"
                >
                    Back to Assignments
                </button>
            </div>
        );
    }
    return (
        <div id="wd-assignments-editor" className="max-w-3xl">
            <label htmlFor="wd-name" className="mb-1 block text-sm font-medium">
                Assignment Name
            </label>
            <input
                id="wd-name"
                value={draft.title}
                onChange={(e) => setDraft({ ...draft, title: e.target.value })}
                className="mb-1 w-full rounded border border-neutral-300 px-3 py-2"
            />
            <p id="wd-assignment-id" className="mb-4 text-sm text-neutral-500">
                Assignment id: {isNew ? "(new)" : assignmentId}
            </p>

            <textarea
                id="wd-description"
                rows={6}
                value={draft.description ?? ""}
                onChange={(e) => setDraft({ ...draft, description: e.target.value })}
                className="mb-4 w-full rounded border border-neutral-300 px-3 py-2"
            />

            <div className="mb-4 grid grid-cols-[160px_1fr] items-center gap-y-3">
                <label htmlFor="wd-points" className="text-right text-sm font-medium">
                    Points
                </label>
                <input
                    id="wd-points"
                    type="number"
                    value={draft.points ?? 0}
                    onChange={(e) => setDraft({ ...draft, points: Number(e.target.value) })}
                    className="w-32 rounded border border-neutral-300 px-3 py-2"
                />

                <label htmlFor="wd-group" className="text-right text-sm font-medium">
                    Assignment Group
                </label>
                <select
                    id="wd-group"
                    defaultValue="ASSIGNMENTS"
                    className="w-48 rounded border border-neutral-300 px-3 py-2"
                >
                    <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                    <option value="QUIZZES">QUIZZES</option>
                    <option value="EXAMS">EXAMS</option>
                    <option value="PROJECT">PROJECT</option>
                </select>

                <label
                    htmlFor="wd-display-grade-as"
                    className="text-right text-sm font-medium"
                >
                    Display Grade as
                </label>
                <select
                    id="wd-display-grade-as"
                    defaultValue="PERCENTAGE"
                    className="w-48 rounded border border-neutral-300 px-3 py-2"
                >
                    <option value="PERCENTAGE">Percentage</option>
                    <option value="POINTS">Points</option>
                    <option value="COMPLETE_INCOMPLETE">Complete/Incomplete</option>
                </select>

                <label
                    htmlFor="wd-submission-type"
                    className="text-right text-sm font-medium"
                >
                    Submission Type
                </label>
                <select
                    id="wd-submission-type"
                    defaultValue="ONLINE"
                    className="w-48 rounded border border-neutral-300 px-3 py-2"
                >
                    <option value="ONLINE">Online</option>
                    <option value="ON_PAPER">On Paper</option>
                    <option value="NO_SUBMISSION">No Submission</option>
                </select>

                <span className="text-right text-sm font-medium">
                    Online Entry Options
                </span>
                <div className="flex flex-col gap-1">
                    <label className="flex items-center gap-2 text-sm">
                        <input type="checkbox" id="wd-text-entry" defaultChecked />
                        Text Entry
                    </label>
                    <label className="flex items-center gap-2 text-sm">
                        <input type="checkbox" id="wd-website-url" defaultChecked />
                        Website URL
                    </label>
                    <label className="flex items-center gap-2 text-sm">
                        <input type="checkbox" id="wd-media-recordings" />
                        Media Recordings
                    </label>
                    <label className="flex items-center gap-2 text-sm">
                        <input type="checkbox" id="wd-student-annotation" />
                        Student Annotation
                    </label>
                    <label className="flex items-center gap-2 text-sm">
                        <input type="checkbox" id="wd-file-upload" />
                        File Uploads
                    </label>
                </div>

                <label htmlFor="wd-assign-to" className="text-right text-sm font-medium">
                    Assign to
                </label>
                <input
                    id="wd-assign-to"
                    defaultValue="Everyone"
                    className="w-full rounded border border-neutral-300 px-3 py-2"
                />

                <label htmlFor="wd-due-date" className="text-right text-sm font-medium">
                    Due
                </label>
                <input
                    id="wd-due-date"
                    type="date"
                    value={draft.due ?? ""}
                    onChange={(e) => setDraft({ ...draft, due: e.target.value })}
                    className="w-48 rounded border border-neutral-300 px-3 py-2"
                />

                <label
                    htmlFor="wd-available-from"
                    className="text-right text-sm font-medium"
                >
                    Available from
                </label>
                <div className="flex items-center gap-2">
                    <input
                        id="wd-available-from"
                        type="date"
                        value={draft.available ?? ""}
                        onChange={(e) => setDraft({ ...draft, available: e.target.value })}
                        className="w-48 rounded border border-neutral-300 px-3 py-2"
                    />
                    <label htmlFor="wd-available-until" className="text-sm font-medium">
                        Until
                    </label>
                    <input
                        id="wd-available-until"
                        type="date"
                        value={draft.until ?? ""}
                        onChange={(e) => setDraft({ ...draft, until: e.target.value })}
                        className="w-48 rounded border border-neutral-300 px-3 py-2"
                    />
                </div>

                <label
                    htmlFor="wd-ai-editor-notes"
                    className="text-right text-sm font-medium"
                >
                    Sample notes
                </label>
                <textarea
                    id="wd-ai-editor-notes"
                    rows={3}
                    className="w-full rounded border border-neutral-300 px-3 py-2"
                />
            </div>

            <hr className="my-4" />

            <div className="flex justify-end gap-2">
                <button
                    type="button"
                    id="wd-cancel"
                    onClick={backToList}
                    className="rounded border border-neutral-300 px-4 py-2 text-sm"
                >
                    Cancel
                </button>
                {canEdit && (
                    <button
                        type="button"
                        id="wd-save"
                        onClick={save}
                        className="rounded bg-red-600 px-4 py-2 text-sm font-medium text-white"
                    >
                        Save
                    </button>
                )}
            </div>
        </div>
    );
}