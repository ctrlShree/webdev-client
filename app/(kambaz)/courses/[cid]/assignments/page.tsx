"use client";
import { useParams, useRouter } from "next/navigation";
import { FaPlus, FaSearch } from "react-icons/fa";
import AssignmentItem from "./AssignmentItem";
import { useAssignmentsStore } from "../../../store/assignmentsStore";
import { useAccountContext } from "../../../account/AccountContext";

export default function Assignments() {
    const { cid } = useParams();
    const courseId = String(cid);
    const router = useRouter();
    const allAssignments = useAssignmentsStore((state) => state.assignments);
    const assignments = allAssignments.filter(
        (assignment) => assignment.course === courseId,
    );
    const { currentUser } = useAccountContext();
    const canEdit = currentUser?.role !== "STUDENT";
    return (
        <div id="wd-assignments">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                <div className="relative">
                    <FaSearch className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" />
                    <input
                        placeholder="Search for Assignments"
                        id="wd-search-assignment"
                        className="rounded border py-1.5 pl-9 pr-3 text-sm"
                    />
                </div>
                {canEdit && (
                    <div className="flex gap-2">
                        <button
                            id="wd-add-assignment-group"
                            type="button"
                            className="inline-flex items-center gap-1 rounded border px-3 py-1.5 text-sm"
                        >
                            <FaPlus /> Group
                        </button>
                        <button
                            id="wd-add-assignment"
                            type="button"
                            className="inline-flex items-center gap-1 rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
                            onClick={() => router.push(`/courses/${courseId}/assignments/new`)}
                        >
                            <FaPlus /> Assignment
                        </button>
                    </div>
                )}
            </div>
            <h3
                id="wd-assignments-title"
                className="mb-3 flex items-center justify-between rounded bg-neutral-200 p-3 text-lg"
            >
                <span>ASSIGNMENTS 40% of Total</span>
                <button
                    type="button"
                    className="rounded border bg-white px-2 py-0.5 text-sm"
                >
                    <FaPlus />
                </button>
            </h3>
            <ul id="wd-assignment-list" className="m-0 list-none p-0">
                {assignments.map((assignment) => (
                    <AssignmentItem
                        key={assignment._id}
                        cid={courseId}
                        aid={assignment._id}
                        title={assignment.title}
                        canEdit={canEdit}
                        details={`Multiple Modules | Not available until ${assignment.available || "TBD"} | Due ${assignment.due || "TBD"} | ${assignment.points ?? 100} pts`}
                    />
                ))}
            </ul>
        </div>
    );
}