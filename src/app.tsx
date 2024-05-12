import "./app.css";
import { TaskLength } from "./components/TaskLength";
import { TaskForm } from "./components/TaskForm";
import React from "preact/compat";
import { TaskRender } from "./components/TaskRender";


export function App() {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [tasks, setTasks] = React.useState([]);

  React.useEffect(() => {
    fetch(baseUrl + "/tasks").then(res => res.json()).then(res => {
        setTasks(res) 
    })
  }, []);

  return (
    <>
      <div
        className={
          "w-full max-w-[700px] h-full shadow-lg rounded-lg mx-auto mt-[100px] mb-[50px] p-[10px]"
        }
      >
        {<TaskLength TaskCount={3} />}

        {<TaskForm />}
      </div>

      <div
        className={
          "w-full max-w-[700px] min-h-[200px] h-full shadow-lg rounded-lg mx-auto p-[10px] flex flex-wrap gap-5 items-start justify-center"
        }
      >
        {/* {tasks ? {
            
            // tasks.map(item => (
            //     <TaskRender Id={item.id} Checked={item.checked} Description={item.description} Title={item.title}/>
            // ))
             } : <span>Loading.....</span>} */}
      </div>
    </>
  );
}
