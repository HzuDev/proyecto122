import React, { useContext } from "react";
import { CartContext } from "../../functions/cartContext";
import Modal from "../../components/Modal";

function Complementos() {
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
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
            <div class="grid place-content-center rounded-lg bg-gradient-to-r from-indigo-900 via-indigo-800 to-blue-750 border-solid border-2 border-indigo-500 p-6 sm:p-8">
              <div class="mx-auto max-w-md text-center lg:text-left">
                <section>
                  <h2 class="text-xl font-bold text-gray-100 sm:text-3xl block">
                    Complementos{" "}
                    <span class="gradient-text">pensado para ti!</span>
                  </h2>

                  <p class="mt-4 text-gray-300 pb-4">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Totam odio officia aliquid corporis qui adipisci dolore
                    suscipit quas, nihil ullam dolores inventore quis ab, alias
                    fugiat minima nostrum, ipsum similique!
                  </p>
                </section>

                <button class="w-full bg-indigo-950 text-white border border-indigo-800 border-b-4 font-medium overflow-hidden relative px-4  py-2 rounded-md   hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                  <span class="bg-indigo-800 shadow-indigo-800 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                  Comprar Ahora!
                </button>
              </div>
            </div>

            <div class="lg:col-span-2 lg:py-8">
              <ul class="grid grid-cols-2 gap-4">
                <li>
                  <a href="#" class="group block">
                    <img
                      src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80"
                      alt=""
                      class="aspect-square w-full rounded object-cover"
                    />

                    <div class="mt-3">
                      <h3 class="font-medium text-gray-200 group-hover:underline group-hover:underline-offset-4">
                        SmartWatch D1
                      </h3>

                      <p class="mt-1 text-sm text-gray-400">150.99 USD</p>
                    </div>
                    <button
                      onClick={(event) =>
                        addToCart("SmartWatch D1", 150.99, event)
                      }
                      className="w-full bg-indigo-950 text-white border border-indigo-800 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group mt-2"
                    >
                      <span className="bg-indigo-800 shadow-indigo-800 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                      Comprar Ahora!
                    </button>
                  </a>
                </li>

                <li>
                  <a href="#" class="group block">
                    <img
                      src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80"
                      alt=""
                      class="aspect-square w-full rounded object-cover"
                    />

                    <div class="mt-3">
                      <h3 class="font-medium text-gray-200 group-hover:underline group-hover:underline-offset-4">
                        Simple Watch P2
                      </h3>

                      <p class="mt-1 text-sm text-gray-400">250.49 USD</p>
                    </div>
                    <button
                      onClick={(event) =>
                        addToCart("Simple Watch P2", 250.49, event)
                      }
                      className="w-full bg-indigo-950 text-white border border-indigo-800 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group mt-2"
                    >
                      <span className="bg-indigo-800 shadow-indigo-800 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                      Comprar Ahora!
                    </button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
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
    </>
  );
}

export default Complementos;
