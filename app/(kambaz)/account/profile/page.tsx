"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAccountContext, type User } from "../AccountContext";
import { useUsersStore } from "../../store/usersStore";

const field = "mb-2 w-full rounded border border-neutral-300 px-3 py-2";

export default function Profile() {
  const [profile, setProfile] = useState<User | null>(null);
  const { currentUser, setCurrentUser } = useAccountContext();
  const updateUser = useUsersStore((state) => state.updateUser);
  const router = useRouter();
  useEffect(() => {
    if (!currentUser) {
      router.push("/account/signin");
      return;
    }
    setProfile(currentUser);
  }, [currentUser, router]);
  const update = () => {
    if (!profile) return;
    updateUser(profile);
    setCurrentUser(profile);
  };
  const signout = () => {
    setCurrentUser(null);
    router.push("/account/signin");
  };
  if (!currentUser || !profile) return null;
  return (
    <div id="wd-profile-screen" className="max-w-sm">
      <h1 className="mb-3 text-2xl font-semibold">Profile</h1>
      <input
        id="wd-username"
        value={profile.username}
        onChange={(e) => setProfile({ ...profile, username: e.target.value })}
        placeholder="username"
        className={`wd-username ${field}`}
      />
      <input
        id="wd-password"
        value={profile.password}
        onChange={(e) => setProfile({ ...profile, password: e.target.value })}
        placeholder="password"
        type="password"
        className={`wd-password ${field}`}
      />
      <input
        value={profile.firstName}
        onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
        placeholder="First Name"
        id="wd-firstname"
        className={field}
      />
      <input
        value={profile.lastName}
        onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
        placeholder="Last Name"
        id="wd-lastname"
        className={field}
      />
      <input
        value={profile.email}
        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
        type="email"
        id="wd-email"
        className={field}
      />
      <select
        value={profile.role}
        onChange={(e) => setProfile({ ...profile, role: e.target.value })}
        id="wd-role"
        className={field}
      >
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="TA">Teaching assistant</option>
        <option value="STUDENT">Student</option>
      </select>
      <button
        id="wd-update-profile-btn"
        type="button"
        onClick={update}
        className="mb-2 block w-full rounded bg-blue-600 px-3 py-2 text-white"
      >
        Update
      </button>
      <button
        id="wd-signout-btn"
        type="button"
        onClick={signout}
        className="block w-full rounded bg-red-600 px-3 py-2 text-white"
      >
        Sign out
      </button>
    </div>
  );
}