import React, { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./routes/Main";
import Start from "./routes/Start";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Start />,
  },
  {
    path: "/galery",
    element: <Main />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
