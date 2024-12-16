import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Header from "./components/Header.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddNote from "./components/AddNote.jsx";
import UpdateNote from "./components/UpdateNote.jsx";
import ProjectDetails from "./components/ProjectDetails.jsx";
import PageNotFound from "./components/PageNotFound.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <App />
      </>
    ),
  },
  {
    path: "AddNote",
    element: (
      <>
        <Header />
        <AddNote />
      </>
    ),
  },
  {
    path: "UpdateNote/:id",
    element: (
      <>
        <Header />
        <UpdateNote />
      </>
    ),
  },
  {
    path: "/ProjectDetails",
    element: (
      <>
        <Header />
        <ProjectDetails />
      </>
    ),
  },
  {
    path: "*",
    element: (
      <>
        <PageNotFound />
      </>
    ),
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="bg-slate-900 min-h-screen w-full shadow-lg">
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);
