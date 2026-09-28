import Link from "next/link";

export default function TOC() {
    return (
        <>
            <ul>
                <li>
                    <Link href="/labs" id="wd-home-link">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/labs/lab1">Lab 1</Link>
                </li>
                <li>
                    <Link href="/labs/lab2">Lab 2</Link>
                </li>
                <li>
                    <Link href="/labs/lab3">Lab 3</Link>
                </li>
                <li>
                    <Link href="/book/ch1" id="wd-toc-book-link">
                        Chapter 1
                    </Link>
                </li>
                <li>
                    <Link href="/" id="wd-kambaz-link">
                        Kambaz
                    </Link>
                </li>
            </ul>
            <hr />
            <p>Shreyash Sawant</p>
            <p style={{ fontSize: "0.8em" }}>&quot;Build first, polish later.&quot;</p>
        </>
    );
}