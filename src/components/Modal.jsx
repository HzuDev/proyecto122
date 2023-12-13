import React, { useContext } from 'react';
import { CartContext } from '../functions/cartContext';

function Modal() {
  const { cart, showModal, removeFromCart, updateQuantity, calculateTotal, setShowModal } = useContext(CartContext);

  if (!showModal) {
    return null;
  }

  return (
    <div className="absolute pt-1 pb-1 ">
      <div className="flex h-64 justify-center">
        <div className="absolute">
          
          <div className="absolute w-full rounded-b border-t-0 z-10">
            <div className="shadow-xl w-64">
              {cart.map((item) => (
                <div className="p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100">
                  <div className="p-2 w-12"><img src="https://dummyimage.com/50x50/bababa/0011ff&text=50x50" alt="img product" /></div>
                  <div className="flex-auto text-sm w-32">
                    <div className="font-bold">{item.product}</div>
                    <div className="truncate">Product description</div>
                    <div className="text-gray-400">Qt: {item.quantity}</div>
                  </div>
                  <div className="flex flex-col w-18 font-medium items-end">
                    <div className="w-4 h-4 mb-6 hover:bg-red-200 rounded-full cursor-pointer text-red-700">
                      <button onClick={() => removeFromCart(item.product)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-trash-2 ">
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                          <line x1="10" y1="11" x2="10" y2="17"></line>
                          <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                      </button>
                    </div>
                    ${item.price}
                  </div>
                </div>
              ))}
              <div className="p-4 justify-center flex">
                <button onClick={() => setShowModal(false)} className="text-base  undefined  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                hover:bg-teal-700 hover:text-teal-100 
                bg-teal-100 
                text-teal-700 
                border duration-200 ease-in-out 
                border-teal-600 transition">Checkout ${calculateTotal()}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-32"></div>
    </div>
  );
}

export default Modal;
