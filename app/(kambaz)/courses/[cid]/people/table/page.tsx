"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";
import { emptyUser, useAccountContext, type User } from "../../../../account/AccountContext";
import { useUsersStore } from "../../../../store/usersStore";
import { useEnrollmentsStore } from "../../../../store/enrollmentsStore";

const field = "rounded border border-neutral-300 px-2 py-1 text-sm";

export default function PeopleTable() {
  const { cid } = useParams();
  const courseId = String(cid);
  const users = useUsersStore((state) => state.users);
  const addUser = useUsersStore((state) => state.addUser);
  const enrollments = useEnrollmentsStore((state) => state.enrollments);
  const enroll = useEnrollmentsStore((state) => state.enroll);
  const unenroll = useEnrollmentsStore((state) => state.unenroll);
  const { currentUser } = useAccountContext();
  const canEdit = currentUser?.role !== "STUDENT";
  const [person, setPerson] = useState<User>(emptyUser);
  const enrolled = users.filter((usr) =>
    enrollments.some(
      (enrollment) => enrollment.user === usr._id && enrollment.course === courseId,
    ),
  );
  const addPerson = () => {
    if (!person.firstName.trim() && !person.lastName.trim()) return;
    const _id = crypto.randomUUID();
    addUser({ ...person, _id, username: person.username || _id.slice(0, 8) });
    enroll(_id, courseId);
    setPerson(emptyUser);
  };
  return (
    <div id="wd-people-table" className="overflow-x-auto">
      {canEdit && (
        <div id="wd-add-person" className="mb-4 flex flex-wrap items-center gap-2">
          <input
            id="wd-person-first-name"
            placeholder="First name"
            value={person.firstName}
            onChange={(e) => setPerson({ ...person, firstName: e.target.value })}
            className={field}
          />
          <input
            id="wd-person-last-name"
            placeholder="Last name"
            value={person.lastName}
            onChange={(e) => setPerson({ ...person, lastName: e.target.value })}
            className={field}
          />
          <input
            id="wd-person-login-id"
            placeholder="Login ID"
            value={person.loginId}
            onChange={(e) => setPerson({ ...person, loginId: e.target.value })}
            className={field}
          />
          <select
            id="wd-person-role"
            value={person.role}
            onChange={(e) => setPerson({ ...person, role: e.target.value })}
            className={field}
          >
            <option value="STUDENT">Student</option>
            <option value="TA">Assistant</option>
            <option value="FACULTY">Faculty</option>
          </select>
          <button
            id="wd-add-person-click"
            type="button"
            onClick={addPerson}
            className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
          >
            + People
          </button>
        </div>
      )}
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-neutral-300">
            <th className="p-2">Name</th>
            <th className="p-2">Login ID</th>
            <th className="p-2">Section</th>
            <th className="p-2">Role</th>
            <th className="p-2">Last Activity</th>
            <th className="p-2">Total Activity</th>
            {canEdit && <th className="p-2"></th>}
          </tr>
        </thead>
        <tbody>
          {enrolled.map((user) => (
            <tr key={user._id} className="odd:bg-neutral-50">
              <td className="wd-full-name p-2 text-nowrap">
                <FaUserCircle className="me-2 inline align-middle text-4xl text-neutral-500" />
                <span className="wd-first-name">{user.firstName}</span>{" "}
                <span className="wd-last-name">{user.lastName}</span>
              </td>
              <td className="wd-login-id p-2">{user.loginId}</td>
              <td className="wd-section p-2">{user.section}</td>
              <td className="wd-role p-2">{user.role}</td>
              <td className="wd-last-activity p-2">{user.lastActivity}</td>
              <td className="wd-total-activity p-2">{user.totalActivity}</td>
              {canEdit && (
                <td className="p-2">
                  <button
                    type="button"
                    onClick={() => unenroll(user._id, courseId)}
                    className="rounded bg-neutral-200 px-2 py-0.5 text-xs"
                  >
                    Remove
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}