import Link from "next/link";

export default function CourseNotFound() {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Course not found</h1>
      <p className="text-gray-600">
        We couldn&apos;t find the course you&apos;re looking for.
      </p>
      <Link href="/courses" className="w-fit text-blue-600 underline">
        Back to courses
      </Link>
    </section>
  );
}
