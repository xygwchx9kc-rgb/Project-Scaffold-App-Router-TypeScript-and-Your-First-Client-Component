import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Course Catalog",
  description: "A course catalog built with Next.js App Router.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <nav className="border-b border-gray-200">
          <div className="mx-auto flex max-w-4xl items-center gap-2 px-4 py-4">
            <Link
              href="/"
              className="rounded px-3 py-2 font-semibold transition-colors hover:bg-gray-100"
            >
              Home
            </Link>
            <Link
              href="/courses"
              className="rounded px-3 py-2 transition-colors hover:bg-gray-100"
            >
              Courses
            </Link>
            <Link
              href="/about"
              className="rounded px-3 py-2 transition-colors hover:bg-gray-100"
            >
              About
            </Link>
          </div>
        </nav>
        <main className="mx-auto max-w-4xl px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
