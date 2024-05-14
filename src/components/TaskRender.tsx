import React from "preact/compat";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";

interface TaskRenderProps {
  Task: string;
  Description: string;
  Checked: boolean;
  Id: string;
}


export const TaskRender: React.FC<TaskRenderProps> = ({
  Task,
  Description,
  Checked,
}) => {

  return (
    <div
      className={
        "w-[300px] h-[120px] p-[10px] rounded-lg border border-black shadow-sm flex flex-col items-start justify-start"
      }
    >
      {Task?.length > 15 ? (
        <h4
          className={`font-medium text-base ${
            Checked ? "line-through text-gray-500" : "no-underline text-black"
          }`}
        >
          {Task.slice(0, 15)}...
        </h4>
      ) : (
        <h4
          className={`font-medium text-base ${
            Checked ? "line-through text-gray-500" : "no-underline text-black"
          }`}
        >
          {Task}
        </h4>
      )}
      {Description.length > 80 ? (
        <p className={"font-normal text-sm"}>{Description.slice(0, 80)}...</p>
      ) : (
        <p className={"font-normal text-sm"}>{Description}</p>
      )}
      <div className={"w-full h-full flex items-end justify-end gap-1"}>
        <button className={"cursor-pointer"}>
          <TbEdit size={22} color="blue"/>
        </button>
        <button className={"cursor-pointer"}>
          <RiDeleteBin6Line size={22} color="red"/>
        </button>
      </div>
    </div>
  );
};
