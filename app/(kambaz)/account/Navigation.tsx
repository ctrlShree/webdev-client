"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../kambaz.css";
import { useAccountContext } from "./AccountContext";

const LABELS = { signin: "Signin", signup: "Signup", profile: "Profile" } as const;

export default function AccountNavigation() {
    const pathname = usePathname() ?? "";
    const { currentUser } = useAccountContext();
    const links = currentUser
        ? (["profile"] as const)
        : (["signin", "signup"] as const);

    const itemClass = (href: string) =>
        pathname === href
            ? "list-group-item active border-0"
            : "list-group-item border-0 text-red-600";

    return (
        <div id="wd-account-navigation" className="wd list-group rounded-none text-lg">
            {links.map((link) => (
                <Link
                    key={link}
                    id={`wd-account-${link}-link`}
                    href={`/account/${link}`}
                    className={itemClass(`/account/${link}`)}
                >
                    {LABELS[link]}
                </Link>
            ))}
        </div>
    );
}