"use client";
import { useState } from "react";
import CourseCard from "./CourseCard";
import { emptyCourse, useCoursesStore, type Course } from "../store/coursesStore";
import { isEnrolled, useEnrollmentsStore } from "../store/enrollmentsStore";
import { useAccountContext } from "../account/AccountContext";
const field =
  "mb-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5";
export default function Dashboard() {
  const courses = useCoursesStore((state) => state.courses);
  const addCourse = useCoursesStore((state) => state.addCourse);
  const updateCourse = useCoursesStore((state) => state.updateCourse);
  const enrollments = useEnrollmentsStore((state) => state.enrollments);
  const enroll = useEnrollmentsStore((state) => state.enroll);
  const unenroll = useEnrollmentsStore((state) => state.unenroll);
  const { currentUser } = useAccountContext();
  const [course, setCourse] = useState<Course>(emptyCourse);
  const [showAllCourses, setShowAllCourses] = useState(false);
  const canEdit = currentUser?.role !== "STUDENT";
  const visibleCourses =
    currentUser && !showAllCourses
      ? courses.filter((c) => isEnrolled(enrollments, currentUser._id, c._id))
      : courses;
  const add = () => {
    const newId = addCourse(course);
    if (currentUser) enroll(currentUser._id, newId);
  };
  return (
    <div id="wd-dashboard">
      <div className="flex items-center justify-between">
        <h1 id="wd-dashboard-title" className="text-3xl font-semibold">
          Dashboard
        </h1>
        {currentUser && (
          <button
            type="button"
            id="wd-enrollments-toggle"
            className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
            onClick={() => setShowAllCourses(!showAllCourses)}
          >
            {showAllCourses ? "My Enrollments" : "Enrollments"}
          </button>
        )}
      </div>
      <hr className="my-3" />
      {canEdit && (
        <>
          <h5 className="flex flex-wrap items-center gap-2">
            New Course
            <button
              type="button"
              className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
              id="wd-add-new-course-click"
              onClick={add}
            >
              Add
            </button>
            <button
              type="button"
              className="rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium"
              id="wd-update-course-click"
              onClick={() => updateCourse(course)}
            >
              Update
            </button>
          </h5>
          <input
            className={`mt-2 ${field}`}
            value={course.name}
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
            id="wd-course-name"
            placeholder="Course name"
          />
          <input
            className={field}
            value={course.number}
            onChange={(e) => setCourse({ ...course, number: e.target.value })}
            id="wd-course-number"
            placeholder="Course number"
          />
          <input
            type="date"
            className={field}
            value={course.startDate}
            onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
            id="wd-course-start-date"
          />
          <textarea
            className={`mb-3 ${field}`}
            rows={3}
            value={course.description}
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
            id="wd-course-description"
          />
          <hr className="my-3" />
        </>
      )}
      <h2 id="wd-dashboard-published" className="text-xl font-medium">
        {currentUser && !showAllCourses ? "Enrolled" : "Published"} Courses ({visibleCourses.length})
      </h2>
      <hr className="my-3" />
      <div
        id="wd-dashboard-courses"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
        {visibleCourses.map((c) => (
          <CourseCard
            key={c._id}
            course={c}
            canEdit={canEdit}
            onEdit={() => setCourse(c)}
            enrolled={currentUser ? isEnrolled(enrollments, currentUser._id, c._id) : undefined}
            onEnroll={() => currentUser && enroll(currentUser._id, c._id)}
            onUnenroll={() => currentUser && unenroll(currentUser._id, c._id)}
          />
        ))}
      </div>
    </div>
  );
}