import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default () => {
  return (
    <>
      <nav className="font-sans min-h-[60px]  border-b bg-opacity-60 bg-clip-padding p-2 bg-indigo-950">
        <div className="flex flex-wrap items-center justify-between px-10 relative">
          <Link to="/">
            <img src={logo} alt="logo" className="w-28 h-28" />
          </Link>

          <ul className="flex max-lg:block max-lg:w-full lg:space-x-6 max-lg:space-y-4 z-10 items-center">
            <li className="max-lg:border-b max-lg:py-2  hover:rounded	 hover:bg-indigo-800/80 py-2 px-5 hover:text-gray-600 transition duration-150 ease-out hover:ease-in">
              <Link
                to="/"
                className=" text-[15px] font-bold text-white block"
              >
                Inicio
              </Link>
            </li>

            <li className="group max-lg:border-b max-lg:py-2 relative z-20  hover:rounded	 hover:bg-indigo-800/80 py-2 px-5 hover:text-gray-600 transition duration-150 ease-out hover:ease-in">
              <Link
                href="#"
                className="hover:text-indigo-600 text-white text-[15px] font-bold lg:hover:fill-[#007bff] block"
              >
                Empresa
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  className="ml-1 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                    data-name="16"
                    data-original="#ffffff"
                    fill="#fff"
                  />
                </svg>
              </Link>
              <ul className="absolute hidden group-hover:block shadow-lg bg-indigo-950  px-6 pb-4 mt-6 space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-50">
                <li className="border-b py-2 ">
                  <Link
                    to="/acercade"
                    className="hover:text-indigo-600 text-white text-[15px] font-bold block"
                  >
                    Acerca De
                  </Link>
                </li>
                <li className="border-b py-2 ">
                  <Link
                    to="/clientes"
                    className="hover:text-indigo-600 text-white text-[15px] font-bold block"
                  >
                    Clientes
                  </Link>
                </li>
                <li className="border-b py-2 ">
                  <Link
                    to="/empresa"
                    className="hover:text-indigo-600 text-white text-[15px] font-bold block"
                  >
                    Empresa
                  </Link>
                </li>
                <li className="border-b py-2 ">
                  <Link
                    to="/socios"
                    className="hover:text-indigo-600 text-white text-[15px] font-bold block"
                  >
                    Socios
                  </Link>
                </li>
              </ul>
            </li>
            <li className="group max-lg:border-b max-lg:py-2 relative z-10  hover:rounded	 hover:bg-indigo-800/80 py-2 px-5 hover:text-gray-600 transition duration-150 ease-out hover:ease-in">
              <a
                href="#"
                className="hover:text-indigo-600 text-white text-[15px] font-bold lg:hover:fill-[#007bff] block"
              >
                Productos
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  className="ml-1 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                    data-name="16"
                    data-original="#f00500"
                    fill="#fff"
                  />
                </svg>
              </a>
              <ul className="absolute hidden group-hover:block shadow-lg bg-indigo-950 px-6 pb-4 mt-6 space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px]">
                <li className="border-b py-2 ">
                  <Link
                    to="/computadoras"
                    className="hover:text-indigo-600 text-white text-[15px] font-bold block"
                  >
                    Computadoras y Laptops
                  </Link>
                </li>
                <li className="border-b py-2 ">
                  <Link
                    to="/telefonos"
                    className="hover:text-indigo-600 text-white  text-[15px] font-bold block"
                  >
                    Telefonos Moviles
                  </Link>
                </li>

                <li className="border-b py-2 ">
                  <Link
                    to="/gaming"
                    className="hover:text-indigo-600 text-white  text-[15px] font-bold block"
                  >
                    Gaming
                  </Link>
                </li>
                <li className="border-b py-2 ">
                  <Link
                    to="/complementos"
                    className="hover:text-indigo-600 text-white  text-[15px] font-bold block"
                  >
                    Complementos
                  </Link>
                </li>
              </ul>
            </li>
            <li className="group max-lg:border-b max-lg:py-2 relative  hover:rounded	 hover:bg-indigo-800/80 py-2 px-5 hover:text-gray-600 transition duration-150 ease-out hover:ease-in">
              <Link
                href="#"
                className="hover:text-indigo-600 text-white text-[15px] font-bold lg:hover:fill-[#007bff] block"
              >
                Recursos
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  className="ml-1 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                    data-name="16"
                    data-original="#fff"
                    fill="#fff"
                  />
                </svg>
              </Link>
              <ul className="absolute hidden group-hover:block shadow-lg bg-indigo-950 px-6 pb-4 mt-6 space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-50">
                <li className="border-b py-2 ">
                  <Link
                    to="/guias-compra"
                    className="hover:text-indigo-600 text-white  text-[15px] font-bold block"
                  >
                    Guías de Compra
                  </Link>
                </li>
                <li className="border-b py-2 ">
                  <Link
                    to="/galeria"
                    className="hover:text-indigo-600 text-white  text-[15px] font-bold block"
                  >
                    Galeria de Productos
                  </Link>
                </li>
                <li className="border-b py-2 ">
                  <Link
                    to="/faq"
                    className="hover:text-indigo-600 text-white  text-[15px] font-bold block"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </li>
            <li className="max-lg:border-b max-lg:py-2  hover:rounded	 hover:bg-indigo-800/80 py-2 px-5 hover:text-gray-600 transition duration-150 ease-out hover:ease-in">
              <Link
                to="/creditos"
                className="hover:text-indigo-600 text-[15px] font-bold text-white block"
              >
                Creditos
              </Link>
            </li>

            <li className="max-lg:border-b max-lg:py-2 ">
              <Link
                to="/"
                className="relative inline-flex h-10 overflow-hidden rounded-md p-[2px] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-blue-50"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-slate-950 px-10 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  Login
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
