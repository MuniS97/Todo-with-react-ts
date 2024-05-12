import React from "preact/compat";

interface TaskRenderProps {
  Title: string;
  Description: string;
  Checked: boolean;
  Id: number;
}

export const TaskRender: React.FC<TaskRenderProps> = ({
  Title,
  Description,
  Checked,
}) => {
  return (
    <div className={"w-[200px] h-full p-[10px] rounded-lg border border-black shadow-sm"}>
      <h4 className={"font-medium text-base"}>{Title}</h4>
      <p className={"font-normal text-sm"}>{Description}</p>
      <input type="checkbox" name="checked" id="checked" checked={Checked} />
    </div>
  );
};
