import React from 'react';

function Creditos() {
  
    return (
     
        <>
        <section class="mt-14 mb-14 flex flex-col items-center justify-center glass-container bg-gray-100 rounded-lg shadow-lg p-8 max-w-3xl mx-auto font-[sans-serif]">
          <blockquote class="text-xl   font-bold text-gray-100 mb-10 text-center">
            Sitio web simulando una "tienda de productos tecnologicos".
            <p class="text-base text-gray-200 block mt-2">— Lic: Marisol Tellez - Paralelo 'A' —</p>
            <p class="text-base text-gray-200 block mt-2">— Cuenca Nava Ricardo Rene - Paralelo 'A' —</p>
            <p class="text-base text-gray-200 block mt-2">— Programacion Web II —</p>
          </blockquote>
          <div class="text-center text-gray-200">
            
            <p>Sitio Web creado con React JS.</p>
            <p>Todos los nombres y texto, fueron generados aleatoriamente.</p>
          </div>
        </section>
        </>
     
    );
  
}

export default Creditos;
