import React from "react";

function Empresa() {
  return (
    <>
      <div className="bg-transparent py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-100 md:mb-6 lg:text-3xl">
              Conoce a nuestro Equipo
            </h2>

            <p className="mx-auto max-w-screen-md text-center text-gray-200 md:text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit,
              ratione eos autem molestias ducimus ipsam eaque id est, dolorum
              quisquam maxime voluptates sit voluptatibus sunt perspiciatis.
              Quod repellat sint explicabo.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
            <div>
              <div className="mb-2 h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg sm:mb-4 sm:h-60 md:h-80">
                <img
                  src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=500"
                  loading="lazy"
                  alt="Photo by Radu Florin"
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div>
                <div className="font-bold md:text-lg gradient-text">
                  John McCulling
                </div>

                <p className="mb-3 text-sm text-gray-500 md:mb-4 md:text-base">
                  Fundador / C.E.O.
                </p>

                
              </div>
            </div>

            <div>
              <div className="mb-2 h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg sm:mb-4 sm:h-60 md:h-80">
                <img
                  src="https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=500"
                  loading="lazy"
                  alt="Photo by christian ferrer"
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div>
                <div className="font-bold md:text-lg gradient-text">
                  Kate Berg
                </div>
                <p className="mb-3 text-sm text-gray-500 md:mb-4 md:text-base">
                  C.F.O.
                </p>

                
              </div>
            </div>

            <div>
              <div className="mb-2 h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg sm:mb-4 sm:h-60 md:h-80">
                <img
                  src="https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&q=75&fit=crop&w=500"
                  loading="lazy"
                  alt="Photo by Ayo Ogunseinde"
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div>
                <div className="font-bold md:text-lg gradient-text">
                  Greg Jackson
                </div>
                <p className="mb-3 text-sm text-gray-500 md:mb-4 md:text-base">
                  C.T.O.
                </p>

                
              </div>
            </div>

            <div>
              <div className="mb-2 h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg sm:mb-4 sm:h-60 md:h-80">
                <img
                  src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?auto=format&q=75&fit=crop&w=500"
                  loading="lazy"
                  alt="Photo by Midas Hofstra"
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div>
                <div className="font-bold md:text-lg gradient-text">
                  Robert Greyson
                </div>
                <p className="mb-3 text-sm text-gray-500 md:mb-4 md:text-base">
                  C.M.O.
                </p>

                
              </div>
            </div>

            <div>
              <div className="mb-2 h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg sm:mb-4 sm:h-60 md:h-80">
                <img
                  src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&q=75&fit=crop&w=500"
                  loading="lazy"
                  alt="Photo by Elizeu Dias"
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div>
                <div className="font-bold md:text-lg gradient-text">
                  John Roberts
                </div>
                <p className="mb-3 text-sm text-gray-500 md:mb-4 md:text-base">
                  C.O.O.
                </p>

               
              </div>
            </div>

            <div>
              <div className="mb-2 h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg sm:mb-4 sm:h-60 md:h-80">
                <img
                  src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&q=75&fit=crop&w=500"
                  loading="lazy"
                  alt="Photo by Matheus Ferrero"
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div>
                <div className="font-bold md:text-lg gradient-text">
                  Judy Amandez
                </div>
                <p className="mb-3 text-sm text-gray-500 md:mb-4 md:text-base">
                  C.I.O.
                </p>

               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Empresa;
