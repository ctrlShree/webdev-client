"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAccountContext } from "../AccountContext";
import { useUsersStore } from "../../store/usersStore";

export default function Signin() {
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const [note, setNote] = useState("");
    const [error, setError] = useState("");
    const users = useUsersStore((state) => state.users);
    const { setCurrentUser } = useAccountContext();
    const router = useRouter();
    const signin = () => {
        const user = users.find(
            (u) =>
                u.username === credentials.username &&
                u.password === credentials.password,
        );
        if (!user) {
            setError("Username or password is incorrect.");
            return;
        }
        setCurrentUser(user);
        router.push("/dashboard");
    };
    return (
        <div id="wd-signin-screen" className="max-w-sm">
            <h1 className="mb-3 text-2xl font-semibold">Sign in</h1>
            <input
                id="wd-username"
                placeholder="username"
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                className="wd-username mb-2 w-full rounded border border-neutral-300 px-3 py-2"
            />
            <input
                id="wd-password"
                placeholder="password"
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                className="wd-password mb-2 w-full rounded border border-neutral-300 px-3 py-2"
            />
            <input
                id="wd-ai-signin-note"
                placeholder="sample note"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="mb-2 w-full rounded border border-neutral-300 px-3 py-2"
            />
            {error && (
                <p id="wd-signin-error" className="mb-2 text-sm text-red-600">
                    {error}
                </p>
            )}
            <button
                id="wd-signin-btn"
                type="button"
                onClick={signin}
                className="mb-2 block w-full rounded bg-blue-600 px-3 py-2 text-center text-white"
            >
                Sign in
            </button>
            <Link id="wd-signup-link" href="/account/signup">
                Sign up
            </Link>
        </div>
    );
}