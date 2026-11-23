import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { useModulesStore } from "../../../store/modulesStore";
import * as client from "../../client";
export default function ModuleControlButtons({
  moduleId,
}: {
  moduleId: string;
}) {
  const deleteModule = useModulesStore((state) => state.deleteModule);
  const editModule = useModulesStore((state) => state.editModule);
  const onRemoveModule = async () => {
    await client.deleteModule(moduleId);
    deleteModule(moduleId);
  };
  return (
    <div className="flex items-center gap-2">
      <FaPencilAlt
        className="wd-edit-module cursor-pointer text-base text-blue-600"
        onClick={() => editModule(moduleId)}
        title="Edit module"
      />
      <FaTrash
        className="wd-delete-module cursor-pointer text-base text-red-600"
        onClick={onRemoveModule}
        title="Delete module"
      />
      <GreenCheckmark />
      <BsPlus className="text-3xl" />
      <IoEllipsisVertical className="text-xl" />
    </div>
  );
}