import React from 'react';

function Faq() {
    const faqsList = [
        {
            q: "¿Cuáles son algunas preguntas aleatorias para hacer?",
            a: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum accusantium quo debitis eveniet aliquid odio ratione magnam repellat sequi, iure in quis asperiores dolorum, facere qui. Officiis ipsum nulla corporis!"
        },
        {
            q: "¿Incluye preguntas comunes?",
            a: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum accusantium quo debitis eveniet aliquid odio ratione magnam repellat sequi, iure in quis asperiores dolorum, facere qui. Officiis ipsum nulla corporis!."
        },
        {
            q: "¿Puedo usar esto para 21 preguntas?",
            a: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum accusantium quo debitis eveniet aliquid odio ratione magnam repellat sequi, iure in quis asperiores dolorum, facere qui. Officiis ipsum nulla corporis!"
        },
        {
            q: "¿Estas preguntas son para niñas o para niños?",
            a: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum accusantium quo debitis eveniet aliquid odio ratione magnam repellat sequi, iure in quis asperiores dolorum, facere qui. Officiis ipsum nulla corporis!"
        },
        {
            q: "¿Qué te gustaría tener más talento haciendo?",
            a: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum accusantium quo debitis eveniet aliquid odio ratione magnam repellat sequi, iure in quis asperiores dolorum, facere qui. Officiis ipsum nulla corporis!"
        }
    ]
  return (
    <>
        <section className='py-14 bg-gray-800 glass-container my-14'>
            <div className="max-w-screen-xl mx-auto px-4 gap-12 md:flex md:px-8">
                <div className='flex-1'>
                    <div className="max-w-lg">
                        <h3 className='font-semibold text-indigo-400'>
                             Preguntas frecuentes                        
                        </h3>
                        <p className='mt-3 text-white text-3xl font-extrabold sm:text-4xl'>
                           Toda la información que necesitas saber
                        </p>
                    </div>
                </div>
                <div className='flex-1 mt-12 md:mt-0'>
                    <ul className='space-y-4 divide-y divide-gray-700'>
                        {faqsList.map((item, idx) => (
                            <li
                                className="py-5"
                                key={idx}>
                                <summary
                                    className="flex items-center justify-between font-semibold text-gray-200">
                                    {item.q}
                                </summary>
                                <p
                                    dangerouslySetInnerHTML={{ __html: item.a }}
                                    className='mt-3 text-gray-300 leading-relaxed'>
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    </>
  );
}

export default Faq;
