import React from 'react';
import ReactPlayer from 'react-player';

function Galeria() {
  return (
    <>
        <section className="py-6   my-14">
          <h2 className='text-center font-bold text-white pt-10 text-4xl pb-10'>Imagenes de Nuestros productos</h2>
            <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                <img src="https://source.unsplash.com/random/301x301/" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
                <img alt="" className="w-full h-full rounded shado /w-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?0" />
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?1" />
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?2" />
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?3" />
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?4" />
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?5" />
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?6" />
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?7" />
                <img src="https://source.unsplash.com/random/302x302/" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square" />
            </div>
        </section>

        <section className='container mx-auto flex justify-center items-center pb-14'>
          <div className="w-full md:w-96 lg:w-2/3 xl:w-3/4 h-96">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=e0WgmZa8vvI"
              controls={true}
              width="100%"
              height="100%"
            />
          </div>
        </section>


    </>
  );
}

export default Galeria;
