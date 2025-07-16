"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full px-6 py-4 bg-background border-b border-border flex items-center justify-between">
      <Link href="/" className="text-xl font-bold">
        MyApp
      </Link>

      <div className="flex items-center gap-4">
        <Link
          href="/login"
          className={`text-sm font-medium ${
            pathname === "/login" ? "text-primary" : "text-muted-foreground"
          }`}
        >
          Login
        </Link>
        <Link
          href="/register"
          className={`text-sm font-medium ${
            pathname === "/register" ? "text-primary" : "text-muted-foreground"
          }`}
        >
          Register
        </Link>
      </div>
    </nav>
  );
}
