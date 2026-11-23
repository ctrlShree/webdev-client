"use client";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import Lesson from "./Lesson";
import Module from "./Module";
import ModulesControls from "./ModulesControls";
import { useModulesStore } from "../../../store/modulesStore";
import * as client from "../../client";
export default function Modules() {
  const { cid } = useParams();
  const courseId = cid as string;
  const allModules = useModulesStore((state) => state.modules);
  const setModules = useModulesStore((state) => state.setModules);
  useEffect(() => {
    const load = async () => {
      setModules(await client.findModulesForCourse(courseId));
    };
    load();
  }, [courseId, setModules]);
  const modules = allModules.filter((module) => module.course === courseId);
  return (
    <div>
      <ModulesControls />
      <ul id="wd-modules" className="m-0 list-none p-0">
        {modules.map((module) => (
          <Module key={module._id} module={module}>
            {module.lessons?.map((lesson) => (
              <Lesson key={lesson._id} title={lesson.name}>
                {lesson.description ? (
                  <li className="wd-content-item">{lesson.description}</li>
                ) : null}
              </Lesson>
            ))}
          </Module>
        ))}
      </ul>
    </div>
  );
}