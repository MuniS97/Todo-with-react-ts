import { render } from "preact";
import { App } from "./app.tsx";
import { UpdateContext } from "./contexts/UpdateCTX.tsx";


render(
  <UpdateContext.Provider value={{ status:false, setStatus: () => {} }}>
    <App />
  </UpdateContext.Provider>,
  document.getElementById("app")!
);
