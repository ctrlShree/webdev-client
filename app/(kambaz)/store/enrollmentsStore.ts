"use client";
import { create } from "zustand";
import enrollmentsJson from "../database/enrollments.json";
export type Enrollment = { _id: string; user: string; course: string };
type EnrollmentsStore = {
  enrollments: Enrollment[];
  enroll: (userId: string, courseId: string) => void;
  unenroll: (userId: string, courseId: string) => void;
};
export const useEnrollmentsStore = create<EnrollmentsStore>((set) => ({
  enrollments: enrollmentsJson as unknown as Enrollment[],
  enroll: (userId, courseId) =>
    set((state) =>
      state.enrollments.some((e) => e.user === userId && e.course === courseId)
        ? state
        : {
            enrollments: [
              ...state.enrollments,
              { _id: crypto.randomUUID(), user: userId, course: courseId },
            ],
          },
    ),
  unenroll: (userId, courseId) =>
    set((state) => ({
      enrollments: state.enrollments.filter(
        (e) => !(e.user === userId && e.course === courseId),
      ),
    })),
}));
export const isEnrolled = (
  enrollments: Enrollment[],
  userId: string,
  courseId: string,
) => enrollments.some((e) => e.user === userId && e.course === courseId);