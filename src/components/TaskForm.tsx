import { useForm, SubmitHandler } from "react-hook-form";
import { RiErrorWarningFill } from "react-icons/ri";
import {v4 as uuidv4} from "uuid"
import { UpdateContext } from "../contexts/UpdateCTX";
import React from "preact/compat"

type Inputs = {
  task: string;
  description: string;
};

export function TaskForm() {
  const baseUrl = import.meta.env.VITE_BASE_URL

  const {
    register,
    handleSubmit,
    reset,
    // watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    fetch(baseUrl + "/tasks", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({...data, id: uuidv4()})
    }).then(res => {
      if(res?.ok) {
        setTimeout(() => {
          alert("Done!!")
          reset()
        }, 500);
      } else {
        console.log('Smth went wrong');
      }
    })
  };

//   console.log(watch("task"));
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={"flex justify-between items-end gap-5 pb-1"}
    >
      <div
        className={"w-full flex items-start justify-center flex-col gap-[2px]"}
      >
        <label
          className={"font-medium text-base cursor-pointer"}
          htmlFor="task"
        >
          Task
        </label>
        <div className={"w-full flex items-center gap-1"}>
          <input
            placeholder="Task name"
            id="task"
            className={
              "w-full h-[30px] px-[10px] font-normal text-sm rounded-md border border-black"
            }
            {...register("task", { required: true })}
          />
          {errors.task && <RiErrorWarningFill size={24} color="red" />}
        </div>
      </div>
      <div
        className={"w-full flex items-start justify-center flex-col gap-[2px]"}
      >
        <label
          className={"font-medium text-base cursor-pointer"}
          htmlFor="description"
        >
          Description
        </label>
        <div className={"w-full flex items-center gap-1"}>
          <input
            id="description"
            placeholder="Description"
            className={
              "w-full h-[30px] px-[10px] font-normal text-sm rounded-md border border-black"
            }
            {...register("description", { required: true })}
          />
          {errors.description && <RiErrorWarningFill size={24} color="red" />}
        </div>
      </div>

      <input
        className={
          "w-full max-w-[80px] px-5 h-[30px] rounded-md border border-black cursor-pointer"
        }
        defaultValue={"ADD"}
        type="submit"
      />
    </form>
  );
}
