"use client";

import { useEffect, useRef, useState } from "react";

type Status = "idle" | "copied" | "failed";

export function CopyEmailButton({ email }: { email: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = async () => {
    window.clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
    timer.current = window.setTimeout(() => setStatus("idle"), 2400);
  };

  return (
    <>
      <button type="button" onClick={copy} className="btn btn-secondary min-w-[9.5rem]">
        {status === "copied" ? "Copied" : "Copy email"}
      </button>
      <p className="label min-h-[1.45em]" aria-live="polite">
        {status === "copied"
          ? "Email address copied to the clipboard."
          : status === "failed"
            ? "Copy didn’t work. Select the address above instead."
            : ""}
      </p>
    </>
  );
}
