import React from 'react';
import iphone from '../assets/productos/apple.png';
import { Link } from 'react-router-dom';
import Form from '../components/Form';


function Home() {

    

    const stats = [
        {
            data: "1500+",
            desc: "Productos vendidos a clientes satisfechos."
        },
        {
            data: "10K+",
            desc: "Descargas de nuestra aplicación móvil para una experiencia de compra mejorada."
        },
        {
            data: "10+",
            desc: "Países a los que enviamos nuestros productos tecnológicos."
        },
        {
            data: "100K+",
            desc: "Ingresos totales generados por la venta de nuestros productos tecnológicos."
        },
    ];

    const contactMethods = [
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
            ,
            contact: "soporte@tecnovision.com"
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
            ,
            contact: "+591 7775500"
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
            ,
            contact: "La Paz - Bolivia"
        },
    ];
  return (
    <>
    <section className="min-h-screen flex" >
        <div className="container max-w-screen-xl m-auto px-6 py-40 md:px-12 lg:py-0 lg:px-14">
            <div className="flex items-center flex-wrap gap-12 lg:gap-0">
                <div className="lg:w-5/12 space-y-8">
                    <span className="flex space-x-2">
                        <span className="block w-14 mb-2 border-b-2 border-gray-600"></span>
                        <span className="font-medium text-gray-600 dark:text-gray-400">Novedades de este verano</span>
                    </span>
                    <h1 className="text-4xl font-bold md:text-6xl dark:text-white ">El nuevo <br/> Iphone 15 Pro Max</h1>
                    <p className="text-xl text-gray-700 dark:text-gray-300">Descubre la última tecnología, explora nuestras ofertas exclusivas y disfruta de una experiencia de compra sin igual. Tu satisfacción es nuestra prioridad.</p>
                    
                    <div className="flex space-x-4">
                        <Link to="/" class="md:w-full bg-indigo-950 md:text-center text-white border border-indigo-800 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                             <span class="bg-indigo-800 shadow-indigo-800 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                                    Comprar Ahora!
                        </Link>
                        <Link
                            to="/telefonos"
                            type="button"
                            title="Ver catalogo"
                            className="group md:w-full py-3 px-6 md:text-center transition border border-transparent hover:border-indigo-900 bg:active:bg-indigo-800 dark:focus:bg-yellow-900 active:bg-yellow-200 focus:bg-yellow-100 sm:w-max"
                            >
                            <span className="block text-gray-700 dark:text-white font-semibold group-focus:text-yellow-700 dark:group-focus:text-yellow-100">
                                Ver productos
                            </span>
                        </Link>

                    </div>
                </div>

                <div className="hidden relative md:block lg:w-7/12 md:pt-28">
                    <div aria-hidden="true" className=" absolute inset-0 m-auto w-[30rem] h-[30rem] rounded-full bg-yellow-200">

                    </div>
                    <img src={ iphone } className="relative ml-auto" alt=""/>
                </div>
            </div>
        </div>
        
    </section>

    <section className="py-28 bg-gray-900 glass-container  ">
    <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:px-8  ">
        <div className="max-w-2xl xl:mx-auto xl:text-center">
            <h3 className="text-white text-3xl font-semibold sm:text-4xl">
                 Nuestros clientes siempre están contentos.
            </h3>
            <p className="mt-3 text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis sollicitudin quam ut tincidunt.
            </p>
        </div>
        <div className="mt-12 flex ">
            <ul className="flex-wrap gap-x-12 gap-y-10 space-y-8 sm:space-y-0 sm:flex xl:justify-center">
                
                {
                    stats.map((item, idx) => (
                        <li key={idx} className="sm:max-w-[15rem] flex justify-center flex-col items-center ">
                            
                            <div class="group bg-transparent duration-500 w-44 h-44 flex text-neutral-600 flex-col justify-center items-center relative rounded-xl overflow-hidden shadow-md">
                                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="absolute blur z-10 fill-cyan-700 duration-500 group-hover:blur-none group-hover:scale-105">
                                    <path transform="translate(100 100)" d="M39.5,-49.6C54.8,-43.2,73.2,-36.5,78.2,-24.6C83.2,-12.7,74.8,4.4,69,22.5C63.3,40.6,60.2,59.6,49.1,64.8C38.1,70,19,61.5,0.6,60.7C-17.9,59.9,-35.9,67,-47.2,61.9C-58.6,56.7,-63.4,39.5,-70,22.1C-76.6,4.7,-84.9,-12.8,-81.9,-28.1C-79,-43.3,-64.6,-56.3,-49.1,-62.5C-33.6,-68.8,-16.8,-68.3,-2.3,-65.1C12.1,-61.9,24.2,-55.9,39.5,-49.6Z"></path>
                                </svg>
                                <div class="z-20 flex flex-col justify-center items-center relative">
                                    <h4 class="font-bold text-6xl ml-2 text-white">
                                        {item.data}
                                    </h4>
                                </div>
                            </div>

                            
                            <p className="mt-3 text-gray-400 font-medium">{item.desc}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
    <div className="absolute inset-0 max-w-md mx-auto h-80 blur-[118px] sm:h-72" style={{ background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)" }}></div>
    </section>
    
    <main className="py-24 ">
            <div className="max-w-screen-xl mx-auto px-4 text-white md:px-8 ">
                <div className="max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none ">
                    <div className="max-w-lg space-y-3 my-28 ">
                        <h3 className="text-cyan-600 font-bold sm:text-2xl gradient-text ">
                            Contacto
                        </h3>
                        <p className="text-cyan-800 text-3xl font-semibold sm:text-4xl gradient-text">
                            Háganos saber cómo podemos ayudar
                        </p>
                        <p>
                            Estamos aquí para ayudarlo y responder cualquier pregunta que pueda tener. ¡Esperamos tener noticias suyas! Complete el formulario o envíenos la información de contacto a continuación.
                        </p>
                        <div>
                            <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-6 items-center">
                                {
                                    contactMethods.map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-x-3">
                                            <div className="flex-none text-gray-400">
                                                {item.icon}
                                            </div>
                                            <p>{item.contact}</p>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="flex-1 mt-12 sm:max-w-lg lg:max-w-md">
                       <Form />
                    </div>
                </div>
            </div>
        </main>
    
    </>
  );
}

export default Home;
