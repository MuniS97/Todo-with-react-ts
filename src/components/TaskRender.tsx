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
  Id,
}) => {
  const baseUrl = import.meta.env.VITE_BASE_URL;

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
        <button 
          onClick={() => {

          }}
          className={"cursor-pointer"}
        >
          <TbEdit size={22} color="blue" />
        </button>
        <button 
          onClick={() => {            
            const request = window.confirm("Are u sure that I wanna delete this task")
            if(request) {
              fetch(baseUrl + "/tasks/" + Id, {
                method: "DELETE"
              })
                .then((res) => {
                  if(res.status !== 200 && res.status !== 201) {
                    console.log("Smth went wrong, try again please! ))");
                  } else {
                    setTimeout(() => {
                      alert("Done!!")
                    }, 500);
                  }
                });
            }
          }}
          className={"cursor-pointer"}
        >
          <RiDeleteBin6Line size={22} color="red" />
        </button>
      </div>
    </div>
  );
};
