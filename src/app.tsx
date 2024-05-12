import React from "preact/compat";
import "./app.css";

export function App() {
  const baseUrl: string = import.meta.env.VITE_BASE_URL;
  const [todo, setTodo] = React.useState([]);

  React.useEffect(() => {
    fetch(baseUrl + "/tasks")
        .then((res) => res.json())
        .then((res) => setTodo(res));
  });
  return (
  <div className={"w-full "}>
    <h1>{todo.length}</h1>
  </div>
  )
}
