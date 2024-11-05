import { RouterProvider } from "react-router-dom";
import RouterData from "./Routes";

function App() {
  const route = RouterData();
  return (
    <div className="App">
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
