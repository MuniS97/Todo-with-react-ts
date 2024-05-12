import "./app.css";
import { TaskLength } from "./components/TaskLength";
import { TaskForm } from "./components/TaskForm";

export function App() {
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

      </div>
    </>
  );
}
