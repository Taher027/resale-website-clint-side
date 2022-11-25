import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";

function App() {
  return (
    <div className="bg-[#0F3460] text-white w-[1400px] mx-auto" >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
