"use client";
import { useState } from "react";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function QueryParameters() {
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");
  const linkClass =
    "inline-block rounded bg-blue-600 px-3 py-1.5 text-sm text-white no-underline mr-2 mb-2";
  const calc = (operation: string) =>
    `${HTTP_SERVER}/lab5/calculator?operation=${operation}&a=${a}&b=${b}`;
  return (
    <div id="wd-query-parameters">
      <h4>Query Parameters</h4>
      <input
        id="wd-query-parameter-a"
        type="number"
        className="mb-2 block w-40 rounded border border-neutral-300 px-3 py-1.5"
        value={a}
        onChange={(e) => setA(e.target.value)}
      />
      <input
        id="wd-query-parameter-b"
        type="number"
        className="mb-3 block w-40 rounded border border-neutral-300 px-3 py-1.5"
        value={b}
        onChange={(e) => setB(e.target.value)}
      />
      <a id="wd-query-parameter-add" className={linkClass} href={calc("add")}>
        Add {a} + {b}
      </a>
      <a id="wd-query-parameter-subtract" className={linkClass} href={calc("subtract")}>
        Subtract {a} - {b}
      </a>
      <a id="wd-query-parameter-multiply" className={linkClass} href={calc("multiply")}>
        Multiply {a} × {b}
      </a>
      <a id="wd-query-parameter-divide" className={linkClass} href={calc("divide")}>
        Divide {a} ÷ {b}
      </a>
      <hr />
    </div>
  );
}