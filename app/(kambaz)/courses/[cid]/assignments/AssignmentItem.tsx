"use client";
import { useState } from "react";
import Link from "next/link";
import { FaFileAlt, FaTrash } from "react-icons/fa";
import { useAssignmentsStore } from "../../../store/assignmentsStore";

export default function AssignmentItem({
    cid,
    aid,
    title,
    details,
    canEdit = true,
}: {
    cid: string;
    aid: string;
    title: string;
    details: string;
    canEdit?: boolean;
}) {
    const deleteAssignment = useAssignmentsStore((state) => state.deleteAssignment);
    const [confirming, setConfirming] = useState(false);
    return (
        <li className="wd-assignment-list-item mb-3 flex gap-3 border border-neutral-300 border-l-[3px] border-l-green-600 bg-white p-3">
            <FaFileAlt className="mt-1 shrink-0 text-xl text-green-700" />
            <div className="flex-1">
                <Link
                    href={`/courses/${cid}/assignments/${aid}`}
                    className="wd-assignment-link font-semibold text-neutral-900 no-underline"
                >
                    {title}
                </Link>
                <div className="mt-1 text-sm text-neutral-600">{details}</div>
            </div>
            {canEdit && (
                <FaTrash
                    className="wd-delete-assignment mt-1 shrink-0 cursor-pointer text-red-600"
                    title="Delete assignment"
                    onClick={() => setConfirming(true)}
                />
            )}
            {confirming && (
                <div
                    id="wd-delete-assignment-dialog"
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
                >
                    <div className="w-full max-w-sm rounded-lg bg-white p-4 shadow-lg">
                        <h3 className="mb-2 text-lg font-semibold">Delete assignment?</h3>
                        <p className="mb-4 text-sm">
                            Are you sure you want to remove <b>{title}</b>?
                        </p>
                        <div className="flex justify-end gap-2">
                            <button
                                id="wd-delete-assignment-no"
                                type="button"
                                className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
                                onClick={() => setConfirming(false)}
                            >
                                No
                            </button>
                            <button
                                id="wd-delete-assignment-yes"
                                type="button"
                                className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
                                onClick={() => {
                                    setConfirming(false);
                                    deleteAssignment(aid);
                                }}
                            >
                                Yes
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </li>
    );
}