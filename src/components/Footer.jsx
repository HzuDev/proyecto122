import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Footer() {
  return (
    
    <footer>
    <svg xmlns="http://www.w3.org/2000/svg" className="-mb-0.5 w-full" viewBox="0 0 1367.743 181.155">
      <defs>
        <linearGradient id="gradient" gradientTransform="rotate(90)">
          <stop offset="0%" stopColor="#1D4ED8" />
          <stop offset="100%" stopColor="#312E81" />
        </linearGradient>
      </defs>
      <path
        style={{ fill: 'url(#gradient)' }}
        id="wave"
        data-name="wave"
        d="M0,0S166.91-56.211,405.877-49.5,715.838,14.48,955.869,26.854,1366,0,1366,0V115H0Z"
        transform="translate(1.743 66.155)"
      ></path>
    </svg>


    <div className="bg-gradient-to-b from-gray-100 to-transparent dark:from-indigo-900 dark:to-transparent pt-1">
      <div className="container m-auto space-y-8 px-6 text-gray-100 dark:text-gray-400 md:px-12 lg:px-20">
        <div className="grid grid-cols-8 gap-6 md:gap-0">
          <div className="col-span-8 border-r border-gray-100 dark:border-gray-500 md:col-span-2 lg:col-span-3">
            <div
              className="flex items-center justify-between gap-6 border-b border-white dark:border-gray-200 py-6 md:block md:space-y-6 md:border-none md:py-0"
            >
              <img src={ logo } alt="logo empresa" className="w-64 h-50 " />
              


            </div>
          </div>
          <div className="col-span-8 md:col-span-6 lg:col-span-5">
            <div className="grid grid-cols-2 gap-6 pb-16 sm:grid-cols-3 md:pl-16">
              <div>
                <h6 className="text-lg font-medium text-gray-800 dark:text-gray-200">Empresa</h6>
                <ul className="mt-4 list-inside space-y-4">
                  <li>
                    <Link to="/" className="transition hover:text-indigo-300">Acerca De</Link>
                  </li>
                  <li>
                    <Link to="/" className="transition hover:text-indigo-300">Clientes</Link>
                  </li>
                  <li>
                    <Link to="/" className="transition hover:text-indigo-300">Empresa</Link>
                  </li>
                  <li>
                    <Link to="/" className="transition hover:text-indigo-300">Socios</Link>
                  </li>
                  
                </ul>
              </div>
              <div>
                <h6 className="text-lg font-medium text-gray-800 dark:text-gray-200">Productos</h6>
                <ul className="mt-4 list-inside space-y-4">
                  <li>
                    <Link to="/" className="transition hover:text-indigo-300">Computadoras y Laptops</Link>
                  </li>
                  <li>
                    <Link to="/" className="transition hover:text-indigo-300">Telefonos Moviles </Link>
                  </li>
                  <li>
                    <Link to="/" className="transition hover:text-indigo-300">Gaming</Link>
                  </li>
                  <li>
                    <Link to="/" className="transition hover:text-indigo-300">Complementos</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h6 className="text-lg font-medium text-gray-800 dark:text-gray-200">Recursos</h6>
                <ul className="mt-4 list-inside space-y-4">
                  <li>
                    <Link to="/" className="transition hover:text-indigo-300">Guias de Compra</Link>
                  </li>
                  <li>
                    <Link to="/" className="transition hover:text-indigo-300">Glaeria de Productos</Link>
                  </li>
                  <li>
                    <Link to="/" className="transition hover:text-indigo-300">FAQ</Link>
                  </li>
                  
                </ul>
              </div>
            </div>
            <div className="flex justify-between border-t border-gray-100 dark:border-gray-400 py-4 pb-8 md:pl-16">
              <span>&copy; TecnoVision 2023 - Proyecto 122- <span id="year"></span> </span>
              <span>Derechos resvervados <span className='font-bold text-cyan-800'>@TecnoVision</span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
                                      
  );
}

export default Footer;
