import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "../routes";
function App() {
  return (
    <>
      <div className="container mx-auto min-h-full shadow">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
