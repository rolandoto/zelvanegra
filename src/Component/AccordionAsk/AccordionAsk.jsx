import React from "react";
import AccordionItem from "../AccordionItem/AccordionItem";


const AccordionAsk =({faqs}) =>{

    return ( <section className=" flex flex-col items-center  max-w-7xl md:flex-row container mx-auto py-12">
                <div className="md:w-1/2 px-4 ">
                    <h2 className="text-[30px] text-center  font-lora text-black mb-6">Preguntas frecuentes</h2>
                    <div>
                        {faqs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                        />
                        ))}
                    </div>
                </div>
                <div className="md:w-1/2 px-4 mt-8 md:mt-0">
                    <img src="https://grupo-hoteles.com/storage/app/7/page/543762282-7-page-slider-1-one-million-poblado-medellin-antioquia-colombia.png" />
                </div>
            </section>)
}

export default AccordionAsk