import "./app.css";
import { TaskLength } from "./components/TaskLength";
import { TaskForm } from "./components/TaskForm";
import React from "preact/compat";
import { TaskRender } from "./components/TaskRender";

interface ITask {
  id: string
  task: string
  description: string
  checked: boolean
  update: boolean
  setUpdate: (arg: boolean) => void
}

export function App() {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [tasks, setTasks] = React.useState<ITask[]>([]); 
  const [update, setUpdate] = React.useState<boolean>(false)
  const [value, setValue] = React.useState<string>("")

  React.useEffect(() => {
    fetch(baseUrl + "/tasks").then(res => res.json()).then(res => {
        setTasks(res) 
    })
  }, [update]);

  return (
    <>
      <div
        className={
          "w-full max-w-[700px] h-full shadow-lg rounded-lg mx-auto mt-[100px] mb-[50px] p-[10px]"
        }
      >
        {<TaskLength TaskCount={tasks?.length} />}

        {<TaskForm update={update} setUpdate={setUpdate}/>}
      </div>

      <div
        className={
          "w-full max-w-[1000px] min-h-[200px] h-full shadow-lg rounded-lg mx-auto p-[10px] flex flex-wrap gap-5 items-start justify-center"
        }
      >
        {tasks.length ? (
            
            tasks.map((item: ITask) => (
                <TaskRender update={update} setUpdate={setUpdate} Id={item.id} Checked={item.checked} Description={item.description} Task={item.task}/>
            ))
             ) : <span>Loading.....</span>}
      </div>
    </>
  );
}
