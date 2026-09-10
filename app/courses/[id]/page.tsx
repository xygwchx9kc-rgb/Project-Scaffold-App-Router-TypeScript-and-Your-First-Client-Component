import { notFound } from "next/navigation";
import { getCourse, getCourses } from "@/lib/courses";
import { LikeButton } from "@/components/LikeButton";

export async function generateStaticParams() {
  const courses = await getCourses();
  return courses.map((course) => ({ id: course.id }));
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const course = await getCourse(id);

  if (!course) {
    notFound();
  }

  return (
    <article className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">{course.title}</h1>
      <p className="text-gray-600">{course.description}</p>
      <p className="text-sm text-gray-500">{course.credits} credits</p>
      <LikeButton initialLikes={course.likes} />
    </article>
  );
}
