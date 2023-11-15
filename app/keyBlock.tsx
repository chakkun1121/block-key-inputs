"use client";
import { useEffect } from "react";

export default function KeyBlock() {
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      e.preventDefault();
    });
  });
  return <></>;
}
