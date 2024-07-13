import Logo from "@/components/Logo";
import NavMenu from "@/components/NavMenu";
import { Outlet } from "react-router-dom";

const AppLaoyut = () => {
  return (
    <>
      <header className="bg-gray-800 py-5">
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-between items-center">
          <div className="w-64">
            <Logo />
          </div>
          <NavMenu />
        </div>
      </header>

      <section className="max-w-screen-2xl mx-auto pt-10 p-5">
        <Outlet />
      </section>

      <div className="py-5">
        <p className="text-center">
          Todos los derechos reservados {new Date().getFullYear()}
        </p>
      </div>
    </>
  );
};

export default AppLaoyut;
