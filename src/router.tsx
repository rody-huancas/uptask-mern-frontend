import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLaoyut from "@/layouts/AppLaoyut";
import DashboardView from "@/views/DashboardView";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLaoyut />}>
          <Route index path="/" element={<DashboardView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
