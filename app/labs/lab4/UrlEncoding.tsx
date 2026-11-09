"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
const field = "mb-2 block w-full rounded border border-neutral-300 px-3 py-1.5";
const green = "mb-2 w-full rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white";
const blue =
  "mb-2 block w-full rounded bg-blue-600 px-3 py-1.5 text-center text-sm font-medium text-white no-underline";
export default function UrlEncoding() {
  const [a, setA] = useState("5");
  const [b, setB] = useState("10");
  const [c, setC] = useState("2");
  const router = useRouter();
  const baseUrl = "/labs/lab4/url-encoding";
  const queryUrl = () => {
    const params = new URLSearchParams();
    params.set("a", a);
    params.set("b", b);
    params.set("c", c);
    return `${baseUrl}/query-params?${params.toString()}`;
  };
  const pathUrl = (withC: boolean) =>
    `${baseUrl}/path-params/${encodeURIComponent(a)}/${encodeURIComponent(b)}` +
    (withC ? `/${encodeURIComponent(c)}` : "");
  return (
    <div id="wd-url-encoding" className="max-w-xl">
      <h2>Addition Calculator</h2>
      <p>
        Enter numbers and navigate using either buttons (programmatic) or links
        (declarative):
      </p>
      <input type="number" value={a} onChange={(e) => setA(e.target.value)} className={field} id="wd-url-a" />
      <input type="number" value={b} onChange={(e) => setB(e.target.value)} className={field} id="wd-url-b" />
      <input type="number" value={c} onChange={(e) => setC(e.target.value)} className={`${field} mb-3`} id="wd-url-c" />
      <h4>Programmatic navigation (using router.push):</h4>
      <button type="button" onClick={() => router.push(queryUrl())} className={green} id="wd-url-query-programmatic">
        {a} + {b} + {c} → Query Params (programmatic)
      </button>
      <button type="button" onClick={() => router.push(pathUrl(false))} className={green} id="wd-url-path-programmatic">
        {a} + {b} → Path Params (programmatic)
      </button>
      <button type="button" onClick={() => router.push(pathUrl(true))} className={`${green} mb-3`} id="wd-url-path-c-programmatic">
        {a} + {b} + {c} → Path Params (programmatic)
      </button>
      <h4>Declarative navigation (using Link):</h4>
      <Link
        href={`${baseUrl}/query-params?a=${encodeURIComponent(a)}&b=${encodeURIComponent(b)}&c=${encodeURIComponent(c)}`}
        className={blue}
        id="wd-url-query-link"
      >
        {a} + {b} + {c} → Query Params (Link)
      </Link>
      <Link href={pathUrl(false)} className={blue} id="wd-url-path-link">
        {a} + {b} → Path Params (Link)
      </Link>
      <Link href={pathUrl(true)} className={blue} id="wd-url-path-c-link">
        {a} + {b} + {c} → Path Params (Link)
      </Link>
      <hr />
    </div>
  );
}