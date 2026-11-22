"use client";
import { useState } from "react";

const SYMBOLS: Record<string, string> = {
  add: "+",
  subtract: "-",
  multiply: "×",
  divide: "÷",
};

export default function CalculatorNextWebApiClient() {
  const [a, setA] = useState("3");
  const [b, setB] = useState("5");
  const [operation, setOperation] = useState("add");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const calculate = async (op: string) => {
    const response = await fetch(
      `/api/lab5/calculator?a=${encodeURIComponent(a)}&b=${encodeURIComponent(b)}&operation=${op}`
    );
    const data = await response.json();
    if (!response.ok) {
      setError(data.error);
      setResult("");
      return;
    }
    setError("");
    setResult(`${data.a} ${SYMBOLS[op]} ${data.b} = ${data.result}`);
  };
  const input =
    "mb-2 block w-40 rounded border border-neutral-300 px-3 py-1.5";
  return (
    <div id="wd-calculator-next">
      <h4>Calculator (Next.js Web API)</h4>
      <label className="block">
        A:
        <input id="wd-calc-a" className={input} placeholder="A" value={a}
          onChange={(e) => setA(e.target.value)} />
      </label>
      <label className="block">
        B:
        <input id="wd-calc-b" className={input} placeholder="B" value={b}
          onChange={(e) => setB(e.target.value)} />
      </label>
      <label className="block">
        Operation:
        <select
          id="wd-calc-operation"
          className={input}
          value={operation}
          onChange={(e) => {
            setOperation(e.target.value);
            calculate(e.target.value);
          }}
        >
          <option value="add">+</option>
          <option value="subtract">-</option>
          <option value="multiply">×</option>
          <option value="divide">÷</option>
          <option value="modulo">% (unsupported)</option>
        </select>
      </label>
      <button
        type="button"
        id="wd-calc-button"
        className="mb-2 rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
        onClick={() => calculate(operation)}
      >
        Calculate
      </button>
      <input
        id="wd-calc-result"
        readOnly
        className="mb-2 block w-full max-w-md rounded border border-neutral-300 bg-neutral-50 px-3 py-1.5"
        value={result}
      />
      {error && (
        <p className="rounded bg-red-100 px-3 py-2 text-red-800">{error}</p>
      )}
      <hr />
    </div>
  );
}