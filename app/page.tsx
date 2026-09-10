import Link from "next/link";

export default function HomePage() {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Course Catalog</h1>
      <p className="text-gray-600">
        Browse the courses offered this semester in the &quot;Advanced Web
        Technologies&quot; program and see what each one covers.
      </p>
      <Link
        href="/courses"
        className="inline-block w-fit rounded bg-gray-900 px-4 py-2 text-white transition-colors hover:bg-gray-700"
      >
        Browse courses
      </Link>
    </section>
  );
}
