import React from 'react';

function Gaming() {
  return (
    <>
        <section class="bg-tranparent py-6 sm:py-8 lg:py-12">
            <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
               
                <div class="mb-10 md:mb-16">
                    <h2 class="mb-4 text-center text-2xl font-bold text-gray-100 md:mb-6 lg:text-3xl">Los mejores componente Gaming para tu computadora!</h2>

                    <p class="mx-auto max-w-screen-md text-center text-gray-200 md:text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel repellendus odit facere. Minima quidem eaque ullam alias saepe, modi laudantium dolor laboriosam itaque mollitia earum sequi voluptas, eveniet aspernatur quae!</p>
                </div>
              

                <div class="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
              
                <div>
                    <a href="#" class="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
                    <img src="https://images.unsplash.com/photo-1672211775632-bcb4b68eb2bd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" loading="lazy" alt="Photo by Austin Wade" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                    <div class="absolute left-0 bottom-2 flex gap-2">
                        <span class="rounded-r-lg bg-indigo-500 px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-white">-50%</span>
                        <span class="rounded-lg bg-white px-3 py-1.5 text-sm font-bold uppercase tracking-wider text-gray-800">Nuevo</span>
                    </div>
                    </a>

                    <div class="flex items-start justify-between gap-2 px-2">
                    <div class="flex flex-col">
                        <a href="#" class="text-lg font-bold text-gray-100 transition duration-100 hover:text-gray-500 lg:text-xl">Teclado Mecanico</a>
                        <span class="text-gray-500">Precio Original</span>
                    </div>

                    <div class="flex flex-col items-end">
                        <span class="font-bold text-gray-400 lg:text-base">19.99 USD</span>
                        <span class="text-sm text-red-500 line-through">39.99 USD</span>
                    </div>
                    
                    </div>
                    <button className="w-full bg-indigo-950 text-white border border-indigo-800 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group mt-2">
                                <span className="bg-indigo-800 shadow-indigo-800 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                                Comprar Ahora!
                    </button>
                </div>
            

                <div>
                    <a href="#" class="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
                    <img src="https://images.unsplash.com/photo-1616296425622-4560a2ad83de?q=80&w=1426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" loading="lazy" alt="Photo by Nick Karvounis" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                    </a>

                    <div class="flex items-start justify-between gap-2 px-2">
                    <div class="flex flex-col">
                        <a href="#" class="text-lg font-bold text-gray-100 transition duration-100 hover:text-gray-500 lg:text-xl">Mause Gaming</a>
                        <span class="text-gray-500">Sin descuento</span>
                    </div>

                    <div class="flex flex-col items-end">
                        <span class="font-bold text-gray-400 lg:text-lg">29.99 USD</span>
                    </div>
                    </div>
                    <button className="w-full bg-indigo-950 text-white border border-indigo-800 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group mt-2">
                                <span className="bg-indigo-800 shadow-indigo-800 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                                Comprar Ahora!
                    </button>
                </div>
             

                <div>
                    <a href="#" class="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
                    <img src="https://images.unsplash.com/photo-1646474743891-bf392f137930?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" loading="lazy" alt="Photo by Austin Wade" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                    </a>

                    <div class="flex items-start justify-between gap-2 px-2">
                    <div class="flex flex-col">
                        <a href="#" class="text-lg font-bold text-gray-100 transition duration-100 hover:text-gray-500 lg:text-xl">Teclado Mecanico</a>
                        <span class="text-gray-500">Sin descuento</span>
                    </div>

                    <div class="flex flex-col items-end">
                        <span class="font-bold text-gray-400 lg:text-base">35.00 USD</span>
                    </div>
                    </div>
                    <button className="w-full bg-indigo-950 text-white border border-indigo-800 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group mt-2">
                                <span className="bg-indigo-800 shadow-indigo-800 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                                Comprar Ahora!
                    </button>
                </div>


                <div>
                    <a href="#" class="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
                    <img src="https://images.unsplash.com/photo-1646474743891-bf392f137930?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" loading="lazy" alt="Photo by Vladimir Fedotov" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                    </a>

                    <div class="flex items-start justify-between gap-2 px-2">
                    <div class="flex flex-col">
                        <a href="#" class="text-lg font-bold text-gray-100 transition duration-100 hover:text-gray-500 lg:text-xl">Teclado Mecanico</a>
                        <span class="text-gray-500">Sin descuento</span>
                    </div>

                    <div class="flex flex-col items-end">
                        <span class="font-bold text-gray-400 lg:text-base">49.99 USD</span>
                    </div>
                    </div>
                    <button className="w-full bg-indigo-950 text-white border border-indigo-800 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group mt-2">
                                <span className="bg-indigo-800 shadow-indigo-800 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                                Comprar Ahora!
                    </button>
                </div>
            </div>



            <div class="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4 pt-10">
              
                <div>
                    <a href="#" class="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
                    <img src="https://images.unsplash.com/photo-1672211775632-bcb4b68eb2bd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" loading="lazy" alt="Photo by Austin Wade" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                    <div class="absolute left-0 bottom-2 flex gap-2">
                        <span class="rounded-r-lg bg-indigo-500 px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-white">-50%</span>
                        <span class="rounded-lg bg-white px-3 py-1.5 text-sm font-bold uppercase tracking-wider text-gray-800">Nuevo</span>
                    </div>
                    </a>

                    <div class="flex items-start justify-between gap-2 px-2">
                    <div class="flex flex-col">
                        <a href="#" class="text-lg font-bold text-gray-100 transition duration-100 hover:text-gray-500 lg:text-xl">Teclado Mecanico</a>
                        <span class="text-gray-500">Sin descuento</span>
                    </div>

                
                    
                    </div>
                    <button className="w-full bg-indigo-950 text-white border border-indigo-800 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group mt-2">
                                <span className="bg-indigo-800 shadow-indigo-800 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                                Comprar Ahora!
                    </button>
                </div>
            

                <div>
                    <a href="#" class="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
                    <img src="https://images.unsplash.com/photo-1616296425622-4560a2ad83de?q=80&w=1426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" loading="lazy" alt="Photo by Nick Karvounis" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                    </a>

                    <div class="flex items-start justify-between gap-2 px-2">
                    <div class="flex flex-col">
                        <a href="#" class="text-lg font-bold text-gray-100 transition duration-100 hover:text-gray-500 lg:text-xl">Mause Gaming</a>
                        <span class="text-gray-500">Sin descuento</span>
                    </div>

                    <div class="flex flex-col items-end">
                        <span class="font-bold text-gray-400 lg:text-lg">29.99 USD</span>
                    </div>
                    </div>
                    <button className="w-full bg-indigo-950 text-white border border-indigo-800 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group mt-2">
                                <span className="bg-indigo-800 shadow-indigo-800 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                                Comprar Ahora!
                    </button>
                </div>
             

                <div>
                    <a href="#" class="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
                    <img src="https://images.unsplash.com/photo-1646474743891-bf392f137930?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" loading="lazy" alt="Photo by Austin Wade" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                    </a>

                    <div class="flex items-start justify-between gap-2 px-2">
                    <div class="flex flex-col">
                        <a href="#" class="text-lg font-bold text-gray-100 transition duration-100 hover:text-gray-500 lg:text-xl">Teclado Mecanico</a>
                        <span class="text-gray-500">Sin descuento</span>
                    </div>

                    <div class="flex flex-col items-end">
                        <span class="font-bold text-gray-400 lg:text-base">35.00 USD</span>
                    </div>
                    </div>
                    <button className="w-full bg-indigo-950 text-white border border-indigo-800 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group mt-2">
                                <span className="bg-indigo-800 shadow-indigo-800 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                                Comprar Ahora!
                    </button>
                </div>


                <div>
                    <a href="#" class="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
                    <img src="https://images.unsplash.com/photo-1646474743891-bf392f137930?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" loading="lazy" alt="Photo by Vladimir Fedotov" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                    </a>

                    <div class="flex items-start justify-between gap-2 px-2">
                    <div class="flex flex-col">
                        <a href="#" class="text-lg font-bold text-gray-100 transition duration-100 hover:text-gray-500 lg:text-xl">Teclado Mecanico</a>
                        <span class="text-gray-500">Sin descuento</span>
                    </div>

                    <div class="flex flex-col items-end">
                        <span class="font-bold text-gray-400 lg:text-base">49.99 USD</span>
                    </div>
                    </div>
                    <button className="w-full bg-indigo-950 text-white border border-indigo-800 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group mt-2">
                                <span className="bg-indigo-800 shadow-indigo-800 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                                Comprar Ahora!
                    </button>
                </div>
             </div>


            </div>
        </section>
    </>
  );
}

export default Gaming;
