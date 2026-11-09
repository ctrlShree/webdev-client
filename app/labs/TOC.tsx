"use client";
import "./labs.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
const LINKS = [
    { href: "/labs", id: "wd-home-link", label: "Home", match: (p: string) => p === "/labs" },
    { href: "/labs/lab1", id: "wd-lab1-link", label: "Lab 1", match: (p: string) => p.endsWith("/lab1") || p.includes("/lab1/") },
    { href: "/labs/lab2", id: "wd-lab2-link", label: "Lab 2", match: (p: string) => p.includes("/lab2") },
    { href: "/labs/lab3", id: "wd-lab3-link", label: "Lab 3", match: (p: string) => p.includes("/lab3") },
    { href: "/labs/lab4", id: "wd-lab4-toc-link", label: "Lab 4", match: (p: string) => p.includes("/lab4") },
    { href: "/book/ch1", id: "wd-toc-book-link", label: "Chapter 1", match: () => false },
    { href: "/", id: "wd-kambaz-link", label: "Kambaz", match: () => false },
    { href: "https://kambaz.dev/book/ch4", id: "wd-book-ch4-link", label: "Book Ch4", match: () => false },
] as const;
export default function TOC() {
    const pathname = usePathname() ?? "";
    return (
        <>
            <ul className="space-y-1">
                {LINKS.map((link) => {
                    const active = link.match(pathname);
                    return (
                        <li key={link.id}>
                            <Link
                                href={link.href}
                                id={link.id}
                                aria-current={active ? "page" : undefined}
                                className={
                                    active
                                        ? "rounded-full bg-blue-600 px-3 py-0.5 text-white no-underline"
                                        : "rounded-full px-3 py-0.5 text-blue-600 no-underline hover:bg-blue-50"
                                }
                            >
                                {link.label}
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <hr />
            <p>Shreyash Sawant</p>
            <p style={{ fontSize: "0.8em" }}>&quot;Build first, polish later.&quot;</p>
        </>
    );
}