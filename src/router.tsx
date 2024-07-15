import AppLaoyut from "@/layouts/AppLaoyut";
import DashboardView from "@/views/DashboardView";
import EditProjectView from "@/views/projects/EditProjectView";
import CreateProjectView from "@/views/projects/CreateProjectView";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLaoyut />}>
          <Route index path="/" element={<DashboardView />} />
          <Route path="/projects/create" element={<CreateProjectView />} />
          <Route path="/projects/:projectId/edit" element={<EditProjectView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
