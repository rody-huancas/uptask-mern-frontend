import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppLaoyut from "@/layouts/AppLaoyut";
import LoginView from "@/views/auth/LoginView";
import AuthLayout from "@/layouts/AuthLayout";
import RegisterView from "@/views/auth/RegisterView";
import DashboardView from "@/views/DashboardView";
import ConfirmAccount from "@/views/auth/ConfirmAccount";
import EditProjectView from "@/views/projects/EditProjectView";
import CreateProjectView from "@/views/projects/CreateProjectView";
import ProjectDetailsView from "@/views/projects/ProjectDetailsView";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLaoyut />}>
          <Route index path="/" element={<DashboardView />} />
          <Route path="/projects/create" element={<CreateProjectView />} />
          <Route path="/projects/:projectId" element={<ProjectDetailsView />} />
          <Route path="/projects/:projectId/edit" element={<EditProjectView />} />
        </Route>

        {/* Auth */}
        <Route element={<AuthLayout />}>
          <Route path="/auth/login" element={<LoginView />} />
          <Route path="/auth/register" element={<RegisterView />} />
          <Route path="/auth/confirm-account" element={<ConfirmAccount />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
