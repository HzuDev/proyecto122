import React, { useState } from "react";

function Form() {
  const [datosForm, envioDatosForm] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const [formEnviado, formEnviadoExit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    envioDatosForm({ ...datosForm, [name]: value });
  };

  const enviarMensaje = (e) => {
    e.preventDefault();
    formEnviadoExit(true);
    envioDatosForm({
      nombre: "",
      email: "",
      asunto: "",
      mensaje: "",
    });

    setTimeout(() => {
      formEnviadoExit(false);
    }, 3000);
  };

  return (
    <>
      <div className="flex-1 mt-12 sm:max-w-lg lg:max-w-md">
        {formEnviado && (
          <div className="mt-12 mx-4 px-4 rounded-md border-l-4 border-green-500 bg-green-50 md:max-w-2xl md:mx-auto md:px-8 mb-5">
            <div className="flex justify-between py-3">
              <div className="flex">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 rounded-full text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="self-center ml-3">
                  <span className="text-green-600 font-semibold">Success</span>
                  <p className="text-green-600 mt-1">
                    Team member has been added successfully.
                  </p>
                </div>
              </div>
              <button className="self-start text-green-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
        <form onSubmit={enviarMensaje} className="space-y-5">
          <div>
            <label className="font-medium">Nombre Completo:</label>
            <input
              type="text"
              name="nombre"
              value={datosForm.nombre}
              onChange={handleChange}
              required
              className="w-full mt-2 px-3 py-2 text-white bg-transparent outline-none border focus:border-cyan-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">Correo Electronico:</label>
            <input
              type="email"
              name="email"
              value={datosForm.email}
              onChange={handleChange}
              required
              className="w-full mt-2 px-3 py-2 text-white bg-transparent outline-none border focus:border-cyan-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">Asunto:</label>
            <input
              type="text"
              name="asunto"
              value={datosForm.asunto}
              onChange={handleChange}
              required
              className="w-full mt-2 px-3 py-2 text-white bg-transparent outline-none border focus:border-cyan-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">Mensaje:</label>
            <textarea
              name="mensaje"
              value={datosForm.mensaje}
              onChange={handleChange}
              required
              className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-cyan-600 shadow-sm rounded-lg"
            ></textarea>
          </div>

          <button class="w-full bg-indigo-950 text-white border border-indigo-800 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
            <span class="bg-indigo-800 shadow-indigo-800 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            Enviar
          </button>
        </form>
      </div>
    </>
  );
}

export default Form;
