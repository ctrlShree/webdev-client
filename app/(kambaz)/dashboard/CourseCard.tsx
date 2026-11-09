import Link from "next/link";
import Image from "next/image";
import type { MouseEvent } from "react";
import { useCoursesStore, type Course } from "../store/coursesStore";
const button =
  "inline-flex items-center justify-center rounded px-3 py-1.5 text-sm font-medium";
export default function CourseCard({
  course,
  canEdit,
  onEdit,
  enrolled,
  onEnroll,
  onUnenroll,
}: {
  course: Course;
  canEdit: boolean;
  onEdit: () => void;
  enrolled?: boolean;
  onEnroll: () => void;
  onUnenroll: () => void;
}) {
  const deleteCourse = useCoursesStore((state) => state.deleteCourse);
  const stay = (event: MouseEvent, action: () => void) => {
    event.preventDefault();
    event.stopPropagation();
    action();
  };
  return (
    <div className="wd-dashboard-course w-[300px] max-w-full overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm">
      <Link
        href={`/courses/${course._id}/home`}
        className="wd-dashboard-course-link block text-neutral-900 no-underline"
      >
        <Image
          src={course.image}
          width={300}
          height={160}
          alt={course.name}
          className="h-40 w-full object-cover"
        />
        <div className="p-4">
          <h5 className="wd-dashboard-course-title m-0 mb-2 truncate whitespace-nowrap text-lg font-semibold">
            {course.name}
          </h5>
          <p className="wd-dashboard-course-description m-0 mb-3 h-[100px] overflow-hidden text-sm text-neutral-600">
            {course.description}
          </p>
          <div className="flex flex-wrap gap-2">
            <button type="button" className={`${button} bg-blue-600 text-white`}>
              Go
            </button>
            {canEdit && (
              <>
                <button
                  type="button"
                  id="wd-edit-course-click"
                  className={`${button} bg-yellow-400`}
                  onClick={(event) => stay(event, onEdit)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  id="wd-delete-course-click"
                  className={`${button} bg-red-600 text-white`}
                  onClick={(event) => stay(event, () => deleteCourse(course._id))}
                >
                  Delete
                </button>
              </>
            )}
            {enrolled === true && (
              <button
                type="button"
                id="wd-unenroll-course-click"
                className={`${button} bg-red-600 text-white`}
                onClick={(event) => stay(event, onUnenroll)}
              >
                Unenroll
              </button>
            )}
            {enrolled === false && (
              <button
                type="button"
                id="wd-enroll-course-click"
                className={`${button} bg-green-600 text-white`}
                onClick={(event) => stay(event, onEnroll)}
              >
                Enroll
              </button>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}