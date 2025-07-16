"use client";
import { usePathname } from "next/navigation";
import Navbar from "./page";

export default function Navbarwrapper() {
  const path = usePathname();
  if (path == "/login") {
    return null;
  } else if (path == "/payment") {
    return null;
  } else if (path == "/register") {
    return null;
  } else {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}
