import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppLaoyut from "@/layouts/AppLaoyut";
import AuthLayout from "@/layouts/AuthLayout";
import ProfileLayout from "@/layouts/ProfileLayout";

import NotFound from "@/views/404/NotFound";
import LoginView from "@/views/auth/LoginView";
import ProfileView from "@/views/profile/ProfileView";
import RegisterView from "@/views/auth/RegisterView";
import DashboardView from "@/views/DashboardView";
import ConfirmAccount from "@/views/auth/ConfirmAccount";
import NewPasswordView from "@/views/auth/NewPasswordView";
import EditProjectView from "@/views/projects/EditProjectView";
import ProjectTeamView from "@/views/projects/ProjectTeamView";
import CreateProjectView from "@/views/projects/CreateProjectView";
import ForgotPasswordView from "@/views/auth/ForgotPasswordView";
import RequestNewCodeView from "@/views/auth/RequestNewCodeView";
import ProjectDetailsView from "@/views/projects/ProjectDetailsView";
import ChangePasswordView from "@/views/profile/ChangePasswordView";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLaoyut />}>
          <Route index path="/" element={<DashboardView />} />
          <Route path="/projects/create" element={<CreateProjectView />} />
          <Route path="/projects/:projectId" element={<ProjectDetailsView />} />
          <Route path="/projects/:projectId/edit" element={<EditProjectView />} />
          <Route path="/projects/:projectId/team" element={<ProjectTeamView />} />

          <Route element={<ProfileLayout />}>
            <Route path="/profile" element={<ProfileView />} />
            <Route path="/profile/password" element={<ChangePasswordView />} />
          </Route>
        </Route>

        {/* Auth */}
        <Route element={<AuthLayout />}>
          <Route path="/auth/login" element={<LoginView />} />
          <Route path="/auth/register" element={<RegisterView />} />
          <Route path="/auth/confirm-account" element={<ConfirmAccount />} />
          <Route path="/auth/request-code" element={<RequestNewCodeView />} />
          <Route path="/auth/forgot-password" element={<ForgotPasswordView />} />
          <Route path="/auth/new-password" element={<NewPasswordView />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
