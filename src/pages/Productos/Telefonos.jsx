import React, { useContext } from "react";
import { CartContext } from "../../functions/cartContext";
import Modal from "../../components/Modal";

function Telefonos() {
  const {
    cart,
    showModal,
    addToCart,
    removeFromCart,
    updateQuantity,
    calculateTotal,
    setShowModal,
  } = useContext(CartContext);

  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="text-xl font-bold text-gray-100 sm:text-3xl">
              Lo más nuevo llegó ahora.
            </h2>

            <p className="mx-auto mt-4 max-w-md text-gray-300">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              praesentium cumque iure dicta incidunt est ipsam, officia dolor
              fugit natus?
            </p>
          </header>

          <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
            <li>
              <a href="#" className="group relative block">
                <img
                  src="https://images.unsplash.com/photo-1595941069915-4ebc5197c14a?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6 bg-black bg-opacity-50">
                  <h3 className="text-xl font-medium text-white pb-0">
                    Huawei P40 Pro
                  </h3>
                  <span className="font-bold text-indigo-500 p-0 m-0 pb-1">
                    1099.00 USD
                  </span>

                  <button
                    onClick={(event) =>
                      addToCart("Huawei P40 Pro", 1099.0, event)
                    }
                    className=" bg-indigo-950 text-white border border-indigo-800 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group mt-2"
                  >
                    <span className="bg-indigo-800 shadow-indigo-800 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                    Comprar Ahora!
                  </button>
                </div>
              </a>
              
            </li>

            <li>
              <a href="#" className="group relative block">
                <img
                  src="https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white pb-2">
                    Samsung S21 Ultra 5G
                  </h3>
                  <span className="font-bold text-indigo-500 p-0 m-0 pb-1">
                    1299.00 USD
                  </span>

                  <button
                    onClick={(event) =>
                      addToCart("Samsung S21 Ultra 5G", 1299.0, event)
                    }
                    className=" bg-indigo-950 text-white border border-indigo-800 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group mt-2"
                  >
                    <span className="bg-indigo-800 shadow-indigo-800 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                    Comprar Ahora!
                  </button>
                </div>
              </a>
             
            </li>

            <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <a href="#" className="group relative block">
                <img
                  src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90 "
                />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white pb-2">
                    Iphone 15 Pro Max
                  </h3>
                  <span className="font-bold text-indigo-500 p-0 m-0 pb-1">
                    1500.00 USD
                  </span>

                  <button
                    onClick={(event) =>
                      addToCart("Iphone 15 Pro Max", 1500.0, event)
                    }
                    className=" bg-indigo-950 text-white border border-indigo-800 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group mt-2"
                  >
                    <span className="bg-indigo-800 shadow-indigo-800 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                    Comprar Ahora!
                  </button>
                </div>
              </a>
              
            </li>
          </ul>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
            <li className="lg:col-span-2 lg:col-start-1 lg:row-span-2 lg:row-start-1">
              <a href="#" className="group relative block">
                <img
                  src="https://images.unsplash.com/photo-1595941069915-4ebc5197c14a?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6 bg-black bg-opacity-50">
                  <h3 className="text-xl font-medium text-white pb-2">
                    Huawei P40 Pro
                  </h3>
                  <span className="font-bold text-indigo-500 p-0 m-0 pb-1">
                    1099.00 USD
                  </span>

                  <button
                    onClick={(event) =>
                      addToCart("Huawei P40 Pro", 1099.0, event)
                    }
                    className=" bg-indigo-950 text-white border border-indigo-800 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group mt-2"
                  >
                    <span className="bg-indigo-800 shadow-indigo-800 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                    Comprar Ahora!
                  </button>
                </div>
              </a>
             
            </li>

            <li className="lg:col-span-1 lg:col-start-3">
              <a href="#" className="group relative block">
                <img
                  src="https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white pb-2">
                    Samsung S21 Ultra 5G
                  </h3>
                  <button
                    onClick={(event) =>
                      addToCart("Samsung S21 Ultra 5G", 1299.0, event)
                    }
                    className=" bg-indigo-950 text-white border border-indigo-800 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group mt-2"
                  >
                    <span className="bg-indigo-800 shadow-indigo-800 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                    Comprar Ahora!
                  </button>
                </div>
              </a>
              
            </li>

            <li className="lg:col-span-1 lg:col-start-3">
              <a href="#" className="group relative block">
                <img
                  src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90 "
                />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white pb-2">
                    Iphone 15 Pro Max
                  </h3>
                  <span className="font-bold text-indigo-500 p-0 m-0 pb-1">
                    1500.00 USD
                  </span>

                  <button
                    onClick={(event) =>
                      addToCart("Iphone 15 Pro Max", 1500.0, event)
                    }
                    className=" bg-indigo-950 text-white border border-indigo-800 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group mt-2"
                  >
                    <span className="bg-indigo-800 shadow-indigo-800 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                    Comprar Ahora!
                  </button>
                </div>
              </a>
              
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Telefonos;
