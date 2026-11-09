"use client";
import { create } from "zustand";
import assignmentsJson from "../database/assignments.json";
export type Assignment = {
  _id: string;
  title: string;
  course: string;
  description?: string;
  points?: number;
  due?: string;
  available?: string;
  until?: string;
};
export const emptyAssignment: Assignment = {
  _id: "new",
  title: "New Assignment",
  course: "",
  description: "New assignment description",
  points: 100,
  due: "",
  available: "",
  until: "",
};
type AssignmentsStore = {
  assignments: Assignment[];
  addAssignment: (assignment: Assignment) => string;
  updateAssignment: (assignment: Assignment) => void;
  deleteAssignment: (assignmentId: string) => void;
};
export const useAssignmentsStore = create<AssignmentsStore>((set) => ({
  assignments: assignmentsJson as unknown as Assignment[],
  addAssignment: (assignment) => {
    const _id = crypto.randomUUID();
    set((state) => ({
      assignments: [...state.assignments, { ...assignment, _id }],
    }));
    return _id;
  },
  updateAssignment: (assignment) =>
    set((state) => ({
      assignments: state.assignments.map((a) =>
        a._id === assignment._id ? assignment : a,
      ),
    })),
  deleteAssignment: (assignmentId) =>
    set((state) => ({
      assignments: state.assignments.filter((a) => a._id !== assignmentId),
    })),
}));
export const findAssignment = (assignments: Assignment[], aid: string) =>
  assignments.find((a) => a._id === aid);