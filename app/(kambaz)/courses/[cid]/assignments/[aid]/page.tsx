import Link from "next/link";

export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor" className="max-w-3xl">
            <label htmlFor="wd-name" className="mb-1 block text-sm font-medium">
                Assignment Name
            </label>
            <input
                id="wd-name"
                defaultValue="A1 - ENV + HTML"
                className="mb-4 w-full rounded border border-neutral-300 px-3 py-2"
            />

            <textarea
                id="wd-description"
                rows={6}
                defaultValue="The assignment is available online Submit a link to the landing page of your Web application running on Vercel."
                className="mb-4 w-full rounded border border-neutral-300 px-3 py-2"
            />

            <div className="mb-4 grid grid-cols-[160px_1fr] items-center gap-y-3">
                <label htmlFor="wd-points" className="text-right text-sm font-medium">
                    Points
                </label>
                <input
                    id="wd-points"
                    defaultValue={100}
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
                    defaultValue="2024-05-13"
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
                        defaultValue="2024-05-06"
                        className="w-48 rounded border border-neutral-300 px-3 py-2"
                    />
                    <label htmlFor="wd-available-until" className="text-sm font-medium">
                        Until
                    </label>
                    <input
                        id="wd-available-until"
                        type="date"
                        defaultValue="2024-05-20"
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
                <Link
                    href="/courses/1234/assignments"
                    id="wd-cancel"
                    className="rounded border border-neutral-300 px-4 py-2 text-sm no-underline"
                >
                    Cancel
                </Link>
                <Link
                    href="/courses/1234/assignments"
                    id="wd-save"
                    className="rounded bg-red-600 px-4 py-2 text-sm font-medium text-white no-underline"
                >
                    Save
                </Link>
            </div>
        </div>
    );
}