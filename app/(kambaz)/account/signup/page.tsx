"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { emptyUser, useAccountContext } from "../AccountContext";
import { useUsersStore } from "../../store/usersStore";

export default function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [verify, setVerify] = useState("");
    const [error, setError] = useState("");
    const users = useUsersStore((state) => state.users);
    const addUser = useUsersStore((state) => state.addUser);
    const { setCurrentUser } = useAccountContext();
    const router = useRouter();
    const signup = () => {
        if (!username || !password) {
            setError("Enter a username and a password.");
            return;
        }
        if (password !== verify) {
            setError("Passwords do not match.");
            return;
        }
        if (users.some((u) => u.username === username)) {
            setError("That username is taken.");
            return;
        }
        const user = {
            ...emptyUser,
            _id: crypto.randomUUID(),
            username,
            password,
            role: "STUDENT",
        };
        addUser(user);
        setCurrentUser(user);
        router.push("/account/profile");
    };
    return (
        <div id="wd-signup-screen" className="max-w-sm">
            <h1 className="mb-3 text-2xl font-semibold">Sign up</h1>
            <input
                id="wd-username"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="wd-username mb-2 w-full rounded border border-neutral-300 px-3 py-2"
            />
            <input
                id="wd-password"
                placeholder="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="wd-password mb-2 w-full rounded border border-neutral-300 px-3 py-2"
            />
            <input
                id="wd-password-verify"
                placeholder="verify password"
                type="password"
                value={verify}
                onChange={(e) => setVerify(e.target.value)}
                className="wd-password-verify mb-2 w-full rounded border border-neutral-300 px-3 py-2"
            />
            {error && <p className="mb-2 text-sm text-red-600">{error}</p>}
            <button
                id="wd-signup-btn"
                type="button"
                onClick={signup}
                className="mb-2 block w-full rounded bg-blue-600 px-3 py-2 text-center text-white"
            >
                Sign up
            </button>
            <Link id="wd-signin-link" href="/account/signin">
                Sign in
            </Link>
        </div>
    );
}