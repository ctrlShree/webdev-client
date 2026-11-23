"use client";
import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import { emptyCourse, useCoursesStore, type Course } from "../store/coursesStore";
import { useEnrollmentsStore } from "../store/enrollmentsStore";
import { useAccountContext } from "../account/AccountContext";
import * as client from "../courses/client";
const field =
  "mb-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5";
export default function Dashboard() {
  const courses = useCoursesStore((state) => state.courses);
  const setCourses = useCoursesStore((state) => state.setCourses);
  const addCourse = useCoursesStore((state) => state.addCourse);
  const updateCourse = useCoursesStore((state) => state.updateCourse);
  const deleteCourse = useCoursesStore((state) => state.deleteCourse);
  const enrollInStore = useEnrollmentsStore((state) => state.enroll);
  const unenrollInStore = useEnrollmentsStore((state) => state.unenroll);
  const { currentUser } = useAccountContext();
  const [myCourses, setMyCourses] = useState<Course[]>([]);
  const [course, setCourse] = useState<Course>(emptyCourse);
  const [showAllCourses, setShowAllCourses] = useState(false);
  const canEdit = currentUser?.role !== "STUDENT";
  useEffect(() => {
    const load = async () => {
      try {
        setCourses(await client.fetchAllCourses());
        setMyCourses(currentUser ? await client.findMyCourses() : []);
      } catch {
        setMyCourses([]);
      }
    };
    load();
  }, [currentUser, setCourses]);
  const isMine = (courseId: string) => myCourses.some((c) => c._id === courseId);
  const visibleCourses = currentUser && !showAllCourses ? myCourses : courses;
  const onAddCourse = async () => {
    const newCourse = await client.createCourse(course);
    addCourse(newCourse);
    setMyCourses([...myCourses, newCourse]);
    if (currentUser) enrollInStore(currentUser._id, newCourse._id);
  };
  const onUpdateCourse = async () => {
    const saved = await client.updateCourse(course);
    updateCourse(saved);
    setMyCourses(myCourses.map((c) => (c._id === saved._id ? saved : c)));
  };
  const onDeleteCourse = async (courseId: string) => {
    await client.deleteCourse(courseId);
    deleteCourse(courseId);
    setMyCourses(myCourses.filter((c) => c._id !== courseId));
  };
  const onEnroll = async (c: Course) => {
    if (!currentUser) return;
    await client.enrollIntoCourse(c._id);
    setMyCourses([...myCourses, c]);
    enrollInStore(currentUser._id, c._id);
  };
  const onUnenroll = async (c: Course) => {
    if (!currentUser) return;
    await client.unenrollFromCourse(c._id);
    setMyCourses(myCourses.filter((m) => m._id !== c._id));
    unenrollInStore(currentUser._id, c._id);
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
              onClick={onAddCourse}
            >
              Add
            </button>
            <button
              type="button"
              className="rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium"
              id="wd-update-course-click"
              onClick={onUpdateCourse}
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
            onDelete={() => onDeleteCourse(c._id)}
            enrolled={currentUser ? isMine(c._id) : undefined}
            onEnroll={() => onEnroll(c)}
            onUnenroll={() => onUnenroll(c)}
          />
        ))}
      </div>
    </div>
  );
}