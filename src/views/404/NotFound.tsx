import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h1 className="from-black text-center text-4xl capitalize text-white">
        Página no encontrada
      </h1>
      <p className="mt-10 text-center text-white">
        Tal vez quieras volver a{" "}
        <Link to={"/"} className="text-fuchsia-500">
          Proyectos
        </Link>
      </p>
    </>
  );
};

export default NotFound;
