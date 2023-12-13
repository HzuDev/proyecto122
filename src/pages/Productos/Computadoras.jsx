import React, { useContext, useState } from "react";
import { CartContext } from "../../functions/cartContext";
import Modal from "../../components/Modal";

function Computadoras() {
  const {
    cart,
    showModal,
    addToCart,
    removeFromCart,
    updateQuantity,
    calculateTotal,
    setShowModal,
    showMessage,
  } = useContext(CartContext);

  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <section>
            <h2 className="text-xl font-bold text-gray-100 sm:text-3xl">
              Computadoras y laptos
            </h2>

            <p className="mt-4 max-w-md text-gray-300">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              praesentium cumque iure dicta incidunt est ipsam, officia dolor
              fugit natus?
            </p>
          </section>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {showMessage && (
        <div className="fixed bottom-0 left-0 bg-yellow-500 p-4">
          Se agregó un producto al carrito.
        </div>
      )}
            <li>
              <a href="#" className="group block overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1634003309303-442c7518f9e9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="text-center relative bg-gradient-to-r from-indigo-900 via-indigo-800 to-blue-750 pt-3 z-10">
                  <h3 className=" text-xs text-gray-300 group-hover:underline group-hover:underline-offset-4 px-2">
                    Basic Tee
                  </h3>

                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>

                    <span className=" tracking-wider text-gray-300 px-2">
                      {" "}
                      150.99 USD{" "}
                    </span>
                  </p>

                  <button
                    onClick={(event) => addToCart("Basic Tee", 150.99, event)}
                    className="w-full bg-indigo-950 text-white border border-indigo-800 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group mt-2"
                  >
                    <span className="bg-indigo-800 shadow-indigo-800 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                    Comprar Ahora!
                  </button>
                </div>
              </a>
            </li>

            <li>
              <a href="#" className="group block overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1634003309303-442c7518f9e9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="text-center relative bg-gradient-to-r from-indigo-900 via-indigo-800 to-blue-750 pt-3 z-10">
                  <h3 className=" text-xs text-gray-300 group-hover:underline group-hover:underline-offset-4 px-2">
                    Medium Tee
                  </h3>

                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>

                    <span className=" tracking-wider text-gray-300 px-2">
                      {" "}
                      150.99 USD{" "}
                    </span>
                  </p>

                  <button
                    onClick={(event) => addToCart("Medium Tee", 170.99, event)}
                    className="w-full bg-indigo-950 text-white border border-indigo-800 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group mt-2"
                  >
                    <span className="bg-indigo-800 shadow-indigo-800 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                    Comprar Ahora!
                  </button>
                </div>
              </a>
            </li>

            <li>
              <a href="#" className="group block overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1634003309303-442c7518f9e9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="text-center relative bg-gradient-to-r from-indigo-900 via-indigo-800 to-blue-750 pt-3 z-10">
                  <h3 className=" text-xs text-gray-300 group-hover:underline group-hover:underline-offset-4 px-2">
                    Pro Tee
                  </h3>

                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>

                    <span className=" tracking-wider text-gray-300 px-2">
                      {" "}
                      550.99 USD{" "}
                    </span>
                  </p>

                  <button
                    onClick={(event) => addToCart("Pro Tee", 550.99, event)}
                    className="w-full bg-indigo-950 text-white border border-indigo-800 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group mt-2"
                  >
                    <span className="bg-indigo-800 shadow-indigo-800 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                    Comprar Ahora!
                  </button>
                </div>
              </a>
            </li>

            <li>
              <a href="#" className="group block overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1634003309303-442c7518f9e9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="text-center relative bg-gradient-to-r from-indigo-900 via-indigo-800 to-blue-750 pt-3 z-10">
                  <h3 className=" text-xs text-gray-300 group-hover:underline group-hover:underline-offset-4 px-2">
                    Pro Tee
                  </h3>

                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>

                    <span className=" tracking-wider text-gray-300 px-2">
                      {" "}
                      550.99 USD{" "}
                    </span>
                  </p>

                  <button
                    onClick={(event) => addToCart("Pro Tee", 550.99, event)}
                    className="w-full bg-indigo-950 text-white border border-indigo-800 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group mt-2"
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
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <li>
              <a href="#" className="group block overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1634003309303-442c7518f9e9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="text-center relative bg-gradient-to-r from-indigo-900 via-indigo-800 to-blue-750 pt-3 z-10">
                  <h3 className=" text-xs text-gray-300 group-hover:underline group-hover:underline-offset-4 px-2">
                    Medium Tee
                  </h3>

                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>

                    <span className=" tracking-wider text-gray-300 px-2">
                      {" "}
                      150.99 USD{" "}
                    </span>
                  </p>

                  <button
                    onClick={(event) => addToCart("Medium Tee", 170.99, event)}
                    className="w-full bg-indigo-950 text-white border border-indigo-800 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group mt-2"
                  >
                    <span className="bg-indigo-800 shadow-indigo-800 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                    Comprar Ahora!
                  </button>
                </div>
              </a>
            </li>

            <li>
              <a href="#" className="group block overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1634003309303-442c7518f9e9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="text-center relative bg-gradient-to-r from-indigo-900 via-indigo-800 to-blue-750 pt-3 z-10">
                  <h3 className=" text-xs text-gray-300 group-hover:underline group-hover:underline-offset-4 px-2">
                    Medium Tee
                  </h3>

                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>

                    <span className=" tracking-wider text-gray-300 px-2">
                      {" "}
                      150.99 USD{" "}
                    </span>
                  </p>

                  <button
                    onClick={(event) => addToCart("Medium Tee", 170.99, event)}
                    className="w-full bg-indigo-950 text-white border border-indigo-800 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group mt-2"
                  >
                    <span className="bg-indigo-800 shadow-indigo-800 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                    Comprar Ahora!
                  </button>
                </div>
              </a>
            </li>

            <li>
              <a href="#" className="group block overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1634003309303-442c7518f9e9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="text-center relative bg-gradient-to-r from-indigo-900 via-indigo-800 to-blue-750 pt-3 z-10">
                  <h3 className=" text-xs text-gray-300 group-hover:underline group-hover:underline-offset-4 px-2">
                    Medium Tee
                  </h3>

                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>

                    <span className=" tracking-wider text-gray-300 px-2">
                      {" "}
                      150.99 USD{" "}
                    </span>
                  </p>

                  <button
                    onClick={(event) => addToCart("Medium Tee", 170.99, event)}
                    className="w-full bg-indigo-950 text-white border border-indigo-800 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group mt-2"
                  >
                    <span className="bg-indigo-800 shadow-indigo-800 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                    Comprar Ahora!
                  </button>
                </div>
              </a>
            </li>

            <li>
              <a href="#" className="group block overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1634003309303-442c7518f9e9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="text-center relative bg-gradient-to-r from-indigo-900 via-indigo-800 to-blue-750 pt-3 z-10">
                  <h3 className=" text-xs text-gray-300 group-hover:underline group-hover:underline-offset-4 px-2">
                    Basic Tee
                  </h3>

                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>

                    <span className=" tracking-wider text-gray-300 px-2">
                      {" "}
                      150.99 USD{" "}
                    </span>
                  </p>

                  <button
                    onClick={(event) => addToCart("Basic Tee", 150.99, event)}
                    className="w-full bg-indigo-950 text-white border border-indigo-800 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group mt-2"
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

export default Computadoras;
